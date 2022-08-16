const BigNumber = require('bignumber.js');
const { MultiCall } = require('eth-multicall');
const { multicallAddress } = require('../../../utils/web3');
const IGauge = require('../../../abis/ISolidlyGauge.json');
const fetchPrice = require('../../../utils/fetchPrice');
import { getApyBreakdown } from '../common/getApyBreakdown';
import { getContract } from '../../../utils/contractHelper';

export const getSolidlyNotBoostedGaugeApys = async params => {
  const apys = await getFarmApys(params);

  return getApyBreakdown(params.pools, 0, apys, 0);
};

const getFarmApys = async params => {
  const apys = [];

  const rewardTokenPrice = await fetchPrice({ oracle: params.oracle, id: params.oracleId });
  const { balances, rewardRates, depositBalances } = await getPoolsData(params);

  for (let i = 0; i < params.pools.length; i++) {
    const pool = params.pools[i];

    const oracle = pool.oracle ?? 'lps';
    const id = pool.oracleId ?? pool.name;
    const stakedPrice = await fetchPrice({ oracle, id });

    const totalStakedInUsd = balances[i].times(stakedPrice).dividedBy(pool.decimals ?? '1e18');

    const secondsPerYear = 31536000;
    let yearlyRewards = 0;
    if (params.boosted) {
      yearlyRewards = rewardRates[i].times(secondsPerYear).times(0.4);
    } else {
      yearlyRewards = rewardRates[i].times(secondsPerYear);
    }
    const yearlyRewardsInUsd = yearlyRewards.times(rewardTokenPrice).dividedBy(params.decimals);

    const apy = yearlyRewardsInUsd.dividedBy(totalStakedInUsd);
    apys.push(apy);

    if (params.log) {
      console.log(
        pool.name,
        apy.toNumber(),
        totalStakedInUsd.valueOf(),
        yearlyRewardsInUsd.valueOf()
      );
    }
  }
  return apys;
};

const getPoolsData = async params => {
  const web3 = params.web3;
  const multicall = new MultiCall(web3, multicallAddress(params.chainId));
  const balanceCalls = [];
  const rewardRateCalls = [];
  const depositBalanceCalls = [];
  params.pools.forEach(pool => {
    const rewardPool = getContract(IGauge, pool.gauge);
    balanceCalls.push({
      balance: rewardPool.methods.totalSupply(),
    });
    rewardRateCalls.push({
      rewardRate: rewardPool.methods.rewardRate(params.reward),
    });
  });

  const res = await multicall.all([balanceCalls, rewardRateCalls, depositBalanceCalls]);

  const balances = res[0].map(v => new BigNumber(v.balance));
  const rewardRates = res[1].map(v => new BigNumber(v.rewardRate));
  const depositBalances = res[0].map(v => new BigNumber(v.depositBalance));
  return { balances, rewardRates, depositBalances };
};

module.exports = { getSolidlyNotBoostedGaugeApys };

import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const MATIC = {
  name: 'Wrapped Matic',
  address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  symbol: 'WMATIC',
  decimals: 18,
  chainId: 137,
  logoURI:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
} as const;

const MAI = {
  name: 'Mai',
  address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
  symbol: 'MAI',
  decimals: 18,
  chainId: 137,
  logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
} as const;

const _tokens = {
  $DG: {
    name: 'decentral.games',
    address: '0x2a93172c8DCCbfBC60a39d56183B7279a2F647b4',
    symbol: '$DG',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/dg.jpg',
  },
  '0xBTC': {
    name: '0xBitcoin Token',
    address: '0x71B821aa52a49F32EEd535fCA6Eb5aa130085978',
    symbol: '0xBTC',
    decimals: 8,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB6eD7644C69416d67B522e20bC294A9a9B405B31/logo.png',
  },
  AAVE: {
    name: 'Aave',
    address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    symbol: 'AAVE',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/aave_32.png',
  },
  AGA: {
    name: 'AGA Token',
    address: '0x033d942A6b495C4071083f4CDe1f17e986FE856c',
    symbol: 'AGA',
    decimals: 4,
    chainId: 137,
    logoURI: 'https://i.imgur.com/R0aQlym.png',
  },
  AGAr: {
    name: 'AGA Rewards',
    address: '0xF84BD51eab957c2e7B7D646A3427C5A50848281D',
    symbol: 'AGAr',
    decimals: 8,
    chainId: 137,
    logoURI: 'https://i.imgur.com/06BkcTT.png',
  },
  ANY: {
    name: 'Anyswap',
    address: '0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8',
    symbol: 'ANY',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/anyswap/Brand-assets/master/logo/c-128-white.svg',
  },
  ARIA20: {
    name: 'ARIANEE',
    address: '0x46F48FbdedAa6F5500993BEDE9539ef85F4BeE8e',
    symbol: 'ARIA20',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aria.fyi/images/Aria_Logo_256.png',
  },
  AZUKI: {
    name: 'DokiDokiAzuki',
    address: '0x7CdC0421469398e0F3aA8890693d86c840Ac8931',
    symbol: 'AZUKI',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/azuki.png',
  },
  BANANA: {
    name: 'ApeSwapFinance Banana',
    address: '0x5d47bAbA0d66083C52009271faF3F50DCc01023C',
    symbol: 'BANANA',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/degens/BANANA.svg',
  },
  BIFI: {
    name: 'beefy.finance',
    address: '0xFbdd194376de19a88118e84E279b977f165d01b8',
    symbol: 'BIFI',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
  },
  BTU: {
    name: 'BTU Protocol',
    address: '0xFdc26CDA2d2440d0E83CD1DeE8E8bE48405806DC',
    symbol: 'BTU',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xb683D83a532e2Cb7DFa5275eED3698436371cc9f/logo.png',
  },
  CC10: {
    name: 'Cryptocurrency Top Tokens Index',
    address: '0x9c49BA0212Bb5Db371e66b59D1565b7c06E4894e',
    symbol: 'CC10',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/indexed-cc10_32.png',
  },
  CEL: {
    name: 'Celsius',
    address: '0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6',
    symbol: 'CEL',
    decimals: 4,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/3263/small/CEL_logo.png?1609598753',
  },
  CFI: {
    name: 'CyberFi Token',
    address: '0xeCf8f2FA183b1C4d2A269BF98A54fCe86C812d3e',
    symbol: 'CFI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/Z8V1O7H.png',
  },
  COMP: {
    name: 'Compound',
    address: '0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c',
    symbol: 'COMP',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
  },
  CTSI: {
    name: 'Cartesi Token',
    address: '0x2727Ab1c2D22170ABc9b595177B2D5C6E1Ab7B7B',
    symbol: 'CTSI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/q3SnElh.png',
  },
  DAI: {
    name: 'Dai Stablecoin',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    symbol: 'DAI',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  DB: {
    name: 'Dark.Build',
    address: '0x0e59D50adD2d90f5111aca875baE0a72D95B4762',
    symbol: 'DB',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://dark-build.app/logo192.png',
  },
  DEFI5: {
    name: 'DEFI Top 5 Tokens Index',
    address: '0x42435F467D33e5C4146a4E8893976ef12BBCE762',
    symbol: 'DEFI5',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/uVGtugL.png',
  },
  DEGEN: {
    name: 'DEGEN Index',
    address: '0x8a2870fb69A90000D6439b7aDfB01d4bA383A415',
    symbol: 'DEGEN',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/DEGEN_LOGO.png',
  },
  DMT: {
    name: 'Dark Matter Token',
    address: '0xd28449BB9bB659725aCcAd52947677ccE3719fD7',
    symbol: 'DMT',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://darkmatter.finance/i/favicon/512x512.png',
  },
  DRC: {
    name: 'Digital Reserve Currency',
    address: '0xFeD16c746CB5BFeD009730f9E3e6A673006105c7',
    symbol: 'DRC',
    decimals: 0,
    chainId: 137,
    logoURI: 'https://pbs.twimg.com/profile_images/1318783238291292160/R4DxXdRA_400x400.jpg',
  },
  DSLA: {
    name: 'DSLA',
    address: '0xa0E390e9ceA0D0e8cd40048ced9fA9EA10D71639',
    symbol: 'DSLA',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://storage.googleapis.com/stacktical-public/dsla.png',
  },
  ELET: {
    name: 'Elementeum',
    address: '0x07738Eb4ce8932CA961c815Cb12C9d4ab5Bd0Da4',
    symbol: 'ELET',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherlegends.com/ELET.png',
  },
  EMON: {
    name: 'EthermonToken',
    address: '0xd6A5aB46ead26f49b03bBB1F9EB1Ad5c1767974a',
    symbol: 'EMON',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9651.png',
  },
  ETH: {
    name: 'Ether',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    symbol: 'ETH',
    decimals: 18,
    chainId: 137,
    website: 'https://ethereum.org/',
    description:
      'The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  FISH: {
    name: 'Fish',
    address: '0x3a3Df212b7AA91Aa0402B9035b098891d276572B',
    symbol: 'FISH',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/ncleoTN.png',
  },
  FRAX: {
    name: 'Frax',
    address: '0x104592a158490a9228070E0A8e5343B499e125D0',
    symbol: 'FRAX',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://avatars.githubusercontent.com/u/56005256?s=200&v=4',
  },
  FSN: {
    name: 'Fusion',
    address: '0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c',
    symbol: 'FSN',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://cryptologos.cc/logos/fusion-fsn-logo.png?v=010',
  },
  FXS: {
    name: 'Frax Share',
    address: '0x3e121107F6F22DA4911079845a470757aF4e1A1b',
    symbol: 'FXS',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://app.sushi.com/images/tokens/fxs-square.jpg',
  },
  GAME: {
    name: 'GAME Credits',
    address: '0x8d1566569d5b695d44a9a234540f68D393cDC40D',
    symbol: 'GAME',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/IIUglm9.png?1',
  },
  GFARM2: {
    name: 'Gains V2',
    address: '0x7075cAB6bCCA06613e2d071bd918D1a0241379E2',
    symbol: 'GFARM2',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://gains.farm/images/logo256.png',
  },
  GHST: {
    name: 'Aavegotchi GHST Token',
    address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7',
    symbol: 'GHST',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/ghsttoken.svg',
  },
  HEX: {
    name: 'HEXX',
    address: '0x23D29D30e35C5e8D321e1dc9A8a61BFD846D4C5C',
    symbol: 'HEX',
    decimals: 8,
    chainId: 137,
    logoURI: 'https://hex.com/favicon.png',
  },
  HH: {
    name: 'Holyheld',
    address: '0x521CddC0CBa84F14c69C1E99249F781AA73Ee0BC',
    symbol: 'HH',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/13719/small/hh.png?1611137626',
  },
  iFARM: {
    name: 'iFARM',
    address: '0xab0b2ddB9C7e440fAc8E140A89c0dbCBf2d7Bbff',
    symbol: 'iFARM',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/harvestfi/assets/main/farm-logo.png',
  },
  IGG: {
    name: 'IG Gold',
    address: '0xe6FC6C7CB6d2c31b359A49A33eF08aB87F4dE7CE',
    symbol: 'IGG',
    decimals: 6,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/7697/small/N7aEdYrY_400x400.png?1561587437',
  },
  KRILL: {
    name: 'Krill',
    address: '0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b',
    symbol: 'KRILL',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/REyP9yh.jpg',
  },
  LEND: {
    name: 'EthLend Token',
    address: '0x313d009888329C9d1cf4f75CA3f32566335bd604',
    symbol: 'LEND',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03/logo.png',
  },
  LINK: {
    name: 'ChainLink Token',
    address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    symbol: 'LINK',
    decimals: 18,
    website: 'https://chain.link/',
    description:
      'Link is the currency used to pay the Chainlink node operators for their work. Chainlink node operators have to stake LINK in the network in order to participate and provide data services.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
  },
  maAAVE: {
    name: 'Matic Aave interest bearing AAVE',
    address: '0x823CD4264C1b951C9209aD0DeAea9988fE8429bF',
    symbol: 'maAAVE',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maAAVE.svg',
  },
  maDAI: {
    name: 'Matic Aave interest bearing DAI',
    address: '0xE0b22E0037B130A9F56bBb537684E6fA18192341',
    symbol: 'maDAI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maDAI.svg',
  },
  maLINK: {
    name: 'Matic Aave interest bearing LINK',
    address: '0x98ea609569bD25119707451eF982b90E3eb719cD',
    symbol: 'maLINK',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maLINK.svg',
  },
  MANA: {
    name: 'Decentraland MANA',
    address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
    symbol: 'MANA',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png',
  },
  maTUSD: {
    name: 'Matic Aave interest bearing TUSD',
    address: '0xF4b8888427b00d7caf21654408B7CBA2eCf4EbD9',
    symbol: 'maTUSD',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maTUSD.svg',
  },
  maUNI: {
    name: 'Matic Aave interest bearing UNI',
    address: '0x8c8bdBe9CeE455732525086264a4Bf9Cf821C498',
    symbol: 'maUNI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maUNI.svg',
  },
  maUSDC: {
    name: 'Matic Aave interest bearing USDC',
    address: '0x9719d867A500Ef117cC201206B8ab51e794d3F82',
    symbol: 'maUSDC',
    decimals: 6,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maUSDC.svg',
  },
  maUSDT: {
    name: 'Matic Aave interest bearing USDT',
    address: '0xDAE5F1590db13E3B40423B5b5c5fbf175515910b',
    symbol: 'maUSDT',
    decimals: 6,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maUSDT.svg',
  },
  maWETH: {
    name: 'Matic Aave interest bearing WETH',
    address: '0x20D3922b4a1A8560E1aC99FBA4faDe0c849e2142',
    symbol: 'maWETH',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maWETH.svg',
  },
  maYFI: {
    name: 'Matic Aave interest bearing YFI',
    address: '0xe20f7d1f0eC39C4d5DB01f53554F2EF54c71f613',
    symbol: 'maYFI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://aavegotchi.com/images/matokens/maYFI.svg',
  },
  mDEF: {
    name: 'Matic Deflect Protocol',
    address: '0x82B6205002ecd05e97642D38D61e2cFeaC0E18cE',
    symbol: 'mDEF',
    decimals: 9,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/deflect_32.png?=v1',
  },
  miMATIC: MAI,
  MAI: MAI,
  mOCEAN: {
    name: 'Ocean Token',
    address: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
    symbol: 'mOCEAN',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://oceanprotocol.com/static/4ad704a150d436a1f32d495413fc47cd/favicon-white.png',
  },
  MONA: {
    name: 'Monavale',
    address: '0x6968105460f67c3BF751bE7C15f92F5286Fd0CE5',
    symbol: 'MONA',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/FR12tmm.jpg',
  },
  mRBAL: {
    name: 'Matic Rebalance Token',
    address: '0x66768ad00746aC4d68ded9f64886d55d5243f5Ec',
    symbol: 'mRBAL',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://rebalancetoken.io/images/logo/logo.png',
  },
  MUST: {
    name: 'Must',
    address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',
    symbol: 'MUST',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/cometh_32.png',
  },
  NFTP: {
    name: 'NFT Platform Index',
    address: '0xf7d9e281c5Cb4C6796284C5b663b3593D2037aF2',
    symbol: 'NFTP',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/NFTP.png',
  },
  OM: {
    name: 'OM',
    address: '0xC3Ec80343D2bae2F8E680FDADDe7C17E71E114ea',
    symbol: 'OM',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/mantradao_32.png',
  },
  OPU: {
    name: 'Opu Coin',
    address: '0x7ff2FC33E161E3b1C6511B934F0209D304267857',
    symbol: 'OPU',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://www.opucoin.io/wp-content/uploads/2021/04/opu-coiin-icon-border.svg',
  },
  PLOT: {
    name: 'PLOT',
    address: '0xe82808eaA78339b06a691fd92E1Be79671cAd8D3',
    symbol: 'PLOT',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/nQDG9AQ.png',
  },
  PolyDoge: {
    name: 'PolyDoge',
    address: '0x8A953CfE442c5E8855cc6c61b1293FA648BAE472',
    symbol: 'PolyDoge',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://polydoge.com/doge-webpage_files/doge.png',
  },
  polyBUNNY: {
    name: 'Bunny',
    address: '0x4C16f69302CcB511c5Fac682c7626B9eF0Dc126a',
    symbol: 'polyBUNNY',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/PancakeBunny-finance/PolygonBUNNY/main/assets/token-bunny_32x32.png',
  },
  PPDEX: {
    name: 'Pepedex',
    address: '0x127984b5E6d5c59f81DACc9F1C8b3Bdc8494572e',
    symbol: 'PPDEX',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/pepedex_32.png?v=2',
  },
  PUSD: {
    name: 'PUSD',
    address: '0x9aF3b7DC29D3C4B1A5731408B6A9656fA7aC3b72',
    symbol: 'PUSD',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://app.polyquity.org/static/media/icon-lqty.06b7d013.svg',
  },
  PYQ: {
    name: 'PYQ',
    address: '0x5a3064CbDCCF428ae907796cF6aD5a664CD7F3d8',
    symbol: 'PYQ',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://app.polyquity.org/static/media/icon-lqty1.3df5c310.svg',
  },
  QI: {
    name: 'Qi Dao',
    address: '0x580A84C73811E1839F75d86d75d88cCa0c241fF4',
    symbol: 'QI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/qi.png',
  },
  QUICK: {
    name: 'Quickswap',
    address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
    symbol: 'QUICK',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon.jpeg',
  },
  RBAL: {
    name: 'Rebalance Token',
    address: '0x03247a4368A280bEc8133300cD930A3a61d604f6',
    symbol: 'RBAL',
    decimals: 18,
    chainId: 137,
    logoURI: 'http://rebalancetoken.io/images/logo/RBAL_ERC20_small_001_256.png',
  },
  SDO: {
    name: 'SafeDollar.Fi',
    address: '0x86BC05a6f65efdaDa08528Ec66603Aef175D967f',
    symbol: 'SDO',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://storage.googleapis.com/polydex/tokens/0x86BC05a6f65efdaDa08528Ec66603Aef175D967f.png',
  },
  SDS: {
    name: 'SafeDollar Share',
    address: '0x352db329B707773DD3174859F1047Fb4Fd2030BC',
    symbol: 'SDS',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://storage.googleapis.com/polydex/tokens/0x352db329B707773DD3174859F1047Fb4Fd2030BC.png',
  },
  SENT: {
    name: 'Sentinel',
    address: '0x48e3883233461C2eF4cB3FcF419D6db07fb86CeA',
    symbol: 'SENT',
    decimals: 8,
    chainId: 137,
    logoURI: 'https://cdn-images-1.medium.com/max/1200/1*mK1oPGsQWh4Nfupg-e0S-g.png',
  },
  SUPER: {
    name: 'SuperFarm',
    address: '0xa1428174F516F527fafdD146b883bB4428682737',
    symbol: 'SUPER',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/14040/small/6YPdWn6.png?1613975899',
  },
  SWAP: {
    name: 'TrustSwap Token',
    address: '0x3809dcDd5dDe24B37AbE64A5a339784c3323c44F',
    symbol: 'SWAP',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.imgur.com/vZnU36G.png',
  },
  SWG: {
    name: 'Swirge',
    address: '0x043A3Aa319B563aC25D4E342d32bFfb51298DB7b',
    symbol: 'SWG',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/swirge_32.png',
  },
  SX: {
    name: 'SportX',
    address: '0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79',
    symbol: 'SX',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/sx.jpg',
  },
  TEL: {
    name: 'Telcoin',
    address: '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32',
    symbol: 'TEL',
    decimals: 2,
    chainId: 137,
    logoURI: 'https://pbs.twimg.com/profile_images/933388441475194881/57fOk40N_400x400.jpg',
  },
  UBT: {
    name: 'Unibright',
    address: '0x7FBc10850caE055B27039aF31bD258430e714c62',
    symbol: 'UBT',
    decimals: 8,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/2707/small/UnibrightLogo_colorful_500x500_preview.png?1547036916',
  },
  UNI: {
    name: 'Uniswap',
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
    symbol: 'UNI',
    decimals: 18,
    website: 'https://uniswap.org/',
    description:
      'UNI is the governance token for Uniswap. UNI was introduced on 16th September 2020 through a retrospective airdrop to users who have interacted with the protocol either by swapping tokens or by providing liquidity.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon1.png',
  },
  USDC: {
    name: 'USD Coin',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC',
    decimals: 6,
    website: 'https://www.circle.com/usdc',
    description:
      'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  USDT: {
    name: 'Tether USD',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    symbol: 'USDT',
    decimals: 6,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  VISION: {
    name: 'Vision Token',
    address: '0x034b2090b579228482520c589dbD397c53Fc51cC',
    symbol: 'VISION',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s3-us-west-2.amazonaws.com/acf-uploads/apyvisionlogo200circle.png',
  },
  WBTC: {
    name: 'Wrapped BTC',
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    symbol: 'WBTC',
    decimals: 8,
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  WEXpoly: {
    name: 'WEXPoly',
    address: '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB',
    symbol: 'WEXPoly',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/16282/small/ws_purple_circle_200x200_%281%29.png',
  },
  WISE: {
    name: 'Wise Token',
    address: '0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a',
    symbol: 'WISE',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/wisetoken_32.png',
  },
  WMATIC: MATIC,
  WNATIVE: MATIC,
  WOLF: {
    name: 'moonwolf.io',
    address: '0x8f18dC399594b451EdA8c5da02d0563c0b2d0f16',
    symbol: 'WOLF',
    decimals: 9,
    chainId: 137,
    logoURI: 'https://i.imgur.com/UIjlQpC.png',
  },
  WRX: {
    name: 'WazirX',
    address: '0x72d6066F486bd0052eefB9114B66ae40e0A6031a',
    symbol: 'WRX',
    decimals: 8,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/binance-wrx_32.png',
  },
  xMARK: {
    name: 'Standard',
    address: '0xf153EfF70DC0bf3b085134928daeEA248d9B30d0',
    symbol: 'xMARK',
    decimals: 9,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/8cb78aca77b340510958ed98a3cd260d2d7f0420/blockchains/ethereum/assets/0x36b679bd64Ed73DBfd88909cDCB892cB66Bd4CBb/logo.png',
  },
  YFI: {
    name: 'yearn.finance',
    address: '0xDA537104D6A5edd53c6fBba9A898708E465260b6',
    symbol: 'YFI',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
  },
  ZUT: {
    name: 'ZeroUtility',
    address: '0xe86E8beb7340659DDDCE61727E500e3A5aD75a90',
    symbol: 'ZUT',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s2.gifyu.com/images/zutlogo.jpg',
  },
  ZUZ: {
    name: 'Zeus',
    address: '0x232eaB56c4fB3f84c6Fb0a50c087c74b7B43c6Ad',
    symbol: 'ZUZ',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://etherscan.io/token/images/zuzprotocol_32.png',
  },
  ROUTE: {
    name: 'Route',
    address: '0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4',
    symbol: 'ROUTE',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/13709/small/route_token_200x200-19.png',
  },
  DFYN: {
    name: 'Dfyn',
    address: '0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97',
    symbol: 'DFYN',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/dfyn/assets/main/DFYN_logo.png',
  },
  TITAN: {
    name: 'Titan',
    address: '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A',
    symbol: 'TITAN',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A/logo.png',
  },
  IRON: {
    name: 'Iron',
    address: '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a',
    symbol: 'IRON',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://polygon.iron.finance/static/media/IRON.484ee2b8.png',
  },
  SUSHI: {
    name: 'Sushi',
    address: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
    symbol: 'SUSHI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://app.sushi.com/static/media/logo.11fafaa5.png',
  },
  GRT: {
    name: 'The Graph',
    address: '0x5fe2B58c013d7601147DcdD68C143A77499f5531',
    symbol: 'GRT',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x5fe2B58c013d7601147DcdD68C143A77499f5531/logo.png',
  },
  WOOFY: {
    name: 'Woofy',
    address: '0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
    symbol: 'WOOFY',
    decimals: 12,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xD0660cD418a64a1d44E9214ad8e459324D8157f1/logo.png',
  },
  renDOGE: {
    name: 'renDOGE',
    address: '0x7C4A54f5d20b4023D6746F1f765f4DFe7C39a7e6',
    symbol: 'renDOGE',
    decimals: 8,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x7C4A54f5d20b4023D6746F1f765f4DFe7C39a7e6/logo.png',
  },
  SNX: {
    name: 'SNX',
    address: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
    symbol: 'SNX',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://app.sushi.com/images/tokens/snx-square.jpg',
  },
  CRV: {
    name: 'Curve Protocol',
    symbol: 'CRV',
    address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://external-content.duckduckgo.com/ip3/resources.curve.fi.ico',
  },
  DOKI: {
    name: 'DokiDoki Finance',
    symbol: 'DOKI',
    address: '0x5C7F7Fe4766fE8f0fa9b41E2E4194d939488ff1C',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544/logo.png',
  },
  PZAP: {
    name: 'PolyZap',
    symbol: 'PZAP',
    address: '0xeb2778f74E5ee038E67AA6c77f0F0451ABd748FD',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://polyzap.finance/logo.png',
  },
  GBULL: {
    name: 'GoldenBull Finance',
    symbol: 'GBULL',
    address: '0x3E9B01762a82C12151CDE2094F8EF9BCAb774C8E',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://farms.goldenbull.finance/images/gbull/gbull-logo.png',
  },
  ADDY: {
    name: 'Adamant Finance',
    symbol: 'ADDY',
    address: '0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://adamant.finance/img/ADDY.png',
  },
  POLYGOLD: {
    name: 'POLYGOLD',
    symbol: 'POLYGOLD',
    address: '0x0184316f58B9A44aCDD3e683257259dC0CF2202a',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://polygold.finance/images/egg/9.png',
  },
  PAUTO: {
    name: 'Autofarm.network',
    symbol: 'PAUTO',
    address: '0x7f426F6Dc648e50464a0392E60E1BB465a67E9cf',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://autofarm.network/logo-round.svg',
  },
  IQ: {
    name: 'Everipedia IQ',
    symbol: 'IQ',
    address: '0xB9638272aD6998708de56BBC0A290a1dE534a578',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://i.imgur.com/2Tocoq5.png',
  },
  FFF: {
    name: 'Future of Finance Fund',
    symbol: 'FFF',
    address: '0x9aCeB6f749396d1930aBc9e263eFc449E5e82c13',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15761/small/xg1NFl0.png?1621825451',
  },
  UFT: {
    name: 'UniLend Finance Token',
    symbol: 'UFT',
    address: '0x5B4CF2C120A9702225814E18543ee658c5f8631e',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/12819/small/UniLend_Finance_logo_PNG.png?1602748658',
  },
  CHUM: {
    name: 'ChumHum',
    symbol: 'CHUM',
    address: '0x2e2DDe47952b9c7deFDE7424d00dD2341AD927Ca',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://i.imgur.com/66lM7Rx.png',
  },
  ELE: {
    name: 'Eleven.finance',
    symbol: 'ELE',
    address: '0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/14541/small/eleven_finance_logo.png?1616895791',
  },
  WFIL: {
    name: 'Wrapped Filecoin',
    symbol: 'WFIL',
    address: '0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F/logo.png',
  },
  BOOTY: {
    name: 'PirateBooty',
    symbol: 'BOOTY',
    address: '0xD12DC5319808Bb31ba95AE5764def2627d5966CE',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://docs.piratedice.xyz/logo.png',
  },
  dTOP: {
    name: 'dHEDGE Top Index',
    symbol: 'dTOP',
    address: '0x0361BdEAB89DF6BBcc52c43589FABba5143d19dD',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://app.dhedge.org/favicon.ico',
  },
  ibBTC: {
    name: 'Interest bearing BTC',
    symbol: 'ibBTC',
    address: '0x4EaC4c4e9050464067D673102F8E24b2FccEB350',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  BNB: {
    name: 'AnySwap Bridge Polygon Binance Coin',
    symbol: 'BNB',
    address: '0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
    chainId: 137,
    decimals: 18,
    website: 'https://www.binance.com/',
    description:
      'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
  },
  PBNB: {
    name: 'Orbit Bridge Polygon Binance Coin',
    symbol: 'PBNB',
    address: '0x7e9928aFe96FefB820b85B4CE6597B8F660Fe4F4',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
  },
  YELD: {
    name: 'Polyyeld.Finance',
    symbol: 'YELD',
    address: '0xd0f3121A190d85dE0AB6131f2bCEcdbfcfB38891',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://polyyeld.finance/images/egg/9.png',
  },
  PUP: {
    name: 'Polypup.Finance',
    symbol: 'PUP',
    address: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://polypup.finance/images/egg/9.png',
  },
  rUSD: {
    name: 'Ramp USD',
    symbol: 'rUSD',
    address: '0xfC40a4F89b410a1b855b5e205064a38fC29F5eb5',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://appv2.rampdefi.com/assets/icon/rusdc.svg',
  },
  RAMP: {
    name: 'Ramp DeFi',
    symbol: 'RAMP',
    address: '0xaECeBfcF604AD245Eaf0D5BD68459C3a7A6399c2',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://appv2.rampdefi.com/assets/icon/ramp.png',
  },
  UST: {
    name: 'USD Terra',
    symbol: 'UST',
    address: '0x692597b009d13C4049a947CAB2239b7d6517875F',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
  },
  WMATIC_DFYN: {
    name: 'Wrapped Matic, DFYN version',
    symbol: 'WMATIC',
    address: '0x4c28f48448720e9000907BC2611F73022fdcE1fA',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
  },
  BONE: {
    name: 'Polypup Bone',
    symbol: 'BONE',
    address: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://bone.polypup.finance/images/egg/9.png',
  },
  BONEswap: {
    name: 'BoneSwap',
    symbol: 'BONE',
    address: '0x80244C2441779361F35803b8C711C6c8fC6054a3',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://farm.boneswap.finance/images/bone/logo.png',
  },
  EZ: {
    name: 'EasyFi',
    symbol: 'EZ',
    address: '0x34C1b299A74588D6Abdc1b85A53345A48428a521',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://etherscan.io/token/images/easyfi_32.png',
  },
  HEO: {
    name: 'Helios.cash',
    symbol: 'HEO',
    address: '0x03aA5Daf9Fd5f7F33C67AfbCd53c1C1e87c4c9F7',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://www.helios.cash/static/media/logo1024.08eac992.svg',
  },
  BRAIN: {
    name: 'BrainSwap',
    symbol: 'BRAIN',
    address: '0x5C6014246FC7911F4dB270aA3910F23EECD61720',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://brainswap.finance/images/egg/9.png',
  },
  pWINGS: {
    name: 'JetSwap Polygon Token',
    symbol: 'pWINGS',
    address: '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://polygon-info.jetswap.finance/static/media/wings.dca9f9fe.png',
  },
  HONOR: {
    name: 'FarmHero HONOR',
    symbol: 'HONOR',
    address: '0xb82A20B4522680951F11c94c54B8800c1C237693',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10620.png',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
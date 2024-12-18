export enum ChainId {
  ETHEREUM = '1',
  MATIC = '137',
  BSC = '56',
  FANTOM = '250',
  CELO = '42220',
  AVAX = '43114',
  XDAI = '100',
  ARBITRUM = '42161',
  HARMONY = '1666600000',
  OPTIMISM = '10',
  MUMBAI = '80001',
  AURORA = '1313161554',
  SOLANA = '-8768',
  EVMOS = '9001',
  EVMOS_COSMOS = 'evmos_9001-2',
  OSMOSIS = 'osmosis-1',
  COSMOSHUB = '-1061702',
  RONIN = '2020',
  BEACON = 'eth2',
  BASE = '8453',
  AVAX_PCHAIN = '-9797',
  ZKSYNC = '324',
  SCROLL = '534352',
}

interface PancakeNetwork {
  network: string;
  baseUrl: string;
  subgraphName: string;
  version?: string;
}

export const pancakeNetworks: PancakeNetwork[] = [
  {
    network: 'BSC',
    baseUrl: 'https://thegraph.com/hosted-service/subgraph',
    subgraphName: 'pancakeswap/exchange-v3-bsc',
    version: null,
  },
  {
    network: 'BSC Testnet',
    baseUrl: 'https://thegraph.com/hosted-service/subgraph',
    subgraphName: 'pancakeswap/exchange-v3-chapel',
    version: null,
  },
  {
    network: 'ETH',
    baseUrl: 'https://thegraph.com/hosted-service/subgraph',
    subgraphName: 'pancakeswap/exchange-v3-eth',
    version: null,
  },
  {
    network: 'Goerli',
    baseUrl: 'https://thegraph.com/hosted-service/subgraph',
    subgraphName: 'pancakeswap/exchange-v3-goerli',
    version: null,
  },
  {
    network: 'Polygon zkEVM',
    baseUrl: 'https://api.studio.thegraph.com/query/45376',
    subgraphName: 'exchange-v3-polygon-zkevm',
    version: 'version/latest',
  },
  {
    network: 'Polygon zkEVM Testnet',
    baseUrl: 'https://api.studio.thegraph.com/query/45376',
    subgraphName: 'exchange-v3-polygon-zkevm-test',
    version: 'version/latest',
  },
  {
    network: 'zkSync',
    baseUrl: 'https://api.studio.thegraph.com/query/45376',
    subgraphName: 'exchange-v3-zksync',
    version: 'version/latest',
  },
  {
    network: 'zkSync Testnet',
    baseUrl: 'https://api.studio.thegraph.com/query/45376',
    subgraphName: 'exchange-v3-zksync-testnet',
    version: 'version/latest',
  },
  {
    network: 'Linea',
    baseUrl: 'https://graph-query.linea.build/subgraphs/name',
    subgraphName: 'pancakeswap/exchange-v3-linea',
    version: null,
  },
  {
    network: 'Base',
    baseUrl: 'https://api.studio.thegraph.com/query/45376',
    subgraphName: 'exchange-v3-base',
    version: 'version/latest',
  },
  {
    network: 'opBNB',
    baseUrl: 'https://opbnb-mainnet-graph.nodereal.io/subgraphs/name',
    subgraphName: 'pancakeswap/exchange-v3',
    version: null,
  },
];

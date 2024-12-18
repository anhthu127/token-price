import axios from 'axios';
import type { ChainId } from 'src/constants/chain.constant';
import { pancakeNetworks } from 'src/constants/chain.constant';
import { ERROR } from 'src/constants/exception.constant';
import { BaseException } from 'src/shared/filters/exception.filter';

import type {
  IPoolManager,
  PoolBalanceDto,
  PoolBalanceInputDto,
  PoolDto,
} from '../pool.interface';

export class PancakeV3Pool implements IPoolManager {
  private protocolName = 'pancake-swap-v3';

  private subgraphUrls: Map<string, string> = new Map();

  constructor() {
    // private evmService: EvmService // private configService: ApiConfigService,
    this.subgraphUrls.set(
      pancakeNetworks[0].network,
      `${pancakeNetworks[0].baseUrl}/${pancakeNetworks[0].subgraphName}`,
    );
  }

  async getPools(chainId: ChainId): Promise<PoolDto[]> {
    const chainKey = Object.entries(chainId).find(
      ([value]) => value === chainId,
    )?.[0];

    const networkInfo = pancakeNetworks.find(
      (item) => item.network === chainKey,
    );
    const url = `${networkInfo.baseUrl}/${networkInfo.subgraphName}/${networkInfo.version}`;

    // this.subgraphUrls.get(network.network, url);
    if (!networkInfo.baseUrl) {
      throw new BaseException(ERROR.CHAIN_ID_NOT_SUPPORTED);
    }

    const query = `{
        pools{
          id
          token0{
            id
            symbol
            decimals
          }
          token1{
            id
            symbol
            decimals
          }
        }
      }`;

    const data = await axios.post(url, { query });
    const pools: PoolDto[] = data.data.data.pools.map((pool) => ({
      address: pool.id,
      protocol: this.protocolName,
      baseAddress: pool.token0.id,
      baseSymbol: pool.token0.symbol,
      baseDecimal: pool.token0.decimals,
      quoteAddress: pool.token1.id,
      quoteSymbol: pool.token1.symbol,
      quoteDecimal: pool.token1.decimals,
      chainId,
    }));

    return pools;
  }

  getUnderlyingAmountAtBlock(
    poolBalanceInputDto: PoolBalanceInputDto,
  ): Promise<PoolBalanceDto> {
    throw new Error('Method not implemented.');
  }
}

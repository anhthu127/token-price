import { Injectable } from '@nestjs/common';
import type { ChainId } from 'src/constants/chain.constant';
import { UniswapV3Pool } from 'src/modules/pool/implementations/uniswap-v3-pool';
import type { IPoolManager } from 'src/modules/pool/pool.interface';
import { ApiConfigService } from 'src/shared/services/api-config.service';
import { EvmService } from 'src/shared/services/evm.service';

import { PancakeV3Pool } from './implementations/pancake-v3-pool';

@Injectable()
export class PoolService {
  private poolProviders: IPoolManager[] = [];

  constructor(
    private configService: ApiConfigService,
    private evmService: EvmService,
  ) {
    this.poolProviders = [
      new UniswapV3Pool(this.configService, this.evmService),
      new PancakeV3Pool(),
    ];
  }

  async getTokenPriceByBlock(
    _chainId: ChainId,
    _tokenAddress: string,
    _block: number,
  ) {
    // get pool db
    // find path to get token price pairs (same chain)
    // if not, sync pool (all implementations)
    // find path to get token price pairs (same chain)
    // if not, return err
    // each pair: call db to get amount at block
    // if not have amount in db, call to sc then store to db
    // return token price pairs
  }
}

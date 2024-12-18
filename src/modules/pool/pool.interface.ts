import type { BigNumber } from 'ethers';
import type { ChainId } from 'src/constants/chain.constant';

export class PoolDto {
  address: string;

  protocol: string;

  baseSymbol: string;

  baseAddress: string;

  baseDecimal: number;

  quoteAddress: string;

  quoteSymbol: string;

  quoteDecimal: number;
}

export class PoolBalanceInputDto {
  address: string;

  baseAddress: string;

  quoteAddress: string;

  chainId: ChainId;

  block: number;
}

export class PoolBalanceDto {
  poolAddress: string;

  block: number;

  baseAmount: BigNumber;

  quoteAmount: BigNumber;
}

export interface IPoolManager {
  /**
   *
   * get all of pools in a network by index network (chain id)
   *
   */
  getPools(chainId: ChainId): Promise<PoolDto[]>;
  /**
   *
   * @param poolBalanceInputDto
   * get pool information
   * EX: ETH/BTC
   * poolAddress
   * block:
   * baseAmount: ETH
   * quoteAmount: BTC
   *
   */
  getUnderlyingAmountAtBlock(
    poolBalanceInputDto: PoolBalanceInputDto,
  ): Promise<PoolBalanceDto>;
}

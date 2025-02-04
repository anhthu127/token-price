import { ChainId } from 'src/constants/chain.constant';
import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'pool',
})
export class PoolEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column()
  protocol: string;

  @Column()
  address: string;

  @Column()
  baseTokenId: string;

  @Column()
  quoteTokenId: string;

  @Column({
    type: 'enum',
    enum: ChainId,
  })
  chainId: ChainId;
}

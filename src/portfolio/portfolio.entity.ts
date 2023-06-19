import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PortfolioInfoDto } from './dto/portfolio.dto';

@Entity('portfolio')
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  // @Column({ type: 'int', name: 'portfolio_id' })
  portfolio_id: number; // 标记为主列，值自动生成

  @Column({ length: 50, name: 'data_dt' })
  dataDt: string;

  @Column({ type: 'int', default: 0, name: 'trade_adj_factor' })
  tradeAdjFactor: number;

  @Column({ type: 'int', default: 0, name: 'trade_target_weight' })
  tradeTargetWeight: number;

  @Column({ length: 50, name: 'trade_dt' })
  tradeDt: string;

  @Column({ length: 50, name: 'trade_status' })
  tradeStatus: string;

  @Column({ type: 'tinyint', default: 0, name: 'trade_target_value' })
  tradeTargetValue: string;

  @Column({ length: 50, name: 'cur_mkt_weight' })
  curMktWeight: string;

  @Column({ length: 50, name: 'is_valid' })
  isValid: string;

  @Column({ length: 50, name: 'update_time' })
  updateTime: string;

  @Column({ length: 50, name: 'trade_type' })
  tradeType: string;

  @Column({ length: 50, name: 'cur_mkt_value' })
  curMktValue: string;

  @Column({ length: 50, name: 'create_time' })
  createTime: string;

  @Column({ type: 'int', default: 0, name: 'trade_amount' })
  tradeAmount: number;

  @Column({ type: 'int', default: 0, name: 'cur_price' })
  curPrice: number;

  @Column({ type: 'int', default: 0, name: 'object_id' })
  objectId: number;

  @Column({ type: 'int', default: 0, name: 'trade_transcost' })
  tradeTranscost: number;

  @Column({ type: 'int', default: 0, name: 'cur_adj_factor' })
  curAdjFactor: number;

  @Column({ type: 'int', default: 0, name: 'cur_adj_shares' })
  curAdjShares: number;

  @Column({ length: 50, name: 'trade_adj_shares' })
  tradeAdjShares: string;

  @Column({ length: 50, name: 'strategy_id' })
  strategyId: string;

  @Column({ type: 'int', default: 0, name: 'trade_priority' })
  tradePriority: number;

  @Column({ type: 'int', default: 0, name: 'model_target_weight' })
  modelTargetWeight: number;

  @Column({ length: 50 })
  kdcode: string;

  @Column({ type: 'int', default: 0, name: 'trade_price' })
  tradePrice: number;

  @Column({ length: 50, name: 'block_id2' })
  blockId2: string;

  @Column({ type: 'int', default: 0, name: 'stock_code' })
  stockCode: number;

  @Column({ length: 50, name: 'stock_name' })
  stockName: string;

  @Column({ length: 50, name: 'block_name2' })
  blockName2: string;

  toResponseObject(): PortfolioInfoDto {
    const responseObj: PortfolioInfoDto = {
      ...this,
      isValid: this.isValid ? true : false
    };
    return responseObj;
  }

}
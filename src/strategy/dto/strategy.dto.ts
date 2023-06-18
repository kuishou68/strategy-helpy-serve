import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStrategyDto {
  @ApiProperty({ description: '策略Id' })
  @IsNotEmpty({ message: '策略Id必填' })
  readonly strategy_id: number;

  @ApiPropertyOptional({ description: '时间' })
  readonly data_dt: string;

  @ApiPropertyOptional({ description: '' })
  readonly trade_adj_factor: number;

  @ApiPropertyOptional({ description: '' })
  readonly trade_target_weight: number;

  @ApiPropertyOptional({ description: '交易时间' })
  readonly trade_dt: string;

  @ApiPropertyOptional({ description: '交易状态' })
  readonly trade_status: string;

  @ApiPropertyOptional({ description: '' })
  readonly trade_target_value: number;

  @ApiPropertyOptional({ description: '' })
  readonly cur_mkt_weight: string;

  @ApiPropertyOptional({ description: '' })
  readonly is_valid: string;

  @ApiPropertyOptional({ description: '' })
  readonly update_time: string;

  @ApiPropertyOptional({ description: '交易类型' })
  readonly trade_type: string;

  @ApiPropertyOptional({ description: '' })
  readonly cur_mkt_value: string;

  @ApiPropertyOptional({ description: '交易价' })
  readonly trade_amount: number;

  @ApiPropertyOptional({ description: '' })
  readonly cur_price: number;

  @ApiPropertyOptional({ description: '' })
  readonly object_id: number;

  @ApiPropertyOptional({ description: '' })
  readonly trade_transcost: number;

  @ApiPropertyOptional({ description: '' })
  readonly cur_adj_factor: number;

  @ApiPropertyOptional({ description: '' })
  readonly trade_adj_shares: string;

  @ApiPropertyOptional({ description: '' })
  readonly portfolio_id: string;

  @ApiPropertyOptional({ description: '' })
  readonly trade_priority: number;

  @ApiPropertyOptional({ description: '' })
  readonly model_target_weight: number;

  @ApiPropertyOptional({ description: '' })
  readonly kdcode: string;

  @ApiPropertyOptional({ description: '' })
  readonly trade_price: number;

  @ApiPropertyOptional({ description: '' })
  readonly block_id2: string;

  @ApiPropertyOptional({ description: '' })
  readonly stock_code: number;

  @ApiPropertyOptional({ description: '' })
  readonly stock_name: string;

  @ApiPropertyOptional({ description: '' })
  readonly block_name2: string;
}

export class StrategyInfoDto {
  public strategy_id: number;

  public data_dt: string;

  public trade_adj_factor: number;

  public trade_target_weight: number;

  public trade_dt: string;

  public trade_status: string;

  public trade_target_value: number;

  public cur_mkt_weight: string;

  public is_valid: string;

  public update_time: string;

  public trade_type: string;

  public cur_mkt_value: string;

  public trade_amount: number;

  public cur_price: number;

  public object_id: number;

  public trade_transcost: number;

  public cur_adj_factor: number;

  public trade_adj_shares: string;

  public portfolio_id: string;

  public trade_priority: number;

  public model_target_weight: number;

  public kdcode: string;

  public trade_price: number;

  public block_id2: string;

  public stock_code: number;

  public stock_name: string;

  public block_name2: string;
}

export interface StrategyRo {
  list: StrategyInfoDto[];
  count: number;
}

import {
  CreateStrategyDto,
  StrategyInfoDto,
  StrategyRo,
} from './dto/strategy.dto';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { StrategyEntity } from './strategy.entity';

@Injectable()
export class StrategyService {
  constructor(
    @InjectRepository(StrategyEntity)
    private readonly strategyRepository: Repository<StrategyEntity>,
  ) {}

  async findAll(query): Promise<StrategyRo> {
    const strategyDb = await this.strategyRepository
      .createQueryBuilder('strategy')
      // .leftJoinAndSelect('strategy.stock_code', 'stock_code')
      // .leftJoinAndSelect('strategy.stock_name', 'stock_name')
      .orderBy('strategy.update_time', 'DESC');
    strategyDb.where('1 = 1');

    const count = await strategyDb.getCount();
    const { pageNum = 1, pageSize = 10, ...params } = query;
    strategyDb.limit(pageSize);
    strategyDb.offset(pageSize * (pageNum - 1));

    const strategy = strategyDb.getMany();
    const result: StrategyInfoDto[] = (await strategy).map((item) =>
      item.toResponseObject(),
    );
    // const result: StrategyInfoDto[] = strategy;
    return { list: result, count: count };
  }

  async findById(id): Promise<any> {
    const strategyDb = this.strategyRepository
      .createQueryBuilder('strategy')
      .leftJoinAndSelect('strategy.stockCode', 'stock_code')
      // .leftJoinAndSelect('strategy.stock_name', 'stock_name')
      .where('strategy.strategy_id=:id')
      .setParameter('strategy_id', id);

    const result = await strategyDb.getOne();
    if (!result)
      throw new HttpException(`id为${id}的策略不存在`, HttpStatus.BAD_REQUEST);
    // await this.strategyRepository.update(id,  { count: result.count + 1 });
    await this.strategyRepository.findOne(id);
    return result.toResponseObject();
  }
}

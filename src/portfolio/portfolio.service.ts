import {
  CreatePortfolioDto,
  PortfolioInfoDto,
  PortfolioRo,
} from './dto/portfolio.dto';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { PortfolioEntity } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PortfolioEntity)
    private readonly portfolioRepository: Repository<PortfolioEntity>,
  ) {}

  async findAll(query): Promise<PortfolioRo> {
    const portfolioDb = await this.portfolioRepository
      .createQueryBuilder('portfolio')
      // .leftJoinAndSelect('portfolio.stock_code', 'stock_code')
      // .leftJoinAndSelect('portfolio.stock_name', 'stock_name')
      .orderBy('portfolio.update_time', 'DESC');
    portfolioDb.where('1 = 1');

    const count = await portfolioDb.getCount();
    const { pageNum = 1, pageSize = 10, ...params } = query;
    portfolioDb.limit(pageSize);
    portfolioDb.offset(pageSize * (pageNum - 1));

    const portfolio = portfolioDb.getMany();
    const result: PortfolioInfoDto[] = (await portfolio).map((item) =>
      item.toResponseObject(),
    );
    // const result: PortfolioInfoDto[] = portfolio;
    return { list: result, count: count };
  }

  async findById(id): Promise<any> {
    const portfolioDb = this.portfolioRepository
      .createQueryBuilder('portfolio')
      .leftJoinAndSelect('portfolio.stockCode', 'stock_code')
      // .leftJoinAndSelect('portfolio.stock_name', 'stock_name')
      .where('portfolio.portfolio_id=:id')
      .setParameter('portfolio_id', id);

    const result = await portfolioDb.getOne();
    if (!result)
      throw new HttpException(`id为${id}的组合不存在`, HttpStatus.BAD_REQUEST);
    // await this.portfolioRepository.update(id,  { count: result.count + 1 });
    await this.portfolioRepository.findOne(id);
    return result.toResponseObject();
  }
}

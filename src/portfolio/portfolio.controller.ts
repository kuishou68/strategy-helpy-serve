import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PortfolioService } from './portfolio.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreatePortfolioDto, PortfolioRo } from './dto/portfolio.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, Roles } from '../auth/role.guard';

@ApiTags('组合')
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  /**
   * 获取所有组合
   */
  @ApiOperation({ summary: '获取组合列表' })
  @Get('/trade-signal/list')
  async findAll(
    @Query() query,
    @Query('pageSize') pageSize: number,
    @Query('pageNum') pageNum: number,
  ): Promise<PortfolioRo> {
    return await this.portfolioService.findAll(query);
  }
}

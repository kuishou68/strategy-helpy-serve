/*
 * @Descripttion:
 * @version:
 * @Author: koala
 * @Date: 2021-12-11 15:48:24
 * @LastEditors: koala
 * @LastEditTime: 2022-01-21 10:50:48
 */
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { StrategyService } from './strategy.service';
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
import { CreateStrategyDto, StrategyRo } from './dto/strategy.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard, Roles } from './../auth/role.guard';

@ApiTags('策略')
@Controller('strategy')
export class StrategyController {
  constructor(private readonly strategyService: StrategyService) {}

  /**
   * 获取所有文章
   */
  @ApiOperation({ summary: '获取策略列表' })
  @Get('/list')
  async findAll(
    @Query() query,
    @Query('pageSize') pageSize: number,
    @Query('pageNum') pageNum: number,
  ): Promise<StrategyRo> {
    return await this.strategyService.findAll(query);
  }
}

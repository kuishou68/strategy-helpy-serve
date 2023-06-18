import { AuthModule } from './../auth/auth.module';
import { MDMiddleware } from './../core/middleware/md.middleware';
import { TagModule } from './../tag/tag.module';
import { CategoryModule } from './../category/category.module';
import { StrategyEntity } from './strategy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { StrategyController } from './strategy.controller';
import { StrategyService } from './strategy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StrategyEntity]),
    CategoryModule,
    TagModule,
    AuthModule,
  ],
  controllers: [StrategyController],
  providers: [StrategyService],
})
export class StrategyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MDMiddleware)
      .forRoutes({ path: 'strategy', method: RequestMethod.POST });
  }
}

import { AuthModule } from '../auth/auth.module';
import { MDMiddleware } from '../core/middleware/md.middleware';
import { TagModule } from '../tag/tag.module';
import { CategoryModule } from '../category/category.module';
import { PortfolioEntity } from './portfolio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PortfolioEntity]),
    CategoryModule,
    TagModule,
    AuthModule,
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MDMiddleware)
      .forRoutes({ path: 'portfolio', method: RequestMethod.POST });
  }
}

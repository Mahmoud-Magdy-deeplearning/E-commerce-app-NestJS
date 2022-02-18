import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './controllers/items.controller';
import { ItemsEntity } from './models/items.model';
import { ItemsService } from './services/items.service';

@Module({
  imports: [
    //   AuthModule,
    TypeOrmModule.forFeature([ItemsEntity]),
  ],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}

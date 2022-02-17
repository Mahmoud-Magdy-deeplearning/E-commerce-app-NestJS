import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './controllers/items.controller';
import { ItemsEntity } from './models/items.model';
import { ItemsService } from './services/items.service';

// import { AuthModule } from '../auth/auth.module';
// import { IsCreatorGuard } from './guards/is-creator.guard';

@Module({
  imports: [
    //   AuthModule, 
      TypeOrmModule.forFeature([ItemsEntity])],
  providers: [
    ItemsService, 
    // IsCreatorGuard
],
  controllers: [ItemsController],
})
export class ItemsModule {}
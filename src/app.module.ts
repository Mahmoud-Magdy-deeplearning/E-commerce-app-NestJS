import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsService } from './items/services/items.service';
import { ItemsController } from './items/controllers/items.controller';
import { ItemsModule } from './items/item.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal : true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize:true
    }),
    ItemsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

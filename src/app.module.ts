import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemserviceService } from './items/itemservice/itemservice.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import config from './config/keys';
@Module({
  imports: [ItemsModule,MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ItemsController, UsersController],
  providers: [AppService, ItemserviceService,UsersService],
})
export class AppModule {}

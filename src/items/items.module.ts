import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemserviceService } from './itemservice/itemservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'Item',schema:ItemSchema}])],
  controllers: [ItemsController],
  providers: [ItemserviceService],
})
export class ItemsModule {}

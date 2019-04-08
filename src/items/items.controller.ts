import { Controller,Get,Post,Delete,Put,Param,Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import {ItemserviceService} from '../items/itemservice/itemservice.service';
import { Item} from './interfaces/item.interfaces';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService:ItemserviceService){}
    @Get()
    findAll():Promise<Item[]>{
return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id):Promise<Item>{
        return this.itemService.findOne(id);
    }
    @Post()
    create(@Body() CreateItemDto:CreateItemDto):Promise<Item>{
return this.itemService.create(CreateItemDto);
    }
     @Put(':id')
     edit(@Body() updateItemDto:CreateItemDto,@Param('id') id):Promise<Item>{
return this.itemService.update(id,updateItemDto);
     }
     @Delete(':id')
     remove(@Param('id') id):Promise<Item>{
return this.itemService.delete(id);
     }
}

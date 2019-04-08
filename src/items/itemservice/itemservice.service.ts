import { Injectable } from '@nestjs/common';
import { Item } from '../interfaces/item.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


Injectable()
export class ItemserviceService {
    constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) { }
    async findAll(): Promise<Item[]> {
        return await this.ItemModel.find();
    }

    async findOne(id: String): Promise<Item> {
        return await this.ItemModel.findOne({ _id: id });
    }

    async create(Item: Item): Promise<Item> {

        const createItem = new this.ItemModel(Item);
        return await createItem.save();

    }

    async delete(id: String): Promise<Item> {
        return await this.ItemModel.findByIdAndRemove(id);
    }

    async update(id: String, Item: Item): Promise<Item> {
        return await this.ItemModel.findByIdAndUpdate(id, Item, { new: true });
    }
}

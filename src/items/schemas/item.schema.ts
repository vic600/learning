import * as mongoose from 'mongoose';



export const ItemSchema=new mongoose.Schema({
    id:String,
    Qty:Number,
    description:String
});
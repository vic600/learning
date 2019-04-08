import { Injectable } from '@nestjs/common';
import {users} from '../interfaces/users.interface';
import { Item } from 'src/items/interfaces/item.interfaces';
@Injectable()
export class UsersService {
private readonly users: users[] =[
    {
        id:"99888760",
        name:"sam",
        email:"sam@mail.com"
    },
    {
        id:"9989976667",
        name:"diego",
        email:"diego@mail.com"
    }
];

findAll(){
    return this.users;
}

findOne(id: String):users{
return this.users.find(users=>users.id === id)
}

}

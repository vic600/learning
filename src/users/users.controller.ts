import { Controller ,Post,Get,Put,Delete, Param} from '@nestjs/common';
import{users} from './interfaces/users.interface';
import { UsersService } from './users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice:UsersService){}
    @Get()
    findAll() : users[]{
        return this.userservice.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id):users{
return this.userservice.findOne(id);
    }
}

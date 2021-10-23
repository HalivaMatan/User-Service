import { UpdateManyRo } from './../../common/dto/update-many.ro';
import { DeleteManyRo } from './../../common/dto/delete-many.ro';
import { TransformInterceptor } from './../../common/interceptors/transform.interceptor';
import { UserRo } from './dto/user.ro';
import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseInterceptors } from '@nestjs/common';
import { ArrayTransformInterceptor } from 'src/common/interceptors/array-transform.interceptor';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(new TransformInterceptor(UserRo))
  public async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }
  
  @Get()
  @UseInterceptors(new ArrayTransformInterceptor(UserRo))
  public async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  
  @Get(':id')
  @UseInterceptors(new TransformInterceptor(UserRo))
  public async findOne(@Param('id') id: string): Promise<User> {
    
    const user = await this.usersService.findById(id);
    
    if(!user){
      throw new NotFoundException('User not found');
    }
    
    return user;
    
  }
  
  @Patch(':id')
  @UseInterceptors(new TransformInterceptor(UserRo))
  public async updateOne(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    
    const user = await this.usersService.findById(id);
    
    if(!user){
      throw new NotFoundException('User not found');
    }
    
    return await this.usersService.updateById(id, updateUserDto);
  }
  
  @Patch()
  @UseInterceptors(new TransformInterceptor(UpdateManyRo))
  public async updateMany(@Body() updateUserDto: UpdateUserDto): Promise<number> {
    return await this.usersService.updateMany(updateUserDto);
  }
  
  @Delete(':id')
  @UseInterceptors(new TransformInterceptor(UserRo))
  public async deleteOne(@Param('id') id: string): Promise<User> {

    const user = await this.usersService.findById(id);
    
    if(!user){
      throw new NotFoundException('User not found');
    }

    return await this.usersService.deleteById(id);
  }

  @Delete('')
  @UseInterceptors(new TransformInterceptor(DeleteManyRo))
  public async deleteMany(): Promise<number> {
    return await this.usersService.deleteMany();
  }
}

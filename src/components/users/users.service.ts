import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {

  constructor(private userRepository: UserRepository){
  }

  public async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(createUserDto);
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  public async findById(userId: string): Promise<User> {
    return await this.userRepository.findOne({_id: userId});
  }

  public async updateById(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.findOneAndUpdate({_id: userId}, updateUserDto);
  }

  public async updateMany(updateUserDto: UpdateUserDto): Promise<number> {
    return await this.userRepository.updateMany({},updateUserDto);
  }

  public async deleteById(userId): Promise<User>{
    return await this.userRepository.findOneAndDelete({_id: userId});
  }

  public async deleteMany(): Promise<number>{
    return await this.userRepository.deleteMany({});
  }

 
}

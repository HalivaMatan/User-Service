import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UserRepository } from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }]), CommonModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository]
})
export class UsersModule {}


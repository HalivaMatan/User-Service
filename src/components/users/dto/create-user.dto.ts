import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  
  @IsNotEmpty()
  readonly password: string;
  
  @IsEmail()
  readonly email: string;

}

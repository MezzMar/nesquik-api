import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsEmail()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string
}

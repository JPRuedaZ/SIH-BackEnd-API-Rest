import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsDate,
  MinLength,
  MaxLength,
  IsPositive,
} from 'class-validator';

export class GoogleUserInfoDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  document: number;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  cellphone: number;

  @IsNotEmpty()
  @IsBoolean()
  googleAccount: boolean;

  @IsNotEmpty()
  @IsBoolean()
  validate: boolean;

  @IsNotEmpty()
  @IsDate()
  lastLogin: Date;
}

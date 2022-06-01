import { IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}

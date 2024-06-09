import {IsOptional, IsString} from "class-validator";

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsOptional()
  @IsString()
  modification: string;

  @IsString()
  generation: string;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

@Entity()
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  make: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  model: string;

  @Column()
  @IsString()
  @IsOptional()
  @Length(1, 30)
  generation: string;

  @Column()
  @IsString()
  @IsOptional()
  @Length(1, 30)
  modification: string;

  @Column()
  @IsString()
  createdByUser: string;

  @Column()
  @IsString()
  fullName: string;
}

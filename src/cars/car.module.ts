import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CarService} from "./car.service";
import {CarController} from "./car.controller";
import {CarEntity} from "./car.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  providers: [CarService],
  controllers: [CarController],
  exports: [TypeOrmModule, CarService]
})
export class CarModule {}

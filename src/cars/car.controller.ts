import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import { Request } from 'express';
import {CreateCarDto} from "./dto/create-car.dto";
import {CarService} from "./car.service";
import {CarDto} from "./dto/car.dto";

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarDto, @Req() request: Request): Promise<CarDto> {
    return this.carService.create(createCarDto, request.ip);
  }

  @Get()
  findAll(){
    return this.carService.findAll();
  }
}

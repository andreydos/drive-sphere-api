import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateCarDto} from "./dto/create-car.dto";
import {CarEntity} from "./car.entity";
import {cleanString} from "../utils";

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>
  ) {}

  async create(createCarDto: CreateCarDto, userId: string): Promise<CarEntity> {
    const car = Object.assign(new CarEntity(), createCarDto, {
      createdByUser: userId,
      fullName: cleanString(`${createCarDto.make} ${createCarDto.model} ${createCarDto.modification} ${createCarDto.generation}`)
    });

    return this.carRepository.save(car);
  }

  async findAll(): Promise<CarEntity[]> {
    return this.carRepository.find();
  }
}

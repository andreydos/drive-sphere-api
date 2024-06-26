import { Test, TestingModule } from '@nestjs/testing';
import { CarService } from './car.service';

describe('CarsService', () => {
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarService],
    }).compile();

    service = module.get<CarService>(CarService) as CarService;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

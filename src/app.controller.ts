import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getApiHi(): string {
    return this.appService.getHi();
  }

  @Get('api')
  getApiHello(): string {
    return this.appService.getHi();
  }
}

import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHi(): string {
    const isDev = this.configService.get<boolean>('IS_DEV');
    return `Hi! drive-sphere-api is running in ${isDev ? 'DEV' : 'PROD'} mode!`;
  }
}

import { CacheTTL, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  //
  @CacheTTL(50)
  @Get('get-db')
  async getDb() {
    return this.appService.getDb();
  }

  // Compare DB vs Redis in Insert
  @Post('db')
  async insertDb() {
    return this.appService.insertDb();
  }

  @Post('redis')
  async insertRedis() {
    return this.appService.insertRedis();
  }
}

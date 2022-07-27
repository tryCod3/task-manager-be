import { Controller, Get, Post, Res, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(@Res({ passthrough: true }) response: any) {
    return 'hello world';
  }

  @Post()
  create() {
    return 'This action adds a new cat';
  }
}

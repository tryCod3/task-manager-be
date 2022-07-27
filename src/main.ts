import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import MyDataBase from './database/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await MyDataBase.connect();
  await app.listen(3000);
}
bootstrap();

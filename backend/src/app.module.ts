import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieModule } from './cookie/cookie.module';
import { HttpOnlyModule } from './http-only/http-only.module';

@Module({
  imports: [CookieModule, HttpOnlyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

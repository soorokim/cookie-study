import { Module } from '@nestjs/common';
import { HttpOnlyService } from './http-only.service';
import { HttpOnlyController } from './http-only.controller';

@Module({
  controllers: [HttpOnlyController],
  providers: [HttpOnlyService],
})
export class HttpOnlyModule {}

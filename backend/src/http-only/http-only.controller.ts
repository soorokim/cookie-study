import { Controller, Get, HttpException, Post, Req, Res } from '@nestjs/common';
import { HttpOnlyService } from './http-only.service';
import { Request, Response } from 'express';

@Controller('http-only')
export class HttpOnlyController {
  constructor(private readonly httpOnlyService: HttpOnlyService) {}
  @Get('/create')
  getHttpOnlyCookie(@Res({ passthrough: true }) res: Response): string {
    return this.httpOnlyService.httpOnlyCookie(res);
  }

  @Post('/check')
  postHttpOnlyCookie(@Req() req: Request): string | HttpException {
    return this.httpOnlyService.checkHttpOnlyCookie(req);
  }
}

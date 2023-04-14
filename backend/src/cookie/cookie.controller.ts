import {
  Controller,
  Get,
  HttpException,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CookieService } from './cookie.service';
import { Response } from 'express';

@Controller('cookie')
export class CookieController {
  appService: CookieService;
  constructor(private readonly cookieService: CookieService) {}

  @Get('/create')
  getCookie(
    @Res({ passthrough: true }) res: Response,
    @Query('path') path?: string,
  ): string {
    return this.cookieService.cookie(res, path);
  }

  @Post('/check')
  checkCookie(@Req() req): string | HttpException {
    return this.cookieService.basicCookieCheck(req);
  }
}

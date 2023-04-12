import { Controller, Get, HttpException, Post, Req, Res } from '@nestjs/common';
import { CookieService } from './cookie.service';
import { Response } from 'express';

@Controller('cookie')
export class CookieController {
  appService: CookieService;
  constructor(private readonly cookieService: CookieService) {}

  @Get('/create')
  getCookie(@Res({ passthrough: true }) res: Response): string {
    return this.cookieService.cookie(res);
  }

  @Post('/check')
  checkCookie(@Req() req): string | HttpException {
    return this.cookieService.basicCookieCheck(req);
  }
}

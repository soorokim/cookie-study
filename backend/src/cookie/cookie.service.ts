import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CookieService {
  cookie(res: Response) {
    res.cookie('basic-cookie', 'cookie-value', {
      path: '/',
      maxAge: 30000, // 30초
    });
    return 'OK';
  }
  basicCookieCheck(req: Request) {
    if (req.headers?.cookie) {
      return 'OK';
    }

    throw new HttpException(
      'Backend에서 쿠키를 받아볼 수 없습니다.',
      HttpStatus.NOT_FOUND,
    );
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CookieService {
  cookie(res: Response, path?: string) {
    res.cookie('basic-cookie', 'cookie-value', {
      path: path ? path : '/cookie',
      maxAge: 30000, // 30초
      sameSite: 'none',
      secure: true,
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

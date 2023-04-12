import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

const HTTP_ONLY_COOKIE_NAME = 'http-only-cookie';
const getCookiesByString = (cookieString: string) =>
  new Map<string, string>(
    cookieString.split('; ').map((t) => t.split('=')) as [[string, string]],
  );

@Injectable()
export class HttpOnlyService {
  httpOnlyCookie(res: Response) {
    /** H03 쿠키의 path에 오타가 있는거같아요! - 쿠키의 path는 전송받을 api의 경로와 일치해야 합니다.
     *  현재 백엔드의 경로는 '/http-only'에요
     *  H04 Http Only 쿠키가 되려면 옵션을 넣어줘야 해요!
     * Http Only Cookie Setting
     * 여기서 쿠키를 설정합니다.
     * 쿠키설정 옵션은 MDN을 참고하세요
     * 참고: https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie#%EB%94%94%EB%A0%89%ED%8B%B0%EB%B8%8C
     */
    res.cookie(HTTP_ONLY_COOKIE_NAME, 'http-only', {
      path: '/http-only',
      maxAge: 30000,
      httpOnly: true,
      secure: true,
    });
    return 'OK';
  }

  checkHttpOnlyCookie(req: Request) {
    const cookieString = req.headers?.cookie ?? '';

    if (cookieString.length) {
      const cookieMap = getCookiesByString(cookieString);
      if (cookieMap.has(HTTP_ONLY_COOKIE_NAME)) {
        return 'OK';
      }
    }

    throw new HttpException(
      'http-only쿠키를 확인 할 수 없습니다.',
      HttpStatus.NOT_FOUND,
    );
  }
}

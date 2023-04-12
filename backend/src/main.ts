import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** HINT H02 프론트엔드에서 withCredential을 사용하면 백엔드에서도
   *  관련 해서 설정 해주어야 할게 있습니다.
   *  CORS setting
   *  'Access-Control-Allow-Origins'
   *  'Access-Control-Allow-Credentials'
   *  셋팅 해 주어야합니다.
   *  참고: https://github.com/expressjs/cors#configuration-options
   * */
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

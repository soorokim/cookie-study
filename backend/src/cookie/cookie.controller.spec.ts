import { Test, TestingModule } from '@nestjs/testing';
import { CookieController } from './cookie.controller';
import { CookieService } from './cookie.service';

describe('CookieController', () => {
  let controller: CookieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookieController],
      providers: [CookieService],
    }).compile();

    controller = module.get<CookieController>(CookieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

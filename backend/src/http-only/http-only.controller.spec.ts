import { Test, TestingModule } from '@nestjs/testing';
import { HttpOnlyController } from './http-only.controller';
import { HttpOnlyService } from './http-only.service';

describe('HttpOnlyController', () => {
  let controller: HttpOnlyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpOnlyController],
      providers: [HttpOnlyService],
    }).compile();

    controller = module.get<HttpOnlyController>(HttpOnlyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

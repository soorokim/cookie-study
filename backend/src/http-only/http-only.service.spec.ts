import { Test, TestingModule } from '@nestjs/testing';
import { HttpOnlyService } from './http-only.service';

describe('HttpOnlyService', () => {
  let service: HttpOnlyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpOnlyService],
    }).compile();

    service = module.get<HttpOnlyService>(HttpOnlyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

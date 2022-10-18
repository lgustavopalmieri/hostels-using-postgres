import { Test, TestingModule } from '@nestjs/testing';
import { HostelsService } from './hostels.service';

describe('HostelsService', () => {
  let service: HostelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostelsService],
    }).compile();

    service = module.get<HostelsService>(HostelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

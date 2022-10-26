import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hostel } from './entities/hostel.entity';
import { HostelsService } from './hostels.service';

describe('HostelsService', () => {
  let service: HostelsService;

  const mockHostelRepository = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HostelsService,
        {
          provide: getRepositoryToken(Hostel),
          useValue: mockHostelRepository,
        },
      ],
    }).compile();

    service = module.get<HostelsService>(HostelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

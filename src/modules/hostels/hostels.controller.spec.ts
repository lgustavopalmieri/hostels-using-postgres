import { Test, TestingModule } from '@nestjs/testing';
import { HostelsController } from './hostels.controller';
import { HostelsService } from './hostels.service';

describe('HostelsController', () => {
  let controller: HostelsController;
  let service: HostelsService;

  const mockHostelService = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostelsController],
      providers: [
        {
          provide: HostelsService,
          useValue: mockHostelService,
        },
      ],
    }).compile();

    controller = module.get<HostelsController>(HostelsController);
    service = module.get<HostelsService>(HostelsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

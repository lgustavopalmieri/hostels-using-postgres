import { Test, TestingModule } from '@nestjs/testing';
import { HostelsController } from './hostels.controller';
import { HostelsService } from './hostels.service';

describe('HostelsController', () => {
  let controller: HostelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostelsController],
      providers: [HostelsService],
    }).compile();

    controller = module.get<HostelsController>(HostelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

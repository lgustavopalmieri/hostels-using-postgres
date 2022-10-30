import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hostel } from './entities/hostel.entity';
import { HostelsService } from './hostels.service';
import { adressMock, mockHostel, newHostel } from './mocks/hostel.mock';
import Location from '../../features/geolocation';
import { Repository } from 'typeorm';

describe('HostelsService', () => {
  let service: HostelsService;
  let repository: Repository<Hostel>;

  const mockHostelRepository = {
    create: jest.fn(),
    save: jest.fn(),
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
    repository = module.get<Repository<Hostel>>(getRepositoryToken(Hostel));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('Should create a new Hostel', async () => {
      jest
        .spyOn(Location, 'getLocation')
        .mockImplementationOnce(() => Promise.resolve(mockHostel));

      jest
        .spyOn(mockHostelRepository, 'create')
        .mockImplementationOnce(() => Promise.resolve(mockHostel));

      jest
        .spyOn(mockHostelRepository, 'save')
        .mockImplementationOnce(() => Promise.resolve(mockHostel));

      const result = await service.create(newHostel as any);

      expect(result).toEqual(mockHostel);
      expect(result.name).toBe('Testing Hostels');
      expect(result.address).toMatchObject(adressMock);
    });
  });
});

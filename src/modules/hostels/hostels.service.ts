import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Location from '../../features/geolocation';
import { Repository } from 'typeorm';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { Hostel } from './entities/hostel.entity';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class HostelsService {
  constructor(
    @InjectRepository(Hostel) private hostelRepo: Repository<Hostel>,
  ) {}
  async create(createHostelDto: CreateHostelDto) {
    const hostelAddress = await Location.getLocation(createHostelDto.address);
    console.log(hostelAddress);
    const hostel = this.hostelRepo.create({
      ...createHostelDto,
      address: {
        ...hostelAddress,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.hostelRepo.save(hostel);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Hostel>> {
    return paginate<Hostel>(this.hostelRepo, options);
  }

  findOne(id: number) {
    return `This action returns a #${id} hostel`;
  }

  update(id: number, updateHostelDto: UpdateHostelDto) {
    return `This action updates a #${id} hostel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hostel`;
  }
}

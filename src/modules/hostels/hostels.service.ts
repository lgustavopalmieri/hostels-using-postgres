import { Injectable } from '@nestjs/common';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';

@Injectable()
export class HostelsService {
  create(createHostelDto: CreateHostelDto) {
    return 'This action adds a new hostel';
  }

  findAll() {
    return `This action returns all hostels`;
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

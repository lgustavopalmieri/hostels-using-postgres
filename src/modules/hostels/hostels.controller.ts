import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';

@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Post()
  create(@Body() createHostelDto: CreateHostelDto) {
    return this.hostelsService.create(createHostelDto);
  }

  @Get()
  findAll() {
    return this.hostelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hostelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHostelDto: UpdateHostelDto) {
    return this.hostelsService.update(+id, updateHostelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hostelsService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { HostelsService } from './hostels.service';
import { CreateHostelDto } from './dto/create-hostel.dto';
import { UpdateHostelDto } from './dto/update-hostel.dto';
import { Hostel } from './entities/hostel.entity';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('hostels')
export class HostelsController {
  constructor(private readonly hostelsService: HostelsService) {}

  @Post()
  create(@Body() createHostelDto: CreateHostelDto) {
    return this.hostelsService.create(createHostelDto);
  }

  @Get()
  async index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Hostel>> {
    limit = limit > 100 ? 100 : limit;
    return this.hostelsService.paginate({
      page,
      limit,
    });
  }

  // @Get()
  // findAll() {
  //   return this.hostelsService.findAll();
  // }

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

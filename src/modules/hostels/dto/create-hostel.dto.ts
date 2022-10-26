import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { HostelAddressDto } from './hostel-address.dto';

export class CreateHostelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => HostelAddressDto)
  address: HostelAddressDto;
}

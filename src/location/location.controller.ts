import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationService } from './location.service';

class DeleteObject {
  id: number;
}
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    await this.locationService.create(createLocationDto);
    return { success: 1 };
  }

  @Get()
  async findAll() {
    const positions = await this.locationService.findAll();
    return { success: 1, positions };
  }

  @Delete()
  async delete(@Body() body: DeleteObject) {
    await this.locationService.delete(body.id);
    return { success: 1 };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
  constructor(private readonly PrismaService: PrismaService) {}
  async create(createLocationDto: CreateLocationDto) {
    await this.PrismaService.location.create({
      data: createLocationDto,
    });
    return { success: 1 };
  }

  async findAll() {
    return await this.PrismaService.location.findMany();
  }

  async delete(id: number) {
    return await this.PrismaService.location.delete({
      where: { id: id },
    });
  }
}

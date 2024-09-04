import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DescriptionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createDescriptionDto: Prisma.DescriptionCreateInput) {
    return this.databaseService.description.create({
      data: createDescriptionDto,
    });
  }

  async findAll() {
    return this.databaseService.description.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.description.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateDescriptionDto: Prisma.DescriptionUpdateInput,
  ) {
    return this.databaseService.description.update({
      where: { id },
      data: updateDescriptionDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.description.delete({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TagsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTagDto: Prisma.TagCreateInput) {
    return this.databaseService.tag.create({
      data: createTagDto,
    });
  }

  async findAll() {
    return this.databaseService.tag.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.tag.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTagDto: Prisma.TagUpdateInput) {
    return this.databaseService.tag.update({
      where: { id },
      data: updateTagDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.tag.delete({
      where: { id },
    });
  }
}

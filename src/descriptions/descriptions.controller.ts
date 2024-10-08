import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DescriptionsService } from './descriptions.service';
import { Prisma } from '@prisma/client';

@Controller('descriptions')
export class DescriptionsController {
  constructor(private readonly descriptionsService: DescriptionsService) {}

  @Post()
  create(@Body() createDescriptionDto: Prisma.DescriptionCreateInput) {
    return this.descriptionsService.create(createDescriptionDto);
  }

  @Get()
  findAll() {
    return this.descriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDescriptionDto: Prisma.DescriptionUpdateInput,
  ) {
    return this.descriptionsService.update(+id, updateDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionsService.remove(+id);
  }
}

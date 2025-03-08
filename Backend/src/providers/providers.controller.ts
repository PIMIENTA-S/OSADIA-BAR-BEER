import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { Provider } from '../schemas/provider.schema';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  async create(@Body() provider: Provider) {
    return this.providersService.create(provider);
  }

  @Get()
  async findAll() {
    return this.providersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.providersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Provider>) {
    return this.providersService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.providersService.delete(id);
  }

}

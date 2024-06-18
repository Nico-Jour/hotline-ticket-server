import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHotlinerDto } from './dto/create-hotliner.dto';
import { UpdateHotlinerDto } from './dto/update-hotliner.dto';
import { HotlinersService } from './hotliners.service';

@Controller('hotliners')
export class HotlinersController {
  constructor(private readonly hotlinersService: HotlinersService) {}

  @Get()
  getAllData() {
    return this.hotlinersService.getAllData();
  }

  @Get(':id')
  getDataById(@Param('id') id: string) {
    return this.hotlinersService.getDataById(id);
  }

  @Post()
  addData(@Body() newData: CreateHotlinerDto) {
    this.hotlinersService.addData(newData);
  }

  @Patch(':id')
  updateData(@Param('id') id: string, @Body() updatedData: UpdateHotlinerDto) {
    this.hotlinersService.updateData(id, updatedData);
  }

  @Delete(':id')
  deleteData(@Param('id') id: string) {
    this.hotlinersService.deleteData(id);
  }
}

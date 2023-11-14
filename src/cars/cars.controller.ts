import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      ok: true,
      body,
    };
  }

  @Patch(':id')
  updateCar(@Body() body: any, @Param('id') id: string) {
    return {
      ok: true,
      response: {
        id,
        ...body,
      },
    };
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return {
      ok: true,
      response: {
        id,
        message: `Car with id ${id} deleted`,
      },
    };
  }
}

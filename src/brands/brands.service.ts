import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'toyota',
      createAt: new Date(),
    },
  ];

  create(createBrandDto: CreateBrandDto): Brand {
    const { name } = createBrandDto;
    const isBrandExist = this.brands.find(
      (brand) => brand.name === name.toLocaleLowerCase(),
    );
    if (isBrandExist)
      throw new NotFoundException(`Brand ${name} already exist`);
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll(): Brand[] {
    return [...this.brands];
  }

  findOne(id: string): Brand {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === brandDB.id) {
        brandDB.updateAt = new Date();
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
        };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return `This action removes a #${id} brand`;
  }
}

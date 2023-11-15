import { Injectable } from '@nestjs/common';
import { CARD_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandService: BrandsService,
  ) {}

  populateDB() {
    // CARD_SEED
    // BRAND_SEED;
    this.carsService.fillCarsWithSeedData(CARD_SEED);
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);

    return 'This action adds a new seed';
  }
}

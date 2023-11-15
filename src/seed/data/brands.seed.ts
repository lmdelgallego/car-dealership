import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    createAt: new Date(),
  },
];

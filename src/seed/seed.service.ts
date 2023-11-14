import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB() {
    return 'This action adds a new seed';
  }
}

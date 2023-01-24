import { Injectable } from '@nestjs/common';
// import { DbService } from './shared';

@Injectable()
export class AppService {
  // constructor(private readonly db: DbService) {}
  getHello(): string {
    return 'Hello World!';
  }
}

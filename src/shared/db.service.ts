/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
// import lodash from 'lodash';
import { JSONFile } from 'lowdb/lib/node';

@Injectable()
export class DbService {
  constructor() {
    const adapter = new JSONFile('db.json');
    const db = new Low(adapter);
    db.read();
  }

  // async read(key: string) {

  // }

  // async write(key: string, data: any) {

  // }

  // async update(key: string, data: any) {

  // }

  // async delete(key: string, data: any) {

  // }
}

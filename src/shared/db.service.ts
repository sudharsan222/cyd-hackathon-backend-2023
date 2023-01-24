/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { get, set } from 'lodash';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/lib/node';

@Injectable()
export class DbService {
  private db: Low;
  constructor() {
    const adapter = new JSONFile('db.json');
    this.db = new Low(adapter);
  }

  async read(key: string) {
    await this.db.read();
    return get(this.db.data, key);
  }

  async write(key: string, data: any) {
    const dataObj = {};
    set(dataObj, key, data);
    this.db.data = dataObj;
    await this.db.write();
    return this.db.data;
  }

  // async update(key: string, data: any) {

  // }

  // async delete(key: string, data: any) {

  // }
}

import { Injectable  } from '@nestjs/common';
import { DbService } from './shared';
//import {watchlist} from './Watchlistmodel'
import * as fs from 'fs';

//import { watchlist } from '../databases/WatchLists.json'
//const http = require('http')
@Injectable()
export class AppService {
  //private Watchlists: watchlist[] = [];
  constructor(private readonly db: DbService) {}
  async getHello(): Promise<string> {
    const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold! ${JSON.stringify(result)}`;
  }
  // insertWatchlist(name:string,tokens:[string]):string{
  //   const watchlistid = Math.random().toString();
  //   const newwatchlist = new watchlist(watchlistid,name,tokens);
  //   this.Watchlists.push(newwatchlist);
  //   return watchlistid;
//}
async getWatchlist() {
  try {
      const data = await fs.promises.readFile('.//databases//WatchLists.json', 'utf8');
      console.log(data);
      return JSON.parse(data);
  } catch (err) {
      console.error(err);
  }
} 

  

  async getbyid(id: string) {
      const data = await fs.promises.readFile('.//databases//WatchLists.json', 'utf8');
      console.log(data)
      console.log('matching id')
      
      console.log(JSON.parse(data).find((item:any) => item._id === id));
      return JSON.parse(data).find((item:any) => item._id === id);
  }

  async deletebyid(id:string)
  {
    
    const data = await fs.promises.readFile('.//databases//WatchLists.json', 'utf8');
    console.log(data)
    //console.log('matching id')
    
    const element = JSON.parse(data).find((item:any) => item._id === id);
    console.log("element")
    console.log(element)
    const index = data.indexOf(element);
    if (index === -1) {
      return { success: false, message: 'Data not found' };
    }
    //data.splice(index, 1);
    return { success: true, message: 'Data deleted' };
    console.log("deleted");
  }
    //return JSON.parse(data).find((item:any) => item._id === id)
  

  functionchecking():string
  {
    return "this is working";
  }

  // async getData(url: string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     http.get(url, (res) => {
  //       const { statusCode } = res;
  //       const contentType = res.headers['content-type'];
  //       let error;
  //       if (statusCode !== 200) {
  //         error = new Error('Request Failed.\n' +
  //                           `Status Code: ${statusCode}`);
  //       } else if (!/^application\/json/.test(contentType)) {
  //         error = new Error('Invalid content-type.\n' +
  //                           `Expected application/json but received ${contentType}`);
  //       }
  //       if (error) {
  //         res.resume();
  //         reject(error);
  //       }
  //       res.setEncoding('utf8');
  //       let rawData = '';
  //       res.on('data', (chunk) => { rawData += chunk; });
  //       res.on('end', () => {
  //         try {
  //           const parsedData = JSON.parse(rawData);
  //           resolve(parsedData);
  //         } catch (e) {
  //           reject(e);
  //         }
  //       });
  //     }).on('error', (e) => {
  //       reject(e);
  //     });
  //   });
  // }
}


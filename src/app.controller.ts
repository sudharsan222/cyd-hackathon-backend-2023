import { Controller, Get, Param ,Delete,Patch} from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import axios from 'axios';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
   
  //first milestone
  @Post('')
  async findAll(@Body('address') address1:string): Promise<any> {
    //console.log(address1);
    const response = await axios.get(`https://api.covalenthq.com/v1/1/address/${address1}/balances_v2/?key=ckey_e52291d6e2dd46ba9999cb4e5a7`);
    // const newJSON = Object.entries(response)
    // .filter(([key]) => key === 'address' || key === 'items' || key === 'data')
    // .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    
    //console.log(response.data.address)
    //console.log(response.data.items[0].contract_name)
    // const newjson = {
    //   "data": response.data.address
    // }
    // console.log('new');
    //  console.log(newjson);
    return response.data;
  }

  @Get('/watchlist')
  async getWatchList(): Promise<string> {
    return this.appService.getWatchlist();
  }
  
  @Get('/watchlist/:id')
  async getByid(@Param('id') id:string):Promise<string>{
      return this.appService.getbyid(id);
  }
  
  @Patch(':id')
  async updateProduct(@Param('id') id:string,@Body('name') name:string,@Body('tokens') tokens:[string]):Promise<any>{
    // this.appService.updateWatchlist(id,name,tokens);
     
  }

  @Delete('/watchlist/:id')
  async deletewatchlist(@Param('id') id:string):Promise<any>{
    return this.appService.deletebyid(id);
  }

  // @Post('watchlist')
  // addWatchlist(@Body('name') name:string,@Body('tokens') tokens:[string])
  // {
  //   const generatedId =  this.appService.insertWatchlist(name,tokens);
  //     return {id:generatedId};
  // }

   
  
  
}





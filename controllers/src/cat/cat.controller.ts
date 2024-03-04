import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Redirect,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('cat')
export class CatController {
  @Get()
  findAll() {
    // return 'This action return all action';
    // return { name: 'dilshan' };
    // return { name: 'dilshan' };
    // return ['dilshan', 'shivantha']; // still return json object
  }

  @HttpCode(HttpStatus.PAYMENT_REQUIRED)
  @Header('Cache-Control', 'true')
  @Post('/post')
  saveCatData(@Res() response: Response) {
    console.log();
    response.header('Content-type', 'application/json');
    response.send();
    // response.status(200).send('dilshan');
    // response.status(200).send(['dilsha']);
    // return 'dila';
  }

  @Get('/get')
  @Redirect('https://nestjs.com', 302)
  getCatData() {
    console.log('redirect');
  }
}

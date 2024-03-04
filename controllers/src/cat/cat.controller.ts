import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Next,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('cat')
export class CatController {
  @Get()
  findAll(): string[] {
    // return 'This action return all action';
    // return { name: 'dilshan' };
    // return { name: 'dilshan' };
    return ['dilshan', 'shivantha']; // still return json object
  }

  @HttpCode(HttpStatus.PAYMENT_REQUIRED)
  @Header('Cache-Control', 'true')
  @Post()
  saveCatData() {
    console.log();
    // response.status(200).send('dilshan');
    // response.status(200).send(['dilsha']);
    // return 'dila';
  }
}

import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';

@Controller('cat')
export class CatController {
  // @Get()
  // findAll(@Req() request: Request) {
  //   // return 'This action return all action';
  //   // return { name: 'dilshan' };
  //   // return { name: 'dilshan' };
  //   // console.log(request);
  //   console.log(request);
  //   return ['dilshan', 'shivantha']; // still return json object
  // }
  //
  // @Get('/:id/:name')
  // findAll(@Param() params: any) {
  //   console.log('id : ', params.id);
  //   console.log('name : ', params.name);
  // }

  @Get('/:id/:name')
  findAll(@Param('id') id: number, @Param() params: any) {
    console.log('id : ', id.toString());
    console.log('name : ', params.name);
  }
  @HttpCode(HttpStatus.PAYMENT_REQUIRED)
  @Header('Cache-aa', 'true')
  @Post('/post')
  saveCatData(@Res() response: Response) {
    console.log();
    response.header('Content-te', 'application/json');
    response.send();
    // response.status(200).send('dilshan');
    // response.status(200).send(['dilsha']);
    // return 'dila';
  }

  // @Get('/get')
  // @Redirect('https://nestjs.com', 302)
  // getCatData() {
  //   console.log('redirect');
  // }

  // @Get('/get')
  // @Header('firstName', 'Dilshan shivnatha')
  // @Redirect('https://nestjs.com', 302)
  // getCatData() {
  //   const redirect: HttpRedirectResponse = {
  //     url: 'http://localhost:3000/cat',
  //     statusCode: 302,
  //   };
  //   return redirect;
  // }

  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'http://localhost:3000/cat' };
  //   }
  // }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'http://localhost:3000/cat', statusCode: 301 };
    }
  }

  @Get('/car')
  findAllCard(): Observable<any[]> {
    return of(['dilshan']);
  }
}

import {

  Controller,
  Get,
  Post,
  Put,
  Delete,

  Param,
  Body,
  Query,

} from '@nestjs/common';

import { ProductsService }
from './products.service';

@Controller('products')
export class ProductsController {

  constructor(

    private productsService:
      ProductsService,

  ) {}

  @Get()
  obtenerTodos() {

    return this.productsService
      .obtenerTodos();
  }

  @Get('buscar')
  buscar(

    @Query('texto')
    texto: string,

  ) {

    return this.productsService
      .buscar(texto);
  }

  @Get(':id')
  obtenerUno(

    @Param('id')
    id: number,

  ) {

    return this.productsService
      .obtenerUno(id);
  }

  @Post()
  crear(

    @Body()
    body: any,

  ) {

    return this.productsService
      .crear(body);
  }

  @Put(':id')
  actualizar(

    @Param('id')
    id: number,

    @Body()
    body: any,

  ) {

    return this.productsService
      .actualizar(
        id,
        body,
      );
  }

  @Delete(':id')
  eliminarLogico(

    @Param('id')
    id: number,

  ) {

    return this.productsService
      .eliminarLogico(id);
  }
}
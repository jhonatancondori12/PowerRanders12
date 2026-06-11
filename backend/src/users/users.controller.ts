import {

  Controller,
  Get,
  Post,
  Put,
  Delete,

  Param,
  Body,

} from '@nestjs/common';

import { UsersService }
from './users.service';

@Controller('users')
export class UsersController {

  constructor(
    private usersService:
      UsersService,
  ) {}

  @Get()
  obtenerTodos() {

    return this.usersService
      .obtenerTodos();
  }

  @Get(':id')
  obtenerUno(
    @Param('id')
    id: number,
  ) {

    return this.usersService
      .obtenerUno(id);
  }

  @Post()
  registrar(
    @Body()
    body: any,
  ) {

    return this.usersService
      .registrar(body);
  }

  @Put(':id')
  actualizar(

    @Param('id')
    id: number,

    @Body()
    body: any,

  ) {

    return this.usersService
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

    return this.usersService
      .eliminarLogico(
        id,
      );
  }
}
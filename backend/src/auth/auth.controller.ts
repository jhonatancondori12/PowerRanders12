import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';

import { AuthService }
from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService:
      AuthService,
  ) {}

  @Post('hash')
  async hashPassword(
    @Body()
    body: any,
  ) {

    const hash =
      await this.authService
        .encriptarPassword(
          body.password,
        );

    return {
      hash,
    };
  }

  @Post('token')
  generarToken(
    @Body()
    body: any,
  ) {

    return {

      token:
        this.authService
          .generarToken(
            body,
          ),
    };
  }
}
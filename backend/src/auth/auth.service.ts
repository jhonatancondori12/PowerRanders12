import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
  ) {}

  async encriptarPassword(
    password: string,
  ) {

    const salt = 10;

    return await bcrypt.hash(
      password,
      salt,
    );
  }

  async verificarPassword(
    password: string,
    hash: string,
  ) {

    return await bcrypt.compare(
      password,
      hash,
    );
  }

  generarToken(
    usuario: any,
  ) {

    const payload = {

      id: usuario.id,

      usuario: usuario.usuario,

      rol: usuario.rol,
    };

    return this.jwtService.sign(
      payload,
    );
  }
}
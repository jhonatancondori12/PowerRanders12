import {
  Injectable,
} from '@nestjs/common';

import {
  InjectRepository,
} from '@nestjs/typeorm';

import {
  Repository,
} from 'typeorm';

import { User }
from './user.entity';

import { AuthService }
from '../auth/auth.service';

@Injectable()
export class UsersService {

  constructor(

    @InjectRepository(User)

    private userRepository:
      Repository<User>,

    private authService:
      AuthService,

  ) {}

  async obtenerTodos() {

    return await this.userRepository.find();
  }

  async obtenerUno(
    id: number,
  ) {

    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async registrar(
    data: any,
  ) {

    const hash =
      await this.authService
        .encriptarPassword(
          data.password,
        );

    const nuevoUsuario =
      this.userRepository.create({

        nombre:
          data.nombre,

        correo:
          data.correo,

        usuario:
          data.usuario,

        password:
          hash,

        rol:
          data.rol ||
          'CLIENTE',

        estado:
          true,
      });

    return await this.userRepository.save(
      nuevoUsuario,
    );
  }

  async actualizar(
    id: number,
    data: any,
  ) {

    await this.userRepository.update(
      id,
      data,
    );

    return {
      mensaje:
        'Usuario actualizado',
    };
  }

  async eliminarLogico(
    id: number,
  ) {

    await this.userRepository.update(
      id,
      {
        estado: false,
      },
    );

    return {
      mensaje:
        'Usuario eliminado',
    };
  }

  async buscarPorUsuario(
    usuario: string,
  ) {

    return await this.userRepository.findOne({
      where: {
        usuario,
      },
    });
  }
}
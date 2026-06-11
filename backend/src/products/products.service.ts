import {
  Injectable,
} from '@nestjs/common';

import {
  InjectRepository,
} from '@nestjs/typeorm';

import {
  Repository,
} from 'typeorm';

import { Product }
from './product.entity';

@Injectable()
export class ProductsService {

  constructor(

    @InjectRepository(Product)

    private productRepository:
      Repository<Product>,

  ) {}

  async obtenerTodos() {

    return await this.productRepository.find();
  }

  async obtenerUno(
    id: number,
  ) {

    return await this.productRepository.findOne({
      where: { id },
    });
  }

  async crear(
    data: any,
  ) {

    const producto =
      this.productRepository.create({

        nombre:
          data.nombre,

        categoria:
          data.categoria,

        precio:
          data.precio,

        stock:
          data.stock,

        estado:
          true,
      });

    return await this.productRepository.save(
      producto,
    );
  }

  async actualizar(
    id: number,
    data: any,
  ) {

    await this.productRepository.update(
      id,
      data,
    );

    return {
      mensaje:
        'Producto actualizado',
    };
  }

  async eliminarLogico(
    id: number,
  ) {

    await this.productRepository.update(
      id,
      {
        estado: false,
      },
    );

    return {
      mensaje:
        'Producto eliminado',
    };
  }

  async buscar(
    texto: string,
  ) {

    return await this.productRepository
      .createQueryBuilder('producto')
      .where(
        'producto.nombre LIKE :texto',
        {
          texto: `%${texto}%`,
        },
      )
      .getMany();
  }
}
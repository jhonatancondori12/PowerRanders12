import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('productos')
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  nombre: string;

  @Column({
    length: 50,
  })
  categoria: string;

  @Column('decimal', {
    precision: 10,
    scale: 2,
  })
  precio: number;

  @Column()
  stock: number;

  @Column({
    default: true,
  })
  estado: boolean;
}
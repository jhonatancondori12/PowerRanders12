import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('usuarios')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  nombre: string;

  @Column({
    unique: true,
  })
  correo: string;

  @Column({
    unique: true,
  })
  usuario: string;

  @Column()
  password: string;

  @Column({
    default: 'CLIENTE',
  })
  rol: string;

  @Column({
    default: true,
  })
  estado: boolean;
}
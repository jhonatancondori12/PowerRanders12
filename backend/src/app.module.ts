import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { LogsModule } from './logs/logs.module';

import { User } from './users/user.entity';
import { Product } from './products/product.entity';
import { Log } from './logs/log.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'powerranders',

      entities: [
        User,
        Product,
        Log,
      ],

      synchronize: true,
      autoLoadEntities: true,
    }),

    AuthModule,
    UsersModule,
    ProductsModule,
    LogsModule,
  ],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import getConfig from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const config = getConfig();

const DATABASE_SETUP = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    ...(config.database as TypeOrmModuleOptions),
    entities: ['dist/modules/**/entities/**.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/**/*.js'],
    migrationsTableName: 'migrations_store-api',
    migrationsRun: true,
  }),
];

@Module({
  imports: [...DATABASE_SETUP],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

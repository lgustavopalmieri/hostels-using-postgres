import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HostelsModule } from './modules/hostels/hostels.module';
import getConfig from './config';

const config = getConfig();

const DATABASE_SETUP = [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({
    ...(config.database as TypeOrmModuleOptions),
    entities: ['dist/modules/**/entities/**.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/**/*.js'],
    migrationsTableName: 'migrations_hostels-api',
    migrationsRun: true,
  }),
];

@Module({
  imports: [...DATABASE_SETUP, HostelsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

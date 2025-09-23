import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriancaModule } from './crianca/crianca.module';
import { Crianca } from './crianca/entities/crianca.entity';
import { Endereco } from './crianca/entities/endereco.entity';
import { Contatos } from './crianca/entities/contatos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'crianca_db',
      entities: [Crianca, Endereco, Contatos],
      synchronize: true, // Para desenvolvimento apenas
    }),
    CriancaModule,
  ],
})
export class AppModule {}
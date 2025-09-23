import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriancaService } from './crianca.service';
import { CriancaController } from './crianca.controller';
import { Crianca } from './entities/crianca.entity';
import { Endereco } from './entities/endereco.entity';
import { Contatos } from './entities/contatos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crianca, Endereco, Contatos])],
  controllers: [CriancaController],
  providers: [CriancaService],
})
export class CriancaModule {}
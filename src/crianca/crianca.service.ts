import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCriancaDto } from './dto/create-crianca.dto';
import { UpdateCriancaDto } from './dto/update-crianca.dto';
import { Crianca } from './entities/crianca.entity';
import { Endereco } from './entities/endereco.entity';
import { Contatos } from './entities/contatos.entity';

@Injectable()
export class CriancaService {
  constructor(
    @InjectRepository(Crianca)
    private criancaRepository: Repository<Crianca>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
    @InjectRepository(Contatos)
    private contatosRepository: Repository<Contatos>,
  ) {}

  async create(createCriancaDto: CreateCriancaDto): Promise<Crianca> {
    // Criar endereço
    const endereco = this.enderecoRepository.create(createCriancaDto.endereco);
    const savedEndereco = await this.enderecoRepository.save(endereco);

    // Criar contatos
    const contatos = this.contatosRepository.create(createCriancaDto.contatos);
    const savedContatos = await this.contatosRepository.save(contatos);

    // Criar criança
    const crianca = this.criancaRepository.create({
      ...createCriancaDto,
      endereco: savedEndereco,
      contatos: savedContatos,
    });

    return this.criancaRepository.save(crianca);
  }

  async findAll(): Promise<Crianca[]> {
    return this.criancaRepository.find({
      relations: ['endereco', 'contatos'],
    });
  }

  async findOne(id: number): Promise<Crianca> {
    const crianca = await this.criancaRepository.findOne({
      where: { id },
      relations: ['endereco', 'contatos'],
    });

    if (!crianca) {
      throw new NotFoundException(`Criança com ID ${id} não encontrada`);
    }

    return crianca;
  }

  async update(id: number, updateCriancaDto: UpdateCriancaDto): Promise<Crianca> {
    const crianca = await this.findOne(id);

    if (updateCriancaDto.endereco) {
      await this.enderecoRepository.update(crianca.endereco.id, updateCriancaDto.endereco);
    }

    if (updateCriancaDto.contatos) {
      await this.contatosRepository.update(crianca.contatos.id, updateCriancaDto.contatos);
    }

    await this.criancaRepository.update(id, {
      nomeCompleto: updateCriancaDto.nomeCompleto,
      cpf: updateCriancaDto.cpf,
      sexo: updateCriancaDto.sexo,
      dataNascimento: updateCriancaDto.dataNascimento,
      nomeResponsavel: updateCriancaDto.nomeResponsavel,
      tipoResponsavel: updateCriancaDto.tipoResponsavel,
    });

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const crianca = await this.findOne(id);

    // Com cascade configurado, só precisamos remover a criança
    // Os endereços e contatos serão removidos automaticamente
    await this.criancaRepository.remove(crianca);
  }
}
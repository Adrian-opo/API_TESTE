import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Endereco } from './endereco.entity';
import { Contatos } from './contatos.entity';

@Entity('criancas')
export class Crianca {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único da criança' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Nome completo da criança', example: 'João da Silva' })
  nomeCompleto: string;

  @Column()
  @ApiProperty({ description: 'CPF da criança', example: '123.456.789-00' })
  cpf: string;

  @Column()
  @ApiProperty({ description: 'Sexo da criança', example: 'M' })
  sexo: string;

  @Column()
  @ApiProperty({ description: 'Data de nascimento', example: '2015-05-15' })
  dataNascimento: Date;

  @Column()
  @ApiProperty({ description: 'Nome do responsável', example: 'Maria da Silva' })
  nomeResponsavel: string;

  @Column()
  @ApiProperty({ description: 'Tipo do responsável', example: 'Mãe' })
  tipoResponsavel: string;

  @OneToOne(() => Endereco, { cascade: true, eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  @ApiProperty({ description: 'Endereço da criança', type: () => Endereco })
  endereco: Endereco;

  @OneToOne(() => Contatos, { cascade: true, eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  @ApiProperty({ description: 'Contatos da criança', type: () => Contatos })
  contatos: Contatos;
}
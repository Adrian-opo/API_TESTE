import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('enderecos')
export class Endereco {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único do endereço' })
  id: number;

  @Column()
  @ApiProperty({ description: 'CEP', example: '12345-678' })
  cep: string;

  @Column()
  @ApiProperty({ description: 'Logradouro', example: 'Rua das Flores' })
  logradouro: string;

  @Column()
  @ApiProperty({ description: 'Número', example: '123' })
  numero: string;

  @Column()
  @ApiProperty({ description: 'Bairro', example: 'Centro' })
  bairro: string;

  @Column()
  @ApiProperty({ description: 'Município', example: 'São Paulo' })
  municipio: string;

  @Column()
  @ApiProperty({ description: 'UF', example: 'SP' })
  uf: string;
}
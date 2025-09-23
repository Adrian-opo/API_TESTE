import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('contatos')
export class Contatos {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único dos contatos' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Email de contato', example: 'email@exemplo.com' })
  email: string;

  @Column('simple-array')
  @ApiProperty({ description: 'Lista de telefones', example: ['(11) 99999-9999'] })
  telefones: string[];
}
import { ApiProperty } from '@nestjs/swagger';
import { CreateEnderecoDto } from './create-endereco.dto';
import { CreateContatosDto } from './create-contatos.dto';

export class CreateCriancaDto {
  @ApiProperty({ description: 'Nome completo da criança', example: 'João da Silva' })
  nomeCompleto: string;

  @ApiProperty({ description: 'CPF da criança', example: '123.456.789-00' })
  cpf: string;

  @ApiProperty({ description: 'Sexo da criança', example: 'M' })
  sexo: string;

  @ApiProperty({ description: 'Data de nascimento', example: '2015-05-15T00:00:00.000Z' })
  dataNascimento: Date;

  @ApiProperty({ description: 'Nome do responsável', example: 'Maria da Silva' })
  nomeResponsavel: string;

  @ApiProperty({ description: 'Tipo do responsável', example: 'Mãe' })
  tipoResponsavel: string;

  @ApiProperty({ description: 'Endereço da criança', type: CreateEnderecoDto })
  endereco: CreateEnderecoDto;

  @ApiProperty({ description: 'Contatos da criança', type: CreateContatosDto })
  contatos: CreateContatosDto;
}
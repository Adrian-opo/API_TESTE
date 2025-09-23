import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoDto {
  @ApiProperty({ description: 'CEP', example: '12345-678' })
  cep: string;

  @ApiProperty({ description: 'Logradouro', example: 'Rua das Flores' })
  logradouro: string;

  @ApiProperty({ description: 'Número', example: '123' })
  numero: string;

  @ApiProperty({ description: 'Bairro', example: 'Centro' })
  bairro: string;

  @ApiProperty({ description: 'Município', example: 'São Paulo' })
  municipio: string;

  @ApiProperty({ description: 'UF', example: 'SP' })
  uf: string;
}
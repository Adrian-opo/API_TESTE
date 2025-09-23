import { ApiProperty } from '@nestjs/swagger';

export class CreateContatosDto {
  @ApiProperty({ description: 'Email de contato', example: 'email@exemplo.com' })
  email: string;

  @ApiProperty({ description: 'Lista de telefones', example: ['(11) 99999-9999'] })
  telefones: string[];
}
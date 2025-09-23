import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
  @ApiProperty({ description: 'Mensagem de resposta', example: 'Operação realizada com sucesso' })
  message: string;

  @ApiProperty({ description: 'Dados da resposta', required: false })
  data?: any;
}
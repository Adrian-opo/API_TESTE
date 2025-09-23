import { PartialType } from '@nestjs/swagger';
import { CreateCriancaDto } from './create-crianca.dto';

export class UpdateCriancaDto extends PartialType(CreateCriancaDto) {}
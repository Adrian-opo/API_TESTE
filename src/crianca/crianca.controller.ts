import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CriancaService } from './crianca.service';
import { CreateCriancaDto } from './dto/create-crianca.dto';
import { UpdateCriancaDto } from './dto/update-crianca.dto';
import { MessageResponseDto } from './dto/message-response.dto';
import { Crianca } from './entities/crianca.entity';

@ApiTags('criancas')
@Controller('criancas')
export class CriancaController {
  constructor(private readonly criancaService: CriancaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova criança' })
  @ApiResponse({ status: 201, description: 'Criança criada com sucesso.', type: MessageResponseDto })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() createCriancaDto: CreateCriancaDto): Promise<MessageResponseDto> {
    const crianca = await this.criancaService.create(createCriancaDto);
    return {
      message: 'Criança criada com sucesso!',
      data: crianca
    };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as crianças' })
  @ApiResponse({ status: 200, description: 'Lista de crianças retornada com sucesso.', type: [Crianca] })
  findAll(): Promise<Crianca[]> {
    return this.criancaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma criança por ID' })
  @ApiParam({ name: 'id', description: 'ID da criança' })
  @ApiResponse({ status: 200, description: 'Criança encontrada.', type: Crianca })
  @ApiResponse({ status: 404, description: 'Criança não encontrada.' })
  findOne(@Param('id') id: string): Promise<Crianca> {
    return this.criancaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma criança' })
  @ApiParam({ name: 'id', description: 'ID da criança' })
  @ApiResponse({ status: 200, description: 'Criança atualizada com sucesso.', type: MessageResponseDto })
  @ApiResponse({ status: 404, description: 'Criança não encontrada.' })
  async update(@Param('id') id: string, @Body() updateCriancaDto: UpdateCriancaDto): Promise<MessageResponseDto> {
    const crianca = await this.criancaService.update(+id, updateCriancaDto);
    return {
      message: 'Criança atualizada com sucesso!',
      data: crianca
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma criança' })
  @ApiParam({ name: 'id', description: 'ID da criança' })
  @ApiResponse({ status: 200, description: 'Criança deletada com sucesso.', type: MessageResponseDto })
  @ApiResponse({ status: 404, description: 'Criança não encontrada.' })
  async remove(@Param('id') id: string): Promise<MessageResponseDto> {
    await this.criancaService.remove(+id);
    return {
      message: 'Criança excluída com sucesso!'
    };
  }
}
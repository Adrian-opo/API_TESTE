import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Crianças')
    .setDescription('API para cadastro e gerenciamento de crianças')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configuração de CORS
  app.enableCors();

  await app.listen(3000);
  console.log('Aplicação rodando na porta 3000');
  console.log('Swagger disponível em: http://localhost:3000/api');
}
bootstrap();
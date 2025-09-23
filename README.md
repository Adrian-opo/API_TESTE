# API de Crianças

Esta é uma API desenvolvida com NestJS, PostgreSQL e TypeORM para cadastro e gerenciamento de crianças.

## Tecnologias Utilizadas

- **NestJS** - Framework Node.js para construção de aplicações server-side
- **TypeORM** - ORM para TypeScript e JavaScript
- **PostgreSQL** - Banco de dados relacional
- **Docker & Docker Compose** - Containerização da aplicação
- **Swagger** - Documentação da API

## Estrutura do Projeto

```
src/
├── crianca/
│   ├── dto/
│   │   ├── create-crianca.dto.ts
│   │   ├── update-crianca.dto.ts
│   │   ├── create-endereco.dto.ts
│   │   └── create-contatos.dto.ts
│   ├── entities/
│   │   ├── crianca.entity.ts
│   │   ├── endereco.entity.ts
│   │   └── contatos.entity.ts
│   ├── crianca.controller.ts
│   ├── crianca.service.ts
│   └── crianca.module.ts
├── app.module.ts
└── main.ts
```

## Como Executar

### Pré-requisitos
- Docker
- Docker Compose

### Executando com Docker

1. Clone o repositório
2. Execute o comando para subir os containers:

```bash
docker-compose up -d
```

Isso irá:
- Criar um container PostgreSQL na porta 5432
- Criar um container da aplicação NestJS na porta 3000
- Configurar automaticamente o banco de dados

### Acessando a API

- **API**: http://localhost:3000
- **Documentação Swagger**: http://localhost:3000/swagger

## Endpoints da API

### Crianças

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/criancas` | Listar todas as crianças |
| GET | `/criancas/:id` | Buscar criança por ID |
| POST | `/criancas` | Criar nova criança |
| PATCH | `/criancas/:id` | Atualizar criança |
| DELETE | `/criancas/:id` | Deletar criança |

## Exemplo de Payload

```json
{
  "nomeCompleto": "João da Silva",
  "cpf": "123.456.789-00",
  "sexo": "M",
  "dataNascimento": "2015-05-15T00:00:00.000Z",
  "nomeResponsavel": "Maria da Silva",
  "tipoResponsavel": "Mãe",
  "endereco": {
    "cep": "12345-678",
    "logradouro": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "municipio": "São Paulo",
    "uf": "SP"
  },
  "contatos": {
    "email": "maria@email.com",
    "telefones": ["(11) 99999-9999"]
  }
}
```

## Comandos Úteis

### Para desenvolvimento local (sem Docker)

1. Instalar dependências:
```bash
npm install
```

2. Executar em modo desenvolvimento:
```bash
npm run start:dev
```

3. Build da aplicação:
```bash
npm run build
```

4. Executar em produção:
```bash
npm run start:prod
```

### Docker

- Parar containers: `docker-compose down`
- Visualizar logs: `docker-compose logs`
- Reconstruir containers: `docker-compose up --build`

## Observações

- Esta API foi desenvolvida para fins de teste, portanto não possui validações rigorosas
- O banco de dados está configurado com `synchronize: true` para desenvolvimento
- Em produção, recomenda-se usar migrations do TypeORM
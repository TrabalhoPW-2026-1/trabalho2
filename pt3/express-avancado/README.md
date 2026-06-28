# Express Avançado

App Express 5 + TypeScript + Handlebars + Prisma (MariaDB). CRUD de cursos (Major) com autenticação de usuários e sessões.

## Pré-requisitos

- Node.js 20+
- Docker + Docker Compose

## 1. Instalar dependências

```bash
npm i
```

## 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz. Todas têm valores padrão (ver `src/utils/validateEnv.ts`), mas o recomendado:

```env
DATABASE_URL="mysql://root:senhasegura@127.0.0.1:3307/game"
SECRET="troque-por-uma-string-secreta"
PORT=3000
NODE_ENV=development
LOGGER_TYPE=simple
LOGGER_OUTPUT=logs/app.log
BCRYPT_ROUNDS=10
```

## 3. Gerar o Prisma Client

```bash
npx prisma generate
```

> Lê `prisma/schema.prisma` e gera o client tipado em `generated/prisma`. Rode após cada mudança no schema.

## 4. Rodar as migrations

```bash
npx prisma migrate dev
```

> Cria as tabelas `majors` e `users` no banco. Sobe o banco via Docker se necessário.

## 5. Iniciar a aplicação

```bash
npm start
```

> `npm start` roda `docker compose up -d` (sobe MariaDB + phpMyAdmin) e inicia o servidor com `nodemon src/index.ts`.

App disponível em `http://localhost:3000`.

## Serviços Docker

| Serviço     | Porta local | Usuário | Senha       | Banco |
|-------------|-------------|---------|-------------|-------|
| MariaDB     | 3307        | root    | senhasegura | game  |
| phpMyAdmin  | 8081        | root    | senhasegura | —     |

## Rotas

### Auth
| Método   | Rota     | Descrição              |
|----------|----------|------------------------|
| GET/POST | /signup  | Cadastro de conta      |
| GET/POST | /login   | Autenticar             |
| POST     | /logout  | Encerrar sessão        |

### Major (cursos)
| Método   | Rota                | Descrição              |
|----------|---------------------|------------------------|
| GET      | /major              | Listar cursos          |
| GET/POST | /major/create       | Criar curso            |
| GET      | /major/read/:id     | Detalhe do curso       |
| GET/POST | /major/update/:id   | Editar curso           |
| POST     | /major/delete/:id   | Remover curso          |

### Game
| Método | Rota        | Descrição |
|--------|-------------|-----------|
| GET    | /game/play  | Jogo      |

### Demais (exemplos)
| Método | Rota          | Descrição               |
|--------|---------------|-------------------------|
| GET    | /             | Home                    |
| GET    | /about        | Sobre                   |
| GET    | /usr/:name    | Usuário                 |
| GET    | /search       | Busca                   |
| GET    | /lorem/:n     | Texto lorem ipsum       |
| GET    | /hb1..hb4     | Exemplos Handlebars     |
| GET    | /json         | Resposta JSON           |
| GET    | /download     | Download de arquivo     |
| GET    | /cookie       | Teste de cookie         |

## Estrutura

```
src/
  index.ts            # bootstrap do Express
  router/router.ts    # rotas
  controllers/        # main, major, auth, game
  services/           # major, auth (acesso ao Prisma)
  middlewares/        # logger
  utils/              # validateEnv, prismaClient
  types/              # tipos e session.d.ts
  views/              # handlebars (layouts, helpers, páginas)
prisma/schema.prisma  # modelos Major e User
generated/prisma/     # Prisma Client gerado
```

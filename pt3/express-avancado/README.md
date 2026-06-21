# Express Avançado

App Express + Handlebars + Prisma (MariaDB). CRUD de cursos (Major) com autenticação de usuários.

## Pré-requisitos

- Node.js 20+
- Docker + Docker Compose

## 1. Subir o banco com Docker

```bash
docker compose up -d
```

Serviços:
| Serviço     | Porta local | Usuário | Senha       | Banco |
|-------------|-------------|---------|-------------|-------|
| MariaDB     | 3307        | root    | senhasegura | game  |
| phpMyAdmin  | 8081        | root    | senhasegura | —     |

## 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz (já existe um exemplo):

```env
DATABASE_URL="mysql://root:senhasegura@127.0.0.1:3307/game"
SECRET="troque-por-uma-string-secreta"
PORT=3000
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Rodar as migrations

```bash
npx prisma migrate dev
```

> Isso cria as tabelas `majors` e `users` no banco.

## 5. Iniciar a aplicação

```bash
npm start
```

App disponível em `http://localhost:3000`.

## Rotas principais

| Método | Rota            | Descrição              |
|--------|-----------------|------------------------|
| GET    | /signup         | Formulário de cadastro |
| POST   | /signup         | Criar conta            |
| GET    | /login          | Formulário de login    |
| POST   | /login          | Autenticar             |
| GET    | /logout         | Encerrar sessão        |
| GET    | /major          | Listar cursos          |
| GET    | /major/create   | Formulário novo curso  |
| POST   | /major/create   | Criar curso            |

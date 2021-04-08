# Typescript Clean API  
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen)](http://standardjs.com/)
[![js-standard-style](https://img.shields.io/badge/license-MIT-green)]()

## Introdução

Esta é uma API desenvolvida com a utilização de clean architecture e princípios SOLID.
O objetivo é ser simples, porém feita da maneira correta.

## Tecnologias utilizadas

- Node
- Typescript
- Express
- Sequelize
- Knex.js
- ESLint (Standard Javascript Style)
- Jest
- Docker

## Setup

**Requisitos**: node, npm e docker-compose

Dentro da pasta do projeto podemos usar os seguintes comandos:

`$ docker-compose up` - Inicia o banco de dados  
`$ npm install` - Instala as dependências do projeto  
`$ npm run test-connection` - Verifica se a conexão com o bando de dados funcionou  
`$ npm run migrate` - Realiza as migrations (cria as tabelas no banco)  
`$ npm run dev` - Inicia o projeto  
`$ npm test` - Roda todos os testes

## Rotas

**POST** - `/users`
*Cria um novo usuário:*
`{
  "name": string,
  "email": string,
  "password": string
}`

**POST** - `/posts`
*Cria um novo post:*
`{
  "title": string,
  "content": string,
  "user_id": int
}`

Visualizar a documentação pelo Swagger - `/api-docs`

## Etc

Esta API foi desenvolvida com o único intuito de praticar e adquirir novos conhecimentos, e foi inspirada neste [repositório](https://github.com/rmanguinho/clean-ts-api).

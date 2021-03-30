# Typescript Clean API

## Introdução

Esta é uma API desenvolvida com a utilização de clean architecture e princípios SOLID.
O objetivo é ser simples, porém feita da maneira correta.

## Tecnologias utilizadas

- Node
- Typescript
- Express
- Sequelize
- ESLint (Standard Javascript Style)
- Docker

## Setup

**Requisitos**: node, npm e docker-compose

Dentro da pasta do projeto precisamos usar os seguintes comandos:

`$ docker-compose up` - Cria o banco de dados  
`$ npm install` - Instala as dependências do projeto  
`$ npm run dev` - Inicia o projeto  

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

## Etc

Esta API foi desenvolvida com o único intuito de praticar e adquirir novos conhecimentos, e foi inspirada neste [repositório](https://github.com/rmanguinho/clean-ts-api).

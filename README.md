# Typescript Clean API

### Introdução

Esta é uma API desenvolvida com a utilização de clean architecture e princípios SOLID.
O objetivo é ser simples, porém ser desenvolvida da maneira correta.

## Tecnologias utilizadas

- Node
- Typescript
- Express
- Sequelize
- ESLint (Standard Javascript Style)

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
  "user_id": number
}`

## Etc

Esta API foi desenvolvida com o único intuito de praticar e adquirir novos conhecimentos, e foi inspirada neste [repositório](https://github.com/rmanguinho/clean-ts-api)

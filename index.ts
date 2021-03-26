import express from 'express'
// import PostSequelizeRepository from './app/infra/database/mysql/sequelize/repositories/post-sequelize-repository'

const app = express()
const PORT = 8000
// PostSequelizeRepository.edit(1, {
//     id: 1,
//     title: 'AAAAA',
//     content: 'Teste',
//     user: { id: 1, name: 'Matheus', email: 'teste', password: '123' }
// })
app.get('/', (req, res) => res.send('Express + TypeScript Server'))
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`)
})

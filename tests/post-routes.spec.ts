import app from '@app/main/config/app'
import request from 'supertest'
import faker from 'faker'
import { UserSequelizeRepository } from '@app/infra/database/mysql/sequelize/repositories/user-sequelize-repository'

const createFakeUser = async () => {
    const usersRepository = new UserSequelizeRepository()

    const user = await usersRepository.create({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: '123456'
    })

    return user
}

describe('Post routes', () => {
    let user: any

    beforeAll(async () => {
        user = await createFakeUser()
    })

    it('Should return 201 on creating post', async () => {
        await request(app)
            .post('/posts')
            .send({
                title: 'Post Teste',
                content: 'Conteúdo teste',
                user_id: user.id
            })
            .expect(201)
    })

    it('Should return 500 on creating post with no data', async () => {
        await request(app)
            .post('/posts')
            .send({})
            .expect(500)
    })
})

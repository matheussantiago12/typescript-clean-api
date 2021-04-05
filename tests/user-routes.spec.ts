import app from '@app/main/config/app'
import request from 'supertest'
import faker from 'faker'

describe('User routes', () => {
    const email = faker.internet.email()

    it('Should return 201 on creating user with unique email', async () => {
        await request(app)
            .post('/users')
            .send({
                name: 'Usuário Teste',
                email,
                password: '123456'
            })
            .expect(201)
    })

    it('Should return 500 on creating user with already used email', async () => {
        await request(app)
            .post('/users')
            .send({
                name: 'Usuário Teste',
                email,
                password: '123456'
            })
            .expect(500)
    })

    it('Should return 500 on creating user with no data', async () => {
        await request(app)
            .post('/users')
            .send({})
            .expect(500)
    })
})

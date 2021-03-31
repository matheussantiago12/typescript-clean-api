import { User } from '@app/domain/entities/user'
import { CreateUserRepository } from '@app/data/protocols/database/user/create-user-repository'
import { CreateUser, CreateUserParams } from '@app/domain/usecases/user/create-user'

export class CreateUserDb implements CreateUser {
    constructor (
        private readonly createUserRepository: CreateUserRepository
    ) {}

    async create (data: CreateUserParams): Promise<User> {
        const user = await this.createUserRepository.create(data)

        return user
    }
}

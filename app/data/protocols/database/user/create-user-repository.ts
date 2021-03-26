import User from 'App/domain/entities/user'
import { CreateUserParams } from 'App/domain/usecases/user/create-user'

interface CreateUserRepository {
    create: (data: CreateUserParams) => Promise<User>
}

export { CreateUserRepository }

import User from '@app/domain/entities/user'
import { CreateUserParams } from '@app/domain/usecases/user/create-user'

interface CreateUserRepository {
    create: (data: CreateUserParams) => Promise<User>
}

export { CreateUserRepository, CreateUserParams }

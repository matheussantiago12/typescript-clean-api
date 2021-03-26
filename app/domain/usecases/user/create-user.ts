import User from 'App/domain/entities/user'

type CreateUserParams = Omit<User, 'id'>

interface CreateUser {
    create: (data: CreateUserParams) => Promise<User>
}

export { CreateUserParams, CreateUser }

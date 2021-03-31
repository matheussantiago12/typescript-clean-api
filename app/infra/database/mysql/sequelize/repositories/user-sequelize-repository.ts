import { CreateUserRepository, CreateUserParams } from '@app/data/protocols/database/user/create-user-repository'
import UserModel from '@app/infra/database/mysql/sequelize/models/user-sequelize-model'
import { User } from '@app/domain/entities/user'

export class UserSequelizeRepository implements CreateUserRepository {
    async create (data: CreateUserParams): Promise<User> {
        const response = await UserModel.create(data)

        const user = {
            id: response.getDataValue('id'),
            name: response.getDataValue('name'),
            email: response.getDataValue('email'),
            password: response.getDataValue('password')
        }

        return user
    }
}

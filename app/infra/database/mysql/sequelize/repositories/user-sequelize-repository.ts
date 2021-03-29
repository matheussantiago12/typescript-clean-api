import { CreateUserRepository, CreateUserParams } from '../../../../../data/protocols/database/user/create-user-repository'
import User from '../models/user-sequelize-model'
import UserEntity from '../../../../../domain/entities/user'
class UserSequelizeRepository implements CreateUserRepository {
    async create (data: CreateUserParams): Promise<UserEntity> {
        try {
            const response = await User.create(data)

            const user = {
                id: response.getDataValue('id'),
                name: response.getDataValue('name'),
                email: response.getDataValue('email'),
                password: response.getDataValue('password')
            }

            return user
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default { UserSequelizeRepository }

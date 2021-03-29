import { CreateUser } from '@app/domain/usecases/user/create-user'
import { CreateUserDb } from '@app/data/usecases/user/create-user-db'
import { UserSequelizeRepository } from '@app/infra/database/mysql/sequelize/repositories/user-sequelize-repository'

export const makeCreateUser = (): CreateUser => {
    const userSequelizeRepository = new UserSequelizeRepository()

    return new CreateUserDb(userSequelizeRepository)
}

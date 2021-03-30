import { Controller } from '@app/presentation/protocols/controller'
import { CreateUserController } from '@app/presentation/controllers/user/create-user-controller'
import { makeCreateUser } from '@app/main/factories/usecases/create-user-factory'

export const makeCreateUserController = (): Controller => {
    return new CreateUserController(makeCreateUser())
}

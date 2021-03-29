import { CreateUser, CreateUserParams } from '@app/domain/usecases/user/create-user'
import { Controller } from '@app/presentation/protocols/controller'
import { HttpResponse } from '@app/presentation/protocols/http'
import { created } from '@app/presentation/helpers/http-helper'

export class CreateUserController implements Controller {
    constructor (
        private readonly createUser: CreateUser
    ) {}

    async handle (request: CreateUserParams): Promise<HttpResponse> {
        try {
            const data = await this.createUser.create(request)

            return created(data)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

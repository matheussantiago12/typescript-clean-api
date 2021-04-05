import { CreatePost, CreatePostParams } from '@app/domain/usecases/post/create-post'
import { Controller } from '@app/presentation/protocols/controller'
import { HttpResponse } from '@app/presentation/protocols/http'
import { created } from '@app/presentation/helpers/http-helper'

export class CreatePostController implements Controller {
    constructor (
        private readonly createPost: CreatePost
    ) {}

    async handle (request: CreatePostParams): Promise<HttpResponse> {
        const data = await this.createPost.create(request)

        return created(data)
    }
}

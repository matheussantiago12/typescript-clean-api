import { Controller } from '@app/presentation/protocols/controller'
import { CreatePostController } from '@app/presentation/controllers/post/create-post-controller'
import { makeCreatePost } from '@app/main/factories/usecases/create-post-factory'

export const makeCreatePostController = (): Controller => {
    const controller = new CreatePostController(makeCreatePost())

    return controller
}

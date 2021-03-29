import { CreatePost } from '@app/domain/usecases/post/create-post'
import { CreatePostDb } from '@app/data/usecases/post/create-post-db'
import { PostSequelizeRepository } from '@app/infra/database/mysql/sequelize/repositories/post-sequelize-repository'

export const makeCreatePost = (): CreatePost => {
    const postSequelizeRepository = new PostSequelizeRepository()

    return new CreatePostDb(postSequelizeRepository)
}

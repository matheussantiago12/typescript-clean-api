import PostModel from '@app/infra/database/mysql/sequelize/models/post-sequelize-model'
import { Post } from '@app/domain/entities/post'
import { CreatePostRepository, CreatePostParams } from '@app/data/protocols/database/post/create-post-repository'

export class PostSequelizeRepository implements CreatePostRepository {
    async create (data: CreatePostParams): Promise<Post> {
        const response = await PostModel.create(data)

        const post = {
            id: response.getDataValue('id'),
            user: response.getDataValue('user'),
            title: response.getDataValue('title'),
            content: response.getDataValue('content')
        }

        return post
    }
}

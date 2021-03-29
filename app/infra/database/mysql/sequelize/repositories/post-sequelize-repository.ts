import PostModel from '@app/infra/database/mysql/sequelize/models/post-sequelize-model'
import { Post } from '@app/domain/entities/post'
import { CreatePostRepository, CreatePostParams } from '@app/data/protocols/database/post/create-post-repository'
import { EditPostRepository, EditPostParams } from '@app/data/protocols/database/post/edit-post-repository'

export class PostSequelizeRepository implements CreatePostRepository, EditPostRepository {
    async create (data: CreatePostParams): Promise<Post> {
        try {
            const response = await PostModel.create(data)

            const post = {
                id: response.getDataValue('id'),
                user: response.getDataValue('user'),
                title: response.getDataValue('title'),
                content: response.getDataValue('content')
            }

            return post
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    static async edit (id: number, data: EditPostParams): Promise<Post> {
        try {
            await PostModel.update(data, { where: { id } })

            const response = await PostModel.findByPk(id)

            if (!response) throw new Error('Id not found')

            const post = {
                id: response.getDataValue('id'),
                user: response.getDataValue('user'),
                title: response.getDataValue('title'),
                content: response.getDataValue('content')
            }

            return post
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

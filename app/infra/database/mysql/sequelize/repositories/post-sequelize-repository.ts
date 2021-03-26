import Post from '../models/post-sequelize-model'
import PostEntity from '../../../../../domain/entities/post'
import { CreatePostRepository, CreatePostParams } from '../../../../../data/protocols/database/post/create-post-repository'
import { EditPostRepository, EditPostParams } from '../../../../../data/protocols/database/post/edit-post-repository'

class PostSequelizeRepository implements CreatePostRepository, EditPostRepository {
    async create (data: CreatePostParams): Promise<PostEntity> {
        try {
            const response = await Post.create(data)

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

    static async edit (id: number, data: EditPostParams): Promise<PostEntity> {
        try {
            await Post.update(data, { where: { id } })

            const response = await Post.findByPk(id)

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

export default PostSequelizeRepository

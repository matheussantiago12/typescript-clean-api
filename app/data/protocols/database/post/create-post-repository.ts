import Post from 'App/domain/entities/post'
import { CreatePostParams } from 'App/domain/usecases/post/create-post'

interface CreatePostRepository {
    create: (data: CreatePostParams) => Promise<Post>
}

export { CreatePostRepository, CreatePostParams }

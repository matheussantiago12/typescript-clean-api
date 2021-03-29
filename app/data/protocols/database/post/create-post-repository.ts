import { Post } from '@app/domain/entities/post'
import { CreatePostParams } from '@app/domain/usecases/post/create-post'

interface CreatePostRepository {
    create: (data: CreatePostParams) => Promise<Post>
}

export { CreatePostRepository, CreatePostParams }

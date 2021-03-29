import { Post } from '@app/domain/entities/post'

type CreatePostParams = Omit<Post, 'id'>

interface CreatePost {
    create: (data: CreatePostParams) => Promise<Post>
}

export { CreatePostParams, CreatePost }

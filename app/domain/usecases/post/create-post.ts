import Post from 'App/domain/entities/post'

type CreatePostParams = Omit<Post, 'id'>

interface CreatePost {
    create: (data: CreatePostParams) => Promise<Post>
}

export { CreatePostParams, CreatePost }

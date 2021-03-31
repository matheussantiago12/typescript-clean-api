import { Post } from '@app/domain/entities/post'
import { CreatePostRepository } from '@app/data/protocols/database/post/create-post-repository'
import { CreatePost, CreatePostParams } from '@app/domain/usecases/post/create-post'

export class CreatePostDb implements CreatePost {
    constructor (
        private readonly createPostRepository: CreatePostRepository
    ) {}

    async create (data: CreatePostParams): Promise<Post> {
        const post = await this.createPostRepository.create(data)

        return post
    }
}

import Post from 'App/domain/entities/post'
import { EditPostParams } from 'App/domain/usecases/post/edit-post'

interface EditPostRepository {
    create: (data: EditPostParams) => Promise<Post>
}

export { EditPostRepository, EditPostParams }

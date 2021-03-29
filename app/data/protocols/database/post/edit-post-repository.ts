import Post from '@app/domain/entities/post'
import { EditPostParams } from '@app/domain/usecases/post/edit-post'

interface EditPostRepository {
    create: (data: EditPostParams) => Promise<Post>
}

export { EditPostRepository, EditPostParams }

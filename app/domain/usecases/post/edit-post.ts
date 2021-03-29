import Post from '@app/domain/entities/post'

type EditPostParams = Post

interface EditPost {
    edit: (id: number, data: EditPostParams) => Promise<Post>
}

export { EditPostParams, EditPost }

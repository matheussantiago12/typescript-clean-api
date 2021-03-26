import Post from 'App/domain/entities/post'

type EditPostParams = Post

interface EditPost {
    edit: (id: number, data: EditPostParams) => Promise<Post>
}

export { EditPostParams, EditPost }

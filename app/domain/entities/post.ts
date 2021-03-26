import User from 'App/domain/entities/user'

interface Post {
    id: number
    user: User
    title: string
    content: string
}

export default Post

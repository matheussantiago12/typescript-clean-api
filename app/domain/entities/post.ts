import User from '@app/domain/entities/user'

interface Post {
    id: number
    user: User
    title: string
    content: string
}

export default Post

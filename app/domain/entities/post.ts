import { User } from '@app/domain/entities/user'

export interface Post {
    id: number
    user: User
    title: string
    content: string
}

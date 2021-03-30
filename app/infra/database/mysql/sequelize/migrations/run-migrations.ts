import { CreateUser } from '@app/infra/database/mysql/sequelize/migrations/300320210925-create-user'
import { CreatePost } from '@app/infra/database/mysql/sequelize/migrations/300320210929-create-post'

// Run migrations

CreateUser.up()
CreatePost.up()

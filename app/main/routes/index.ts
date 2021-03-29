import { Router } from 'express'
import { routeAdapter } from '@app/main/adapters/express/route-adapter'
import { makeCreateUserController } from '@app/main/factories/controller/create-user-controller-factory'
import { makeCreatePostController } from '@app/main/factories/controller/create-post-controller-factory'

const routes = Router()

/**
 * Users
 */
routes.post('/users', routeAdapter(makeCreateUserController()))

/**
 * Posts
 */
routes.post('/posts', routeAdapter(makeCreatePostController()))

export default routes

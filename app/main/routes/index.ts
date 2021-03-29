import { Router } from 'express'
import { routeAdapter } from '@app/main/adapters/express/route-adapter'
import { makeCreateUserController } from '@app/main/factories/controller/create-user-controller-factory'

const routes = Router()

routes.post('/users', routeAdapter(makeCreateUserController()))

export default routes

import express from 'express'
import routes from '@app/main/routes'
import swaggerUi from 'swagger-ui-express'
// @ts-ignore
import swaggerJson from '@/swagger.json'

const app = express()

app.get('/', (req, res) => res.send('Typescript clean API'))
app.use(express.json())
app.use(routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson))

export default app

import express from 'express'
import routes from '@app/main/routes'

const app = express()

app.get('/', (req, res) => res.send('Typescript clean API'))
app.use(express.json())
app.use(routes)

export default app

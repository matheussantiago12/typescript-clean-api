import express from 'express'
import routes from '@app/main/routes'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('Typescript clean API'))
app.use(express.json())
app.use(routes)
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`)
})

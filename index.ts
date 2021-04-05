import app from '@app/main/config/app'

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`)
})

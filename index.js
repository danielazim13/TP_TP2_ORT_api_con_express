import express from 'express'
import charactersRoutes from './routes/characters.routes.js'

const PORT = 8013
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

app.use("/", charactersRoutes)

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
app.on("Error", (error)=> console.log(`Server error: ${error}`))


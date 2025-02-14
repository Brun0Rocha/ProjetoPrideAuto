const express = require("express")
const cors = require("cors")
const routeAnuncios = require("./routes/anuncios")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

const PORT = 5000

app.use('/anuncios', routeAnuncios)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

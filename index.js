const express = require(`express`)
const app = express()
require(`./config/mongo`)

// Example if routes is an Express Router
const routes = require('./config/routes')
require(`dotenv`).config()

app.set(`view engine`, `ejs`)

app.use(express.urlencoded({extended: true}))
app.use(express.static(`public`))

app.use(routes)
const port = process.env.PORT
app.listen(port, console.log(`app is on ${port}`))


//
const  mongoose = require ("mongoose")
require(`dotenv`).config()
mongoose.connect(process.env.URI_DB)
.then (() => console.log("Db is conneted "))
.catch (err => console.log(err))


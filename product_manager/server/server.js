//import dependencies
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

//configure mongoose
require("./config/mongoose.config")

//configure express
app.use(cors()) // allows react and express to talk
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//attach routes
const productRoutes = require("./routes/product.routes")
productRoutes(app)

app.listen(port, () => console.log(`Server is up and running on port: ${port}`))
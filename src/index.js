import express from "express"
import morgan from "morgan"
import ChilexpressRouter from "./routers/chilexpress.router.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use("/chilexpress", ChilexpressRouter )


app.listen(3000)
console.log("servidor online", 3000)
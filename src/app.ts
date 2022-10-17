import "reflect-metadata"
import express from "express"
import routerUser from "./routes/users.route"
import routerLogin from "./routes/login.route"

const app = express()

app.use(express.json())
app.use("/users", routerUser)
app.use("/login", routerLogin)

export default app
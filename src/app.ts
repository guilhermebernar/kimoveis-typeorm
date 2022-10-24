import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleErrorMiddleware from './middlewares/handleError.middleware'
import routerUser from "./routes/users.route"
import routerLogin from "./routes/login.route"

const app = express()

app.use(express.json())
app.use("/users", routerUser)
app.use("/login", routerLogin)

app.use(handleErrorMiddleware)
// app.listen(3000, () => {
//     console.log("listening on http://localhost:3000")
// })

export default app
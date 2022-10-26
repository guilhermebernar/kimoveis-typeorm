import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleErrorMiddleware from './middlewares/handleError.middleware'
import routerUser from "./routes/users.route"
import routerLogin from "./routes/login.route"
import routerCategories from "./routes/categories.route"
import routerProperties from "./routes/properties.route"
import routerSchedules from "./routes/schedules.route"

const app = express()

app.use(express.json())
app.use("/users", routerUser)
app.use("/login", routerLogin)
app.use("/categories", routerCategories)
app.use("/properties", routerProperties)
app.use("/schedules", routerSchedules)

app.use(handleErrorMiddleware)

export default app
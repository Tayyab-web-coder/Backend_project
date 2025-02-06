import express, { urlencoded } from 'express'
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({
    path: '/env'
})
const app = express()
app.use(cors({
    origin: process.env.ORIGIN_URL,
    credentials: true
}))

app.use(express.json({ limit: '16kb' }))
app.use(urlencoded({ limit: "16kb" }))
app.use(express.static('public'))
app.use(cookieParser())
export default app
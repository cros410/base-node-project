import express from 'express'
import { urlencoded, json } from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(helmet())

app.get('/ping', (req, res) => res.send({ message: 'pong' }))

export default app

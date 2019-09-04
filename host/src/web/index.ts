import express from 'express'

import csrfRouter from './csrf'
import xssRouter from './xss'
import config from './config'
import { logGet } from '../utils/log'

const hostname = 'localhost'

export function start(port: number) {
  const app = express()

  config(app)

  app.use('/xss', xssRouter)
  app.use('/csrf', csrfRouter(hostname, port))

  app.get('/', (req, res) => {
    logGet('/', req)
    const name = req.cookies.name
    res.render('index', { name })
  })

  console.log(`- listening on port ${port} `)
  app.listen(port)
}
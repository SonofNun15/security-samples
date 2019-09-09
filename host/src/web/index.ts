import express from 'express'
import https from 'https'

import { getKey, getCert } from '../auth/ssl'

import csrfRouter from './csrf'
import xssRouter from './xss'
import config from './config'
import { logGet } from '../utils/log'
import auth from '../auth'

export function start(port: number) {
  const serverOptions = {
    key: getKey(),
    cert: getCert(),
  }

  const app = express()

  config(app)

  app.use('/xss', xssRouter)
  app.use('/csrf', csrfRouter)

  app.get('/', (req, res) => {
    logGet('/', req)
    const name = req.cookies.name
    res.render('index', { name })
  })

  console.log(`- listening on port ${port} `)
  app.listen(2999)
  https.createServer(serverOptions, app).listen(port)
}
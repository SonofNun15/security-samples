import express from 'express'
import * as http from 'http'
import config from './config'
import { enable as enableSockets, sendLog } from '../comm/sockets'

export function start(port: number) {
  const app = express()
  const server = http.createServer(app)

  config(app)
  enableSockets(server)

  app.get('/', (_req, res) => {
    res.render('index')
  })

  app.get('/test', (_req, res) => {
    res.send('hi there')
    sendLog('GET => /test')
  })

  console.log(`- listening on port ${port} `)
  server.listen(port)
}
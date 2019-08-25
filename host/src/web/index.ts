import express from 'express'
import * as http from 'http'
import config from './config'
import { enable as enableSockets, sendLog } from '../comm/sockets'

export function start(port: number) {
  const app = express()
  const server = http.createServer(app)

  config(app)
  enableSockets(server)

  app.get('/', (req, res) => {
    debugger;
    const name = req.cookies.name
    sendLog('GET => /', `Cookies: ${JSON.stringify(req.cookies)}`)
    res.render('index', { name })
  })

  app.post('/cookie', (req, res) => {
    const name = req.body.name
    sendLog(`POST => /cookie: ${JSON.stringify(req.body)}`)
    res.cookie('name', name)
    res.sendStatus(204)
  })

  app.get('/hello', (req, res) => {
    sendLog('GET => /hello', `Cookies: ${JSON.stringify(req.cookies)}`)
    res.send(':wave:')
  })

  app.post('/poke', (req, res) => {
    sendLog(`POST => /poke: ${JSON.stringify(req.body)}`,
            `Cookies: ${JSON.stringify(req.cookies)}`)
    res.render('poke')
  })

  app.get('/test', (_req, res) => {
    res.send('hi there')
    sendLog('GET => /test')
  })

  console.log(`- listening on port ${port} `)
  server.listen(port)
}
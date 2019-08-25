import express from 'express'
import config from './config'

export function start(port: number) {
  const app = express()

  config(app)

  app.get('/', (_req, res) => {
    res.render('index')
  })

  app.get('/obvious', (_req, res) => {
    res.render('obvious')
  })

  app.get('/iframe', (_req, res) => {
    res.render('iframe')
  })

  app.get('/get', (_req, res) => {
    res.render('get')
  })

  app.get('/test', (_req, res) => {
    res.send('hi there')
  })

  console.log(`- listening on port ${port} `)
  app.listen(port)
}
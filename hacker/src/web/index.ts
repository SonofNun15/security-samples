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

  app.get('/steal', (_req, res) => {
    res.render('steal')
  })

  console.log(`- listening on port ${port} `)
  app.listen(port)
}
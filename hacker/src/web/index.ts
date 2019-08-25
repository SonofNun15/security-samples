import express from 'express'
import config from './config'

export function start(port: number) {
  const app = express()

  config(app)

  app.get('/', (_req, res) => {
    res.render('index')
  })

  app.get('/iframe', (_req, res) => {
    res.render('index2')
  })

  app.get('/test', (_req, res) => {
    res.send('hi there')
  })

  console.log(`- listening on port ${port} `)
  app.listen(port)
}
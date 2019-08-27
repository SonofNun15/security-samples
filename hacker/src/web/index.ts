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

  app.get('/phishing', (_req, res) => {
    res.render('phishing')
  })

  app.get('/search-link', (_req, res) => {
    res.render('search-link')
  })

  app.post('/login', (req, res) => {
    console.log('STEALING username and password from user, can now impersonate!')
    console.log(`username: ${req.body.username}`)
    console.log(`password: ${req.body.password}`)
    res.redirect('http://localhost:3000/csrf/login')
  })

  console.log(`- listening on port ${port} `)
  app.listen(port)
}
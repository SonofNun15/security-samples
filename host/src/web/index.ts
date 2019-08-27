import express from 'express'
import * as http from 'http'
import config from './config'
import { sendLog, logGet, logPost } from '../utils/log'
import auth from '../auth'

export function start(port: number) {
  const app = express()
  const server = http.createServer(app)

  config(app)

  app.get('/', (req, res) => {
    logGet('/', req)
    const name = req.cookies.name
    res.render('index', { name })
  })

  app.get('/cookie', (req, res) => {
    logGet('/cookie', req)
    const name = req.cookies.name
    res.render('cookie', { name })
  })

  app.post('/cookie', (req, res) => {
    logPost('/cookie', req)
    const name = req.body.name
    const httpOnly = !!req.body.httpOnly
    const path = req.body.path || '/'
    res.cookie('name', name, { httpOnly, path })
    res.sendStatus(204)
  })

  app.get('/hello', (req, res) => {
    logGet('/hello', req)
    res.send(':wave:')
  })

  app.post('/poke', (req, res) => {
    logPost('/poke', req)
    res.render('poke')
  })

  app.get('/login', (req, res) => {
    logGet('/login', req)
    const name = req.cookies.name
    res.render('login', { name })
  })

  app.post('/login', (req, res) => {
    logPost('/login', req)
    const username = req.body.username
    const password = req.body.password
    if (auth.login({ username, password })) {
      res.cookie('jwt', auth.jwt)
      res.redirect('/secure')
    } else {
      res.render('login', { message: 'Bad username or password' })
    }
  })

  app.get('/secure', (req, res) => {
    logGet('/secure', req)
    if (auth.verify(req.cookies.jwt)) {
      res.render('secure')
    } else {
      res.render('login', { message: 'You must login to view this page!' })
    }
  })

  app.post('/money', (req, res) => {
    logPost('/money', req)
    if (auth.verify(req.cookies.jwt)) {
      sendLog(`SENDING $${req.body.amount} TO "${req.body.dest}"!!!`)
      res.render('secure')
    } else {
      res.render('login', { message: 'You must be logged in to perform this operation!' })
    }
  })

  app.post('/logout', (req, res) => {
    logPost('/logout', req)
    res.clearCookie('jwt')
    res.redirect('/login')
  })

  app.get('/adv-cookie', (req, res) => {
    logGet('/adv-cookie', req)
    const name = req.cookies.name
    res.render('adv-cookie', { name })
  })

  console.log(`- listening on port ${port} `)
  server.listen(port)
}
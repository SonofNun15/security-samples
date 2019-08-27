import express from 'express'

import { logGet, logPost, sendLog } from '../utils/log'
import auth from '../auth'

const router = express.Router()

router.get('/cookie', (req, res) => {
  logGet('/cookie', req)
  const name = req.cookies.name
  res.render('csrf/cookie', { name })
})

router.post('/cookie', (req, res) => {
  logPost('/cookie', req)
  const name = req.body.name
  const httpOnly = !!req.body.httpOnly
  const path = req.body.path || '/'
  res.cookie('name', name, { httpOnly, path })
  res.render('csrf/cookie', { name })
})

router.get('/hello', (req, res) => {
  logGet('/hello', req)
  res.send(':wave:')
})

router.post('/poke', (req, res) => {
  logPost('/poke', req)
  res.render('csrf/poke')
})

router.get('/login', (req, res) => {
  logGet('/login', req)
  const name = req.cookies.name
  res.render('csrf/login', { name })
})

router.post('/login', (req, res) => {
  logPost('/login', req)
  const username = req.body.username
  const password = req.body.password
  if (auth.login({ username, password })) {
    res.cookie('jwt', auth.jwt)
    res.redirect('/csrf/secure')
  } else {
    res.render('csrf/login', { message: 'Bad username or password' })
  }
})

router.get('/secure', (req, res) => {
  logGet('/secure', req)
  if (auth.verify(req.cookies.jwt)) {
    res.render('csrf/secure')
  } else {
    res.render('csrf/login', { message: 'You must login to view this page!' })
  }
})

router.post('/money', (req, res) => {
  logPost('/money', req)
  if (auth.verify(req.cookies.jwt)) {
    sendLog(`SENDING $${req.body.amount} TO "${req.body.dest}"!!!`)
    res.render('csrf/secure')
  } else {
    res.render('csrf/login', { message: 'You must be logged in to perform this operation!' })
  }
})

router.post('/logout', (req, res) => {
  logPost('/logout', req)
  res.clearCookie('jwt')
  res.redirect('/csrf/login')
})

router.get('/adv-cookie', (req, res) => {
  logGet('/adv-cookie', req)
  const name = req.cookies.name
  res.render('csrf/adv-cookie', { name })
})

export default router
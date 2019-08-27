import express from 'express'
import { logGet } from '../utils/log'

const router = express.Router()

router.get('/search', (req, res) => {
  logGet('/xss/search', req)
  res.render('xss/search')
})

export default router
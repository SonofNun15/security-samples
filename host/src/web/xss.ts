import express from 'express'
import { logGet } from '../utils/log'

const router = express.Router()

router.get('/search', (req, res) => {
  logGet('/xss/search', req)

  // const query = req.param('query')
  const query = req.query['query']

  // Turn off browser XSS protection for the sake of this demonstration
  res.header('X-XSS-Protection', '0')
  res.render('xss/search', { query, results: [] })
})

export default router
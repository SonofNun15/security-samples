import express from 'express'
import { logGet } from '../utils/log'
import { getDummyResults } from '../utils/dummy_data'

const router = express.Router()

router.get('/search', (req, res) => {
  logGet('/xss/search', req)

  const query = req.param('query')
  const results = !!query 
    ? getDummyResults(query)
    : []

  // Turn off browser XSS protection for the sake of this demonstration
  res.header('X-XSS-Protection', '0')
  res.render('xss/search', { query, results })
})

export default router
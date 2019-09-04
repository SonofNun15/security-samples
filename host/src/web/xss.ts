import express from 'express'
import storage from 'node-persist'
import { logGet, logPost, sendLog } from '../utils/log'

const router = express.Router()

// #############################################
// # Route vulernable to reflected XSS attacks #
// #############################################

router.get('/search', (req, res) => {
  logGet('/xss/search', req)

  // const query = req.param('query')
  const query = req.query['query']

  // Turn off browser XSS protection for the sake of this demonstration
  res.header('X-XSS-Protection', '0')
  res.render('xss/search', { query, results: [] })
})

// ##########################################
// # Route vulnerable to stored XSS attacks #
// ##########################################

router.get('/comments', async (req, res) => {
  logGet('/xss/comments', req)
  const comments = await storage.getItem('comments')
  res.render('xss/comments', { comments })
})

router.post('/comments', async (req, res) => {
  logPost('/xss/comments', req)

  let comments = await storage.getItem('comments')
  comments = comments || []
  comments.push(req.body.comments)

  await storage.setItem('comments', comments)

  res.redirect('comments')
})

router.delete('/comments', async(_req, res) => {
  sendLog('DELETE => /xss/comments')
  await storage.removeItem('comments')
  res.sendStatus(204)
})

export default router
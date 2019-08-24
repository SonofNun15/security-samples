import * as express  from 'express'
import { Express } from 'express'
import * as bodyParser from 'body-parser'

export default function configure(app: Express) {
  _serveAssets(app)
  _initBodyParser(app)
  _initViewRendering(app)
}

function _serveAssets(app: Express) {
  app.use(express.static('assets'))
}

function _initBodyParser(app: Express): void {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())
}

function _initViewRendering(app: Express): void {
  app.set('view engine', 'pug')
  app.set('views', 'views')
}
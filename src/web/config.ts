import { Express } from 'express'
import * as bodyParser from 'body-parser'

export default function configure(app: Express) {
    _initBodyParser(app)
}

function _initBodyParser(app: Express): void {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())
}
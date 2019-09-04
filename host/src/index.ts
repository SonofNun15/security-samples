import storage from 'node-persist'

import { start } from './web'
import { maybeParseInt } from './utils'
import secret from './auth/secret'

async function run() {
  secret()

  await storage.init({ dir: 'storage' })

  const default_port = 3000
  const port: number = maybeParseInt(process.env.PORT) || default_port

  start(port)
}

run()
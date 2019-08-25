import { start } from './web'
import { maybeParseInt } from './utils'
import secret from './auth/secret'

secret()

const default_port = 3000
const port: number = maybeParseInt(process.env.PORT) || default_port

start(port)
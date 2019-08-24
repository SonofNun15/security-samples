import { start } from './web'
import { maybeParseInt } from './utils'

const default_port = 3000
const port: number = maybeParseInt(process.env.PORT) || default_port

start(port)
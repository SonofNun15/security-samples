import io from 'socket.io-client'

import { appendLogMessage } from './log'

const socket = io()

socket.on('log', (message: string) => {
  appendLogMessage(message)
})
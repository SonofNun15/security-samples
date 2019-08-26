import io from 'socket.io-client'
import { getCookieButton } from './controls'
import { displayCookie } from './cookie'

import { appendLogMessage } from './log'

const socket = io()

socket.on('log', (messages: string[]) => {
  appendLogMessage(messages)
})

const cookieButton = getCookieButton()
if (!!cookieButton) {
  cookieButton.onclick = () => {
    displayCookie()
  }
}
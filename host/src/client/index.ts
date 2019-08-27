import io from 'socket.io-client'
import { getCookieButton } from './controls'
import { displayCookie } from './cookie'

const socket = io()

const cookieButton = getCookieButton()
if (!!cookieButton) {
  cookieButton.onclick = () => {
    displayCookie()
  }
}
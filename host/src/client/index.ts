import { getCookieButton } from './controls'
import { displayCookie } from './cookie'

const cookieButton = getCookieButton()
if (!!cookieButton) {
  cookieButton.onclick = () => {
    displayCookie()
  }
}
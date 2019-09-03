import { getCookieButton } from './controls'
import { displayCookie } from './cookie'
import { wireUpStoragePage } from './storage'

const cookieButton = getCookieButton()
if (!!cookieButton) {
  cookieButton.onclick = () => {
    displayCookie()
  }
}

wireUpStoragePage()
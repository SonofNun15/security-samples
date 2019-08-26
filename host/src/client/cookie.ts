import { getCookieDisplay } from './controls'
import { isEmpty } from '../utils'

export function displayCookie() {
  const display = getCookieDisplay()
  if (!!display) {
    if (!isEmpty(document.cookie)) {
      display.innerText = document.cookie
    } else {
      display.innerText = '--empty--'
    }
  }
}
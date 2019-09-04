import { getCookieButton, getDeleteCommentsButton } from './controls'
import { displayCookie } from './cookie'
import { wireUpStoragePage } from './storage'

const cookieButton = getCookieButton()
if (!!cookieButton) {
  cookieButton.onclick = () => {
    displayCookie()
  }
}

wireUpStoragePage()

const deleteButton = getDeleteCommentsButton()
if (!!deleteButton) {
  deleteButton.onclick = async () => {
    await fetch('/xss/comments', {
      method: 'DELETE',
    })

    location.reload()
  }
}
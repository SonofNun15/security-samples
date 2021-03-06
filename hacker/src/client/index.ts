import { getDogButton, getResponseControl, getCsrfForm } from './controls'

function displayResponse() {
  const responseCtrl = getResponseControl()

  if (!!responseCtrl) {
    responseCtrl.innerText = 'Thanks for letting us know, we love dogs too!'
  }
}

const btn = getDogButton()
if (!!btn) {
  btn.onclick = () => {
    displayResponse()
    return true
  }
}

const csrfForm = getCsrfForm()
if (csrfForm) {
  csrfForm.submit()
}
import { getLoginForm, getMoneyContainer, getMoneyForm, getLogoutButton } from './controls'
import { getFormData } from './form'

interface LoginData {
  jwt: string
}

export function wireUpStoragePage() {
  const jwt = localStorage.getItem('jwt')

  if (!!jwt) {
    displayLoggedIn()
  }

  const loginForm = getLoginForm()
  if (!!loginForm) {
    loginForm.onsubmit = login
  }

  const logoutButton = getLogoutButton()
  if (!!logoutButton) {
    logoutButton.onclick = logout
  }

  const moneyForm = getMoneyForm()
  if (!!moneyForm) {
    moneyForm.onsubmit = sendMoney
  }
}

function displayLoggedIn() {
    setControlState('block', 'none')
}

function displayLoggedOut() {
    setControlState('none', 'block')
}

function setControlState(moneyState: string, loginState: string) {
  const moneyContainer = getMoneyContainer()
  const loginForm = getLoginForm()

  if(!!moneyContainer) {
    moneyContainer.style.display = moneyState
  }

  if (!!loginForm) {
    loginForm.style.display = loginState
  }
}

async function login(e: Event) {
  e.preventDefault()
  const formData = getFormData(e.srcElement as HTMLFormElement)

  const loginResult = await fetch('/csrf/login-ajax', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (loginResult.ok) {
    const data: LoginData = await loginResult.json()
    localStorage.setItem('jwt', data.jwt)

    displayLoggedIn()
  }
}

function logout() { 
  localStorage.removeItem('jwt')
  displayLoggedOut()
}

async function sendMoney(e: Event) {
  e.preventDefault()
  const formData = getFormData(e.srcElement as HTMLFormElement)
  const jwt = localStorage.getItem('jwt')

  try {
    const moneyResult = await fetch('/csrf/money-ajax', {
      method: 'POST',
      headers: {
        'Authentication': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (moneyResult.ok) {
      alert('Money sent!')
    } else {
      alert('Money failed to send, not authorized!')
    }
  } catch (error) {
    alert('Money failed to send')
    console.log(error)
  }
}
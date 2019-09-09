export function getDogButton() {
  return document.getElementById('dog-btn')
}

export function getResponseControl() {
  return document.getElementById('response')
}

export function getCsrfForm() {
  return document.getElementById('csrf-form') as HTMLFormElement
}

export function getAntiForgeryForm() {
  return document.getElementById('anti-forgery-form') as HTMLFormElement
}

export function getCsrfTokenInput() {
  return document.getElementById('csrf-token') as HTMLInputElement
}
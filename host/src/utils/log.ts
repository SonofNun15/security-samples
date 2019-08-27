import { Request } from 'express'

export function sendLog(...messages: string[]) {
  const message = messages.join('\n')
  console.log(message + '\n')
}

export function logGet(path: string, request: Request) {
  sendLog(`GET => ${path}`,
          `Cookies: ${JSON.stringify(request.cookies)}`)
}

export function logPost(path: string, request: Request) {
  sendLog(`POST => ${path}: ${JSON.stringify(request.body)}`,
          `Cookies: ${JSON.stringify(request.cookies)}`)
}
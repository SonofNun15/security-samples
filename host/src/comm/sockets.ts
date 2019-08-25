import http from 'http'
import socketio from 'socket.io'
import { Request } from 'express'

let io: socketio.Server

export function enable(http: http.Server): void {
  io = socketio(http)
}

export function sendLog(...message: string[]) {
  if (!!io) {
    io.emit('log', message)
  }
}

export function logGet(path: string, request: Request) {
  sendLog(`GET => ${path}`,
          `Cookies: ${JSON.stringify(request.cookies)}`)
}

export function logPost(path: string, request: Request) {
  sendLog(`POST => ${path}: ${JSON.stringify(request.body)}`,
          `Cookies: ${JSON.stringify(request.cookies)}`)
}
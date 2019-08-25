import http from 'http'
import socketio from 'socket.io'

let io: socketio.Server

export function enable(http: http.Server): void {
  io = socketio(http)
}

export function sendLog(...message: string[]) {
  if (!!io) {
    io.emit('log', message)
  }
}
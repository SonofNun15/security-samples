import http from 'http'
import socketio from 'socket.io'
import { Request } from 'express'

let io: socketio.Server

export function enable(http: http.Server): void {
  io = socketio(http)
}
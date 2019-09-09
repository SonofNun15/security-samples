import fs from 'fs'

export function getKey() {
  return fs.readFileSync('./key.pem')
}

export function getCert() {
  return fs.readFileSync('./cert.pem')
}
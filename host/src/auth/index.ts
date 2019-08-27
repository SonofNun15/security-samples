import jwtlib from 'jsonwebtoken'
import secret from './secret'
import { sendLog } from '../utils/log';

interface LoginData {
  username: string
  password: string
}

class Authentication {
  jwt: string | null = null
  token: string | object | null = null

  login({ username, password }: LoginData) {
    if (username == 'jgraber' &&
        password == 'testpass') {
      this.jwt = jwtlib.sign({}, secret(), { subject: username })
      return true
    } else {
      return false
    }
  }

  verify(jwt: string) {
    try {
      this.token = jwtlib.verify(jwt, secret())
      return true
    } catch (Error) {
      sendLog('Failed to authenticate')
      return false
    }
  }
}

export default new Authentication()
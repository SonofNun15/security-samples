interface LoginData {
  username: string
  password: string
}

class Authentication {
  jwt: string | null = null

  login({ username, password }: LoginData) {
    if (username == 'jgraber' &&
        password == 'testpass') {
      this.jwt = 'test'
      return true
    } else {
      return false
    }
  }

  verify(jwt: string) {
    return true
  }
}

export default new Authentication()
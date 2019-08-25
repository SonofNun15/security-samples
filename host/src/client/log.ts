import { getLogControl } from './controls'

export function appendLogMessage(messages: string[]) {
  const log = getLogControl()

  const message = messages.map(m => `<span>${m}</span>`).join('<br />')

  if (!log) { return }
  const entry = document.createElement('p');

  entry.innerHTML = message

  log.appendChild(entry)
}
import { getLogControl } from './controls'

export function appendLogMessage(message: string) {
  const log = getLogControl()

  if (!log) { return }
  const entry = document.createElement('p');
  entry.innerText = message

  log.appendChild(entry)
}
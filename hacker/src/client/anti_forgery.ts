import { getAntiForgeryForm, getCsrfTokenInput } from "./controls";

export default async function bustAntiForgeryToken() {
  const tokenInput = getCsrfTokenInput()
  const form = getAntiForgeryForm()

  if (!tokenInput || !form) { return }

  const response = await fetch('http://localhost:3000/csrf/secure')
  const bodyText = await response.text()

  const matchResult = bodyText.match(/csrf-token" content="([\w-]+)"/)
  if (!matchResult) { return }

  const token = matchResult[1]

  tokenInput.value = token
  form.submit()
}
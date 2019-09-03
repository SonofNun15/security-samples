interface FormData {
    [key: string]: string
}
export function getFormData(form: HTMLFormElement) {
  const dataHash: FormData = {}

  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i] as HTMLInputElement
    dataHash[element.name] = element.value
  }

  return dataHash
}
export function maybeParseInt(value: string | undefined): number {
  if (value) {
      return parseInt(value)
  } else {
      return NaN
  }
}

export function isEmpty(str: string) {
  return (!str || 0 === str.length);
}
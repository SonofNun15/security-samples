export function maybeParseInt(value: string | undefined): number {
  if (value) {
      return parseInt(value)
  } else {
      return NaN
  }
}
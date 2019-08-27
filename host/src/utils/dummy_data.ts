export function getDummyResults(query: string) {
  return [
    '* pizza',
    'Jonathan *',
    'super *',
    '* crazy',
  ].map(str => str.replace('*', query))
}
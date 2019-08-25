export default function secret() {
  const key = process.env.SIGNING_KEY
  if (!key) { throw new Error("Can't find signing key, set env var SIGNING_KEY") }
  return key
}
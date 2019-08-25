export default function secret() {
  const key = process.env.SIGNING_KEY
  if (!key) { throw new Error("can't find signing key") }
  return key
}
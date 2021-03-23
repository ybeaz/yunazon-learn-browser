export const isConstructor = value => {
  try {
    new value()
    return true
  } catch (err) {
    return false
  }
}

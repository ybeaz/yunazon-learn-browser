export const isConstructor = value => {
  try {
    new value()
    return true
  } catch (error) {
    return false
  }
}

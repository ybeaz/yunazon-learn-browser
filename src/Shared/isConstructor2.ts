export const isConstructor2 = value => {
  try {
    new new Proxy(value, {
      construct() {
        return {}
      },
    })()
    return true
  } catch (error) {
    return false
  }
}

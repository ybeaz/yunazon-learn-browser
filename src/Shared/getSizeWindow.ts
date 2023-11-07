interface IGetSizeWindow {
  (): {
    width: number
    height: number
  }
}

/**
 * @description Funciton to return sizes of the screen window
 */

export const getSizeWindow: IGetSizeWindow = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  return { width, height }
}

export const getSplitedStrDirFile = (str: string) => {
  // @ts-ignore
  const res = str.match(/^(.*[\\\/])/gim) && str.match(/^(.*[\\\/])/gim)[0]
  const res1 = res && str.split(res)[1]

  let dir = res,
    file = res1
  if (!res && !res1) {
    dir = ''
    file = str
  }

  return { dir, file }
}

export const getProcessedArgsInChain: Function = (args: any): any => {
  const obj = {
    res: args,
    exec(func: Function) {
      this.res = func(this.res)
      return this
    },
    done() {
      return this.res
    },
  }

  return obj
}

type ExecDictType = { typeExec: string; func: any; args: any; options: any }

export const getProcessedArgsInChain: Function = (args: any): any => {
  const obj: Record<string, any> = {
    res: args,
    exec(func: any, args: any, options: any) {
      let argsNext = [this.res]

      this.res = func(this.res)
      return this
    },
    done() {
      return this.res
    },
    forEachExec(execTuple: ExecDictType[]) {
      for (let execDict of execTuple) {
        const { typeExec, func, args, options } = execDict

        if (typeExec === 'init') {
          this.res = initEntity
        } else if (typeExec === 'exec') {
        } else if (typeExec === 'done') {
        } else {
          console.log('getProcessedArgsInChain', 'Error', 'unknown operation')
        }
      }
    },
  }

  return obj
}

/*

    forEachExec(execTuple: any[]) {
      for (let execDict in execTuple) {
        const { typeExec, func, args, options } = execDict
        // {typeExec: string, func: any, args: any, options: any}



        if (typeExec === 'init') {
        } else if (typeExec === 'exec') {
        } else if (typeExec === 'done') {
        } else {
          console.log('getProcessedArgsInChain', 'Error', 'unknown operation')
        }
      }
    }


{'type': 'init', 'args': [[]]},

      # Read csv files in cycle
      {'type': 'exec', 'func': getReadCsvFilesInCycle, 'args': [],
       'kwargs': {'isActive': True, 'printRes': False, 'variableName': variableName}},
*/

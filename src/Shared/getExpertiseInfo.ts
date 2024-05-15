import { consoler } from './consoler'
import {
  EXPERTISE_LEVELS,
  ExpertiseElementType,
  IconLibType,
  ExpertiseLevelType,
} from '../Constants/expertiseLevels.const'

export type GetExpertiseInfoParamsType = {
  completed: number
}

export type GetExpertiseInfoOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetExpertiseInfoResType = ExpertiseElementType & {
  left: number
  levelNext: ExpertiseElementType
}

interface GetExpertiseInfoType {
  (
    params: GetExpertiseInfoParamsType,
    options?: GetExpertiseInfoOptionsType
  ): GetExpertiseInfoResType
}

const optionsDefault: Required<GetExpertiseInfoOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getExpertiseInfo
 * @run ts-node src/shared/utils/getExpertiseInfo.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getExpertiseInfo.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getExpertiseInfo, GetExpertiseInfoParamsType } from '../Shared/getExpertiseInfo'
 */
export const getExpertiseInfo: GetExpertiseInfoType = (
  params: GetExpertiseInfoParamsType,
  optionsIn: GetExpertiseInfoOptionsType = optionsDefault
) => {
  const options: Required<GetExpertiseInfoOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { completed } = params

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  let output: GetExpertiseInfoResType = {
    ...EXPERTISE_LEVELS[0],
    left: 1,
    levelNext: EXPERTISE_LEVELS[1],
  }

  try {
    for (const levelElemIndex in EXPERTISE_LEVELS) {
      const levelElem = EXPERTISE_LEVELS[levelElemIndex]

      if (levelElem.min <= completed && levelElem.max >= completed) {
        output = {
          ...levelElem,
          left: levelElem.max - completed + 1,
          levelNext: EXPERTISE_LEVELS[parseInt(levelElemIndex, 10) + 1],
        }
        break
      }
    }
  } catch (error: any) {
    console.log('getExpertiseInfo', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getExpertiseInfo [63]', { ...parentFuncAdd, output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/Shared/getExpertiseInfo.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetExpertiseInfoParamsType = { completed: 6 }
    const output = getExpertiseInfo(params, { printRes: true })
    consoler('getExpertiseInfo [61]', output)
  })()
}

import { consoler } from './consoler'
import {
  EXPERTISE_LEVELS,
  ExpertiseElementType,
  IconLibType,
  ExpertiseLevelType,
} from '../Constants/expertiseLevels.const'

export type GetIconNameExpertiseParamsType = {
  completed: number
}

export type GetIconNameExpertiseOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetIconNameExpertiseResType = ExpertiseElementType & { left: number }

interface GetIconNameExpertiseType {
  (
    params: GetIconNameExpertiseParamsType,
    options?: GetIconNameExpertiseOptionsType
  ): GetIconNameExpertiseResType
}

const optionsDefault: Required<GetIconNameExpertiseOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getIconNameExpertise
 * @run ts-node src/shared/utils/getIconNameExpertise.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getIconNameExpertise.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getIconNameExpertise, GetIconNameExpertiseParamsType } from '../Shared/getIconNameExpertise'
 */
export const getIconNameExpertise: GetIconNameExpertiseType = (
  params: GetIconNameExpertiseParamsType,
  optionsIn: GetIconNameExpertiseOptionsType = optionsDefault
) => {
  const options: Required<GetIconNameExpertiseOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { completed } = params

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  let output: GetIconNameExpertiseResType = { ...EXPERTISE_LEVELS[0], left: 1 }

  try {
    for (const levelElem of EXPERTISE_LEVELS) {
      if (levelElem.min <= completed && levelElem.max >= completed) {
        output = { ...levelElem, left: levelElem.max - completed + 1 }
        break
      }
    }
  } catch (error: any) {
    console.log('getIconNameExpertise', 'Error', {
      ...parentFuncAdd,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getIconNameExpertise [63]', { ...parentFuncAdd, output })
    }

    return output
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getIconNameExpertise.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetIconNameExpertiseParamsType = { completed: 6 }
    const output = getIconNameExpertise(params, { printRes: true })
    consoler('getIconNameExpertise [61]', output)
  })()
}

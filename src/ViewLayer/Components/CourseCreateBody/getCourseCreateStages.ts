import { StagesType, GetCourseCreateStagesType } from './CourseCreateBodyTypes'

/**
 * @description Function to getCourseCreateStages
 * @run ts-node src/shared/utils/getCourseCreateStages.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getCourseCreateStages.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getCourseCreateStages, getCourseCreateStagesParamsType } from './getCourseCreateStages'
 */
export const getCourseCreateStages: GetCourseCreateStagesType = () => {
  const stages: StagesType[] = [
    {
      name: 'metaData',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isToDo: true,
      isPending: true,
      isSuccess: true,
      isFailed: true,
      isRepeat: true,
    },
    {
      name: 'transcript',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isToDo: true,
      isPending: true,
      isSuccess: true,
      isFailed: true,
      isRepeat: true,
    },
    {
      name: 'summary',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isToDo: true,
      isPending: true,
      isSuccess: true,
      isFailed: true,
      isRepeat: true,
    },
    {
      name: 'questions',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isToDo: true,
      isPending: true,
      isSuccess: true,
      isFailed: true,
      isRepeat: true,
    },
    {
      name: 'objections',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isToDo: true,
      isPending: true,
      isSuccess: true,
      isFailed: true,
      isRepeat: true,
    },
    {
      name: 'finalization',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      isToDo: true,
      isPending: true,
      isSuccess: true,
      isFailed: true,
      isRepeat: true,
    },
  ]

  return stages
}

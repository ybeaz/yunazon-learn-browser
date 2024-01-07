import {
  StagesType,
  GetCourseCreateStagesType,
  GetCourseCreateStagesPropsType,
} from './CourseCreateBodyTypes'

// STOPPED HERE: enum status { todo, pending, sucess, etc. }

/**
 * @description Function to getCourseCreateStages
 * @run ts-node src/shared/utils/getCourseCreateStages.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getCourseCreateStages.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getCourseCreateStages, getCourseCreateStagesParamsType } from './getCourseCreateStages'
 */
export const getCourseCreateStages: GetCourseCreateStagesType = ({
  createModuleStages,
}: GetCourseCreateStagesPropsType) => {
  const stages: StagesType[] = [
    {
      name: 'metaData',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      status: createModuleStages['metaData'],
    },
    {
      name: 'transcript',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      status: createModuleStages['transcript'],
    },
    {
      name: 'summary',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      status: createModuleStages['summary'],
    },
    {
      name: 'questions',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      status: createModuleStages['questions'],
    },
    {
      name: 'objections',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      status: createModuleStages['objections'],
    },
    {
      name: 'finalization',
      action: {
        typeEvent: 'PLUS_QUESTION_SLIDE',
        data: {},
      },
      status: createModuleStages['finalization'],
    },
  ]

  return stages
}

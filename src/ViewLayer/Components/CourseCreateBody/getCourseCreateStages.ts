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
        typeEvent: 'GET_COURSE_META_DATA_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['metaData'],
    },
    {
      name: 'transcript',
      action: {
        typeEvent: 'GET_COURSE_TRANSCRIPT_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['transcript'],
    },
    {
      name: 'summary',
      action: {
        typeEvent: 'GET_COURSE_SUMMARY_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['summary'],
    },
    {
      name: 'questions',
      action: {
        typeEvent: 'GET_COURSE_QUESTIONS_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['questions'],
    },
    {
      name: 'objections',
      action: {
        typeEvent: 'GET_COURSE_OBJECTIONS_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['objections'],
    },
    {
      name: 'courseModule',
      action: {
        typeEvent: 'GET_COURSE_MODULE_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['courseModule'],
    },
  ]

  return stages
}

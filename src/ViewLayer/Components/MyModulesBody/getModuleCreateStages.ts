import {
  StagesType,
  GetModuleCreateStagesType,
  GetModuleCreateStagesPropsType,
} from './MyModulesBodyTypes'

// STOPPED HERE: enum status { todo, pending, sucess, etc. }

/**
 * @description Function to getCourseCreateStages
 * @run ts-node ...
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getCourseCreateStages.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getCourseCreateStages, getCourseCreateStagesParamsType } from './getCourseCreateStages'
 */
export const getModuleCreateStages: GetModuleCreateStagesType = ({
  createModuleStages,
}: GetModuleCreateStagesPropsType) => {
  const stages: StagesType[] = [
    {
      name: 'metaData',
      isActive: createModuleStages['metaData']['isActive'],
      action: {
        typeEvent: 'GET_MODULE_META_DATA_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['metaData']['status'],
      timeCalculated: createModuleStages['metaData']['timeCalculated'],
    },
    {
      name: 'transcript',
      isActive: createModuleStages['transcript']['isActive'],
      action: {
        typeEvent: 'GET_MODULE_TRANSCRIPT_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['transcript']['status'],
      timeCalculated: createModuleStages['transcript']['timeCalculated'],
    },
    {
      name: 'summary',
      isActive: createModuleStages['summary']['isActive'],
      action: {
        typeEvent: 'GET_MODULE_SUMMARY_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['summary']['status'],
      timeCalculated: createModuleStages['summary']['timeCalculated'],
    },
    {
      name: 'questions',
      isActive: createModuleStages['questions']['isActive'],
      action: {
        typeEvent: 'GET_MODULE_QUESTIONS_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['questions']['status'],
      timeCalculated: createModuleStages['questions']['timeCalculated'],
    },
    {
      name: 'objections',
      isActive: createModuleStages['objections']['isActive'],
      action: {
        typeEvent: 'GET_MODULE_OBJECTIONS_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['objections']['status'],
      timeCalculated: createModuleStages['objections']['timeCalculated'],
    },
    {
      name: 'courseModule',
      isActive: createModuleStages['courseModule']['isActive'],
      action: {
        typeEvent: 'GET_MODULE_MODULE_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['courseModule']['status'],
      timeCalculated: createModuleStages['courseModule']['timeCalculated'],
    },
  ]

  return stages
}

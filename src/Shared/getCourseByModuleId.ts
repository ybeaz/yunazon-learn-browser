import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

import { CourseType, ModuleType } from '../@types/GraphqlTypes.d'

export type GetCourseByModuleIdParamsType = {
  moduleID: string
  courses: CourseType[]
}

export type GetCourseByModuleIdResType = CourseType | null

interface GetCourseByModuleIdType {
  (
    params: GetCourseByModuleIdParamsType,
    options?: { printRes?: boolean }
  ): GetCourseByModuleIdResType
}

/**
 * @description Function to getCourseByModuleId
 * @test see test on server side
 * @run ts-node src/shared/utils/getCourseByModuleId.ts
 * @import import { getCourseByModuleId } from '../../Shared/getCourseByModuleId'
 */

export const getCourseByModuleId: GetCourseByModuleIdType = (
  { moduleID, courses },
  options
) => {
  let res: GetCourseByModuleIdResType = null
  let breakVar: boolean = false

  try {
    for (let course of courses) {
      const { modules } = course

      for (let module of modules || []) {
        const { moduleID: moduleIDTemp } = module
        if (moduleIDTemp === moduleID) {
          res = course
          breakVar = true
          if (breakVar) break
        }

        if (breakVar) break
      }
    }

    if (options?.printRes) {
      consoler('getCourseByModuleId', { res })
    }
  } catch (error: any) {
    consolerError('getCourseByModuleId', error)
  } finally {
    return res
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}

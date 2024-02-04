import { ModuleType } from '../@types/GraphqlTypes'

/**
 * @description Function to make isSelected === true for Module by IDs
 * @returns
 */
export const getModulesWithSetActive: Function = (
  modules: ModuleType[],
  moduleID: ModuleType['moduleID']
): ModuleType[] => {
  return modules.map((module: any) => {
    let isSelected = false
    if (module.moduleID === moduleID) isSelected = true
    return { ...module, isSelected }
  })
}

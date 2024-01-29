import { ModuleType } from '../@types/GraphqlTypes'

/**
 * @description Function to add isSelected status default to modules
 */
export const getProvidedSelectedDefault = (
  modules: ModuleType[]
): ModuleType[] => {
  return modules.map((module: ModuleType) => {
    return { ...module, isSelected: false }
  })
}

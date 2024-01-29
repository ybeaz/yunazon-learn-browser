import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { CourseType, ModuleType } from '../../@types/GraphqlTypes.d'

export const SET_MODULES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { isLoaded } = store

  /* Making mediaLoaded false for each moduleID by default */
  const mediaLoadedNext = data.reduce(
    (accum: Record<string, boolean>, course: CourseType) => {
      const modules = course?.modules || []

      let output = modules.reduce(
        // @ts-expect-error
        (accum: Record<string, boolean>, module: ModuleType) => {
          const { moduleID, contentID } = module
          let booleanValue = false
          if (contentID.includes('yourails.com')) booleanValue = true
          return { ...accum, [moduleID]: booleanValue }
        },
        {}
      )

      return { ...accum, ...output }
    },
    {}
  )

  const isLoadedNext = {
    ...isLoaded,
    mediaLoaded: mediaLoadedNext,
  }

  const storeNext = { ...store, modules: data, isLoaded: isLoadedNext }

  return storeNext
}

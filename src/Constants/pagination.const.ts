import { PaginationNameEnumType } from '../Interfaces/RootStoreType'

export const PAGINATION_OFFSET: Record<PaginationNameEnumType, number> = {
  [PaginationNameEnumType['pageModules']]: 10,
  [PaginationNameEnumType['pageDocuments']]: 10,
  [PaginationNameEnumType['pageTags']]: 126,
}

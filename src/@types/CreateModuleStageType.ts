import { CreateModuleStatusEnumType } from './CreateModuleStatusEnumType'

export type CreateModuleStageType = {
  isActive: boolean
  status: CreateModuleStatusEnumType
  timeCalculated: number | null
}

import { CreateModuleStatusEnumType } from 'yourails_common'

export type CreateModuleStageType = {
  isActive: boolean
  status: CreateModuleStatusEnumType
  timeCalculated: number | null
}

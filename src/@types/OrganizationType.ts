import { ThumbnailsType } from './GraphqlTypes'

export type OrganizationType = {
  organizationID: string
  isActive: boolean
  dateCreated: number
  dateUpdated: number
  dateDeleted: number | null
  name: string
  brand: string
  description: string
  language: string
  email: string
  url: string
  tags: string[]
  thumbnails: ThumbnailsType
}

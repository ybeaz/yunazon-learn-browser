export type GetValidatedEntityParamsType = {
  entityValidation: string[]
  parentID?: string | null
  entityIndex: number
  entityType: string
  entityID: string
  templateCheck: Record<string, any>
  entity: any
}

export type GetValidatedEntityResType = string[]

interface GetValidatedEntityType {
  (params: GetValidatedEntityParamsType): GetValidatedEntityResType
}

/**
 * @description Function to validate a entity by template
 * @param courses: any[]
 * @returns content: any[]
 */
export const getValidatedEntity: GetValidatedEntityType = ({
  entityValidation,
  parentID,
  entityIndex,
  entityType,
  entityID,
  templateCheck,
  entity,
}: GetValidatedEntityParamsType) => {
  let errors: string[] = []

  Object.keys(templateCheck).forEach((prop: string) => {
    templateCheck[prop].forEach((func: any) => {
      if (!func(entity[prop]))
        errors = [
          ...errors,
          `error${parentID ? `-parentID-${parentID}` : ''}${
            entityIndex !== undefined ? `-index-${entityIndex}` : ''
          }${entityType ? `-entityType-${entityType}` : ''}${
            entityID ? `-entityID-${entity[entityID]}` : ''
          }${prop ? `-prop-${prop}` : ''}`,
        ]
    })
  })

  if (errors.length) {
    return [...entityValidation, ...errors]
  } else return entityValidation
}

interface IScriptPropsInput {
  id: string
  src: string
  parentTag?: string
}

/**
 * @description async Function to prepend script tag to app head tag
 */
export const getPrependedExternalScript = async (
  scriptProps: IScriptPropsInput
): Promise<void> => {
  const { id, src, parentTag = 'head' } = scriptProps
  var tag = document.createElement('script')
  tag.id = id
  tag.src = src
  tag.defer = true
  const parent = document.getElementsByTagName(parentTag)[0]
  parent.prepend(tag)
}

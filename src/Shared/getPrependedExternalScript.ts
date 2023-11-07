interface ScriptPropsInterface {
  (args: {
    id: string
    src: string
    defer?: boolean
    crossOrigin?: string
    nonce?: string
    parentTag?: string
  }): Promise<void>
}

/**
 * @description async Function to prepend script tag to app head tag
 */
export const getPrependedExternalScript: ScriptPropsInterface =
  async scriptProps => {
    const {
      id,
      src,
      defer = undefined,
      crossOrigin = undefined,
      nonce = undefined,
      parentTag = 'head',
    } = scriptProps
    var tag = document.createElement('script')
    tag.id = id
    tag.src = src
    if (defer) tag.defer = defer
    if (crossOrigin) tag.crossOrigin = crossOrigin
    if (nonce) tag.nonce = nonce

    const parent = document.getElementsByTagName(parentTag)[0]
    parent.prepend(tag)
  }

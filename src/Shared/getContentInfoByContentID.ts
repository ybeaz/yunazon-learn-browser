interface IgetContentInfoByContentID {
  ytID: string
  course: string
  meta: {
    institution: string
    specTitle: string
    specName: string
  }
  questions: any[]
}

export const getContentInfoByContentID: Function = (
  content: IgetContentInfoByContentID[],
  contentID: string
): IgetContentInfoByContentID => {
  const contentInfoDefault = {
    ytID: 'Undefined',
    course: 'No name',
    meta: {
      institution: 'No name',
      specTitle: 'No name',
      specName: 'No name',
    },
    questions: [],
  }
  if (!content.length) return contentInfoDefault
  const contentIDBody = content.find(item => item.ytID === contentID)
  return contentIDBody ? contentIDBody : contentInfoDefault
}

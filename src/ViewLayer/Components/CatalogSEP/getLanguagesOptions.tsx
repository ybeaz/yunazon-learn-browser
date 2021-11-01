import { ILanguages } from '../../../Constants/languages.const'
import { ISelectOption } from './../Select'

interface IGetLanguagesOptions {
  (
    languages: ILanguages,
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

export const getLanguagesOptions: IGetLanguagesOptions = (
  languages2,
  language2,
  defaultOption2
) => {
  const lagnguagesMapped = Object.keys(languages2).map((ln: string) => {
    const [text] = languages2[ln][language2]
    return {
      text,
      value: ln,
      selected: false,
    }
  })
  return [defaultOption2, ...lagnguagesMapped]
}

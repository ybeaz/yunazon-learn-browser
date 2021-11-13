import { Select as SelectAntd } from 'antd'

import { ImageSvg } from '../ViewLayer/Components/ImageSvg'
import { ILanguages } from '../Constants/languages.const'
import { IDictionary } from '../Constants/dictionary.const'
import { ISelectOptionAntD } from '../Interfaces/ISelectOptionAntD'

const { Option } = SelectAntd

interface IGetLanguagesOptions {
  (
    languages2: ILanguages,
    language2: string,
    defaultOption2: IDictionary
  ): ISelectOptionAntD[]
}

/**
 * @description Funciton to get array of option objects - language options
 */
export const getLanguagesOptions: IGetLanguagesOptions = (
  languages2,
  language2,
  defaultOption2
) => {
  const lagnguagesMapped = Object.keys(languages2).map((ln: string) => {
    console.info('getLanguagesOptions [29]', { languages2, ln, language2 })
    const [label] = languages2[ln][language2]
    return { label, value: ln }
  })

  const defaultOptionNext = {
    label: defaultOption2[language2],
    value: defaultOption2['en'],
  }

  return [defaultOptionNext, ...lagnguagesMapped]
}

/**
 * @description Funciton to get array of JSX option elements - language options
 */
export const getLanguagesOptionsJsx = (languages2, language2, svgFileDir2) => {
  return Object.keys(languages2).map((ln: string) => {
    const value = languages2[ln]['639-1']
    const [label] = languages2[ln][language2]
    const { svgFile } = languages2[ln]

    const imageSvgProps = {
      classAdded: 'ImageSvg_languagesOptions',
      src: `${svgFileDir2}${svgFile}`,
    }

    return (
      <Option className='_optionsAntd' value={value}>
        <ImageSvg {...imageSvgProps} />
        {label}
      </Option>
    )
  })
}

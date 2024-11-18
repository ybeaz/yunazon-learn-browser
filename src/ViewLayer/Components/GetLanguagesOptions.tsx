import React, { ReactElement } from 'react'
import { Select as SelectAntd } from 'antd'
import { nanoid } from 'nanoid'
import { ImageYrl } from 'yourails_common'

import { LanguagesType } from '../../Interfaces/LanguagesType'
import { IDictionary } from '../../Constants/dictionary.const'
import { SelectOptionAntDType } from 'yourails_common'

const { Option } = SelectAntd

interface IGetLanguagesOptionsJsx {
  (
    LANGUAGES: LanguagesType,
    language: string,
    svgFileDir: string,
    classAdded: string
  ): ReactElement[]
}

/**
 * @description Funciton to get array of JSX option elements - language options
 */
export const GetLanguagesOptionsJsx: IGetLanguagesOptionsJsx = (
  LANGUAGES,
  language,
  svgFileDir,
  classAdded
) => {
  return Object.keys(LANGUAGES).map((ln: string) => {
    const value = LANGUAGES[ln]['639-1']
    const [label] = LANGUAGES[ln][language]
    const twoChar6391 = LANGUAGES[ln]['639-1']
    const key = nanoid()

    let labelNext = label
    labelNext = LANGUAGES[ln][twoChar6391]
      ? labelNext // LANGUAGES[ln][twoChar6391]
      : labelNext

    const { svgFile } = LANGUAGES[ln]

    const imageProps = {
      classAdded: `Image_languagesOptions ${classAdded}`,
      src: `${svgFileDir}${svgFile}`,
      handleEvents: () => {},
    }

    return (
      <Option
        key={key}
        className={`_optionsAntd ${classAdded}`}
        value={value}
        isSelectOption={true}
      >
        <ImageYrl {...imageProps} />
        {labelNext}
      </Option>
    )
  })
}

interface IGetLanguagesOptions {
  (
    LANGUAGES: LanguagesType,
    languages: string[],
    defaultOption2: IDictionary
  ): SelectOptionAntDType[]
}

interface IGetLanguagesOptions2 {
  (
    languages2: LanguagesType,
    language2: string,
    defaultOption2: IDictionary
  ): SelectOptionAntDType[]
}

/**
 * @description Funciton to get array of option objects - language options
 */
export const getLanguagesOptions2: IGetLanguagesOptions2 = (
  languages2,
  language2,
  defaultOption2
) => {
  const lagnguagesMapped = Object.keys(languages2).map((ln: string) => {
    const [label] = languages2[ln][language2]
    return { label, value: ln }
  })

  const defaultOptionNext = {
    label: defaultOption2[language2],
    value: defaultOption2['en'],
  }

  return [defaultOptionNext, ...lagnguagesMapped]
}

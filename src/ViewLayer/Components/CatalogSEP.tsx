import React from 'react'
import { useSelector } from 'react-redux'

import { DICTIONARY, IDictionary } from '../../Constants/dictionary.const'
import { SORT_BY, ISortBy } from '../../Constants/sortBy.const'
import { MEDIA, IMedia } from '../../Constants/media.const'
import { GENDER, IGender } from '../../Constants/gender.const'
import { AGE, IAge } from '../../Constants/age.const'
import { Button } from './Button'
import { Input } from './Input'
import { Select, ISelectOption } from './Select'
import { LANGUAGES, ILanguages } from '../../Constants/languages.const'
import { COUNTRIES, ICountry } from '../../Constants/countries.const'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { nanoid } from 'nanoid'

/**
 * @description Component Catalog for Skills Exchange Page (SEP)
 */
interface IGetExchangeSkillOptions {
  (
    categories: any,
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

interface IGetCountriesOptions {
  (
    countries: ICountry[],
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

interface IGetLanguagesOptions {
  (
    languages: ILanguages,
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

interface IGetAgeOptions {
  (age: IAge, defaultOption: ISelectOption): ISelectOption[]
}

interface IGetStdDictionaryOptions {
  (
    dictionary: IDictionary,
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

export const CatalogSEP: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const getExchangeSkillOptions: IGetExchangeSkillOptions = (
    categories,
    language2,
    defaultOption2
  ) => {
    const exchangeSkillsMapped = Object.keys(categories).map(key => {
      return {
        text: categories[key][language2],
        value: key,
        selected: false,
      }
    })
    return [defaultOption2, ...exchangeSkillsMapped]
  }

  const getCountriesOptions: IGetCountriesOptions = (
    countries,
    language2,
    defaultOption2
  ) => {
    const countriesMapped = countries.map(item => {
      const { name, alpha3, dictionary } = item
      const text = dictionary ? dictionary[language2] : name
      return {
        selected: false,
        text,
        value: alpha3,
      }
    })
    return [defaultOption2, ...countriesMapped]
  }

  const getLanguagesOptions: IGetLanguagesOptions = (
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

  const getAgeOptions: IGetAgeOptions = (age2, defaultOption2) => {
    const ageMapped = age2.map((number2: number) => {
      return {
        text: String(number2),
        value: String(number2),
        selected: false,
      }
    })
    return [defaultOption2, ...ageMapped]
  }

  const getStdDictionaryOptions: IGetStdDictionaryOptions = (
    dictionary2,
    language2,
    defaultOption2
  ) => {
    const dictionaryMapped = Object.keys(dictionary2).map((elem2: string) => {
      return {
        text: dictionary2[elem2][language2],
        value: elem2,
        selected: false,
      }
    })
    return [defaultOption2, ...dictionaryMapped]
  }

  const defaultOption = {
    text: DICTIONARY.notSelected[language],
    value: 'notSelected',
    selected: false,
  }

  const exchangeSkillOptions = getExchangeSkillOptions(
    CATEGORIES_TO_EXCHANGE,
    language,
    defaultOption
  )

  const languagesOptions = getLanguagesOptions(
    LANGUAGES,
    language,
    defaultOption
  )

  const countriesOptions = getCountriesOptions(
    COUNTRIES,
    language,
    defaultOption
  )

  const ageOptions = getAgeOptions(AGE, defaultOption)

  const genderOptions = getStdDictionaryOptions(GENDER, language, defaultOption)

  const mediaOptions = getStdDictionaryOptions(MEDIA, language, defaultOption)

  const sortByOptions = getStdDictionaryOptions(
    SORT_BY,
    language,
    defaultOption
  )

  const childrenProps = {
    selectSkillsOfferedProps: {
      classAdded: 'Select_skillsOffered',
      sizeOnBlur: 1,
      size: 6,
      options: exchangeSkillOptions,
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_OFFERED',
    },
    selectSkillsRequiredProps: {
      classAdded: 'Select_skillsOffered', // 'Select_skillsRequired',
      sizeOnBlur: 2,
      size: 6,
      options: exchangeSkillOptions,
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ',
    },
    selectCountryRequiredProps: {
      classAdded: 'Select_countryRequired',
      sizeOnBlur: 1,
      size: 6,
      options: countriesOptions,
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_COUNTRY',
    },
    selectLanguageRequiredProps: {
      classAdded: 'Select_languageRequired',
      sizeOnBlur: 1,
      size: 6,
      options: languagesOptions,
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_LANG',
    },
    selectAgeFromRequiredProps: {
      classAdded: 'Select_ageFromRequired',
      sizeOnBlur: 1,
      size: 6,
      options: ageOptions,
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_AGE_FROM',
    },
    selectAgeToRequiredProps: {
      classAdded: 'Select_ageToRequired',
      sizeOnBlur: 1,
      size: 6,
      options: ageOptions,
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_AGE_TO',
    },
    inputAgeFromRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: 'optional',
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    inputAgeToRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: 'optional',
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectGenderRequiredProps: {
      classAdded: 'Select_genderRequired',
      sizeOnBlur: 1,
      size: 4,
      options: genderOptions,
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_GENDER',
    },
    selectMediaRequiredProps: {
      classAdded: 'Select_mediaRequired',
      sizeOnBlur: 1,
      size: 6,
      options: mediaOptions,
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_MEDIA',
    },
    inputDescriptionRequiredProps: {
      classAdded: 'Input_descriptionRequired',
      type: 'text',
      placeholder: 'optional',
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectSortByProps: {
      classAdded: 'Select_SortByProps',
      sizeOnBlur: 1,
      size: 4,
      options: sortByOptions,
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_SORT_BY',
    },
    buttonSearchSepProps: {
      classAdded: 'Button_searchSep',
      icon: null,
      icon2: null,
      captureLeft: 'Search',
      captureRight: '',
      action: {},
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
      handleEvents: () => {},
    },
  }

  const classCol01 = '_col_1 _titleForm'
  const classCol02 = '_col_1'

  return (
    <div className='CatalogSEP'>
      <div className='__titleScreen'>
        Members Search - Find a Skill Exchange Partner
      </div>
      <form className='__searchForm'>
        <div className='_row'>
          <div className={classCol01}>You are suggesting to exchange</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectSkillsOfferedProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            Find a skill exchange partner who has
          </div>
          <div className={classCol02}>
            <Select {...childrenProps.selectSkillsRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Country</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectCountryRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Speaking language</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectLanguageRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Age</div>
          <div className={classCol02}>
            <span>from:&nbsp;&nbsp;</span>
            <Input {...childrenProps.inputAgeFromRequiredProps} />
            <span>&nbsp;&nbsp;to:&nbsp;&nbsp;</span>
            <Input {...childrenProps.inputAgeToRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Gender</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectGenderRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Prefered media or mean</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectMediaRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Description contains</div>
          <div className={classCol02}>
            <div className='_description'>
              <Input {...childrenProps.inputDescriptionRequiredProps} />
            </div>
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>Sort results by</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectSortByProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}></div>
          <div className={classCol02}>
            <Button {...childrenProps.buttonSearchSepProps} />
          </div>
        </div>
      </form>
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'

import { Button } from './Button'
import { Input } from './Input'
import { Select, ISelectOption } from './Select'
import { LANGUAGES, ILanguages } from '../../Constants/languages.const'
import { COUNTRIES, ICountry } from '../../Constants/countries.const'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { nanoid } from 'nanoid'

interface IGetExchangeSkillOptions {
  (categories: any, language: string): ISelectOption[]
}

interface IGetCountriesOptions {
  (countries: ICountry[]): ISelectOption[]
}

interface IGetLanguagesOptions {
  (languages: ILanguages, language: string): ISelectOption[]
}

export const CatalogSEP: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const getExchangeSkillOptions: IGetExchangeSkillOptions = (
    categories,
    language2
  ) => {
    return Object.keys(categories).map(key => {
      return {
        text: categories[key][language2],
        value: key,
        selected: false,
      }
    })
  }

  const getCountriesOptions: IGetCountriesOptions = countries => {
    return countries.map(item => {
      const { name, alpha3 } = item
      return {
        selected: false,
        text: name,
        value: alpha3,
      }
    })
  }

  const getLanguagesOptions: IGetLanguagesOptions = (languages2, language2) => {
    return Object.keys(languages2).map((ln: string) => {
      const [text] = languages2[ln][language2]
      return {
        text,
        value: ln,
        selected: false,
      }
    })
  }

  const exchangeSkillOptions = getExchangeSkillOptions(
    CATEGORIES_TO_EXCHANGE,
    language
  )
  const languagesOptions = getLanguagesOptions(LANGUAGES, language)
  const countriesOptions = getCountriesOptions(COUNTRIES)

  const childrenProps = {
    selectSkillsOfferedProps: {
      sizeOnBlur: 1,
      size: 6,
      options: exchangeSkillOptions,
      multiple: true,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_OFFERED',
    },
    selectSkillsRequiredProps: {
      sizeOnBlur: 1,
      size: 6,
      options: exchangeSkillOptions,
      multiple: false,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_REQ',
    },
    selectCountryProps: {
      sizeOnBlur: 1,
      size: 6,
      options: countriesOptions,
      multiple: true,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_REQ_COUNTRY',
    },
    selectLanguageProps: {
      sizeOnBlur: 1,
      size: 6,
      options: languagesOptions,
      multiple: true,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_REQ_LANG',
    },
    inputAgeFromProps: {
      classAdded: 'string',
      type: 'string',
      placeholder: 'optional',
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    inputAgeToProps: {
      classAdded: 'string',
      type: 'string',
      placeholder: 'optional',
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectGenderProps: {
      sizeOnBlur: 1,
      size: 4,
      options: [],
      multiple: false,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_REQ_GENDER',
    },
    selectMediaProps: {
      sizeOnBlur: 1,
      size: 6,
      options: [],
      multiple: true,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_REQ_MEDIA',
    },
    inputDescriptionContainsProps: {
      classAdded: 'string',
      type: 'string',
      placeholder: 'optional',
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectSortByProps: {
      sizeOnBlur: 1,
      size: 4,
      options: [],
      multiple: false,
      componentId: nanoid(),
      typeEvent: 'SELECT_SKILLS_REQ_SORT_BY',
    },
    buttonSearchProps: {
      icon: null,
      icon2: null,
      captureLeft: 'Search',
      captureRight: '',
      classAdded: '',
      action: {},
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
      handleEvents: () => {},
    },
  }

  return (
    <div className='CatalogSEP'>
      <div className='__titleScreen'>
        Members Search - Find a Skill Exchange Partner
      </div>
      <form className='__searchForm'>
        <div className='_row'>
          <div className='_col _titleForm'>You are suggesting to exchange:</div>
          <div className='_col'>
            <Select {...childrenProps.selectSkillsOfferedProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>
            Find a skill exchange partner who has 1:
          </div>
          <div className='_col'>
            <Select {...childrenProps.selectSkillsRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Country:</div>
          <div className='_col'>
            <Select {...childrenProps.selectCountryProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Speaking language:</div>
          <div className='_col'>
            <Select {...childrenProps.selectLanguageProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Age:</div>
          <div className='_col'>
            <div className='_ageInput'>
              <Input {...childrenProps.inputAgeFromProps} />
            </div>
            <div className='_ageInput'>
              <Input {...childrenProps.inputAgeToProps} />
            </div>
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Gender:</div>
          <div className='_col'>
            <Select {...childrenProps.selectGenderProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Prefered media or mean:</div>
          <div className='_col'>
            <Select {...childrenProps.selectMediaProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Description contains:</div>
          <div className='_col'>
            <div className='_description'>
              <Input {...childrenProps.inputDescriptionContainsProps} />
            </div>
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Sort results by:</div>
          <div className='_col'>
            <Select {...childrenProps.selectSortByProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'></div>
          <div className='_col'>
            <Button {...childrenProps.buttonSearchProps} />
          </div>
        </div>
      </form>
    </div>
  )
}

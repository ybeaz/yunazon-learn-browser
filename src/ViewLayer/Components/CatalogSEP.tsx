import React from 'react'
import { useSelector } from 'react-redux'

import { Select, ISelectOption } from './Select'
import { LANGUAGES, ILanguages } from '../../Constants/languages.const'
import { COUNTRIES, ICountry } from '../../Constants/countries.const'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { IRootStore } from '../../Interfaces/IRootStore'

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
        // defaultSelected: false,
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
        // defaultSelected: false,
        selected: false,
      }
    })
  }

  const exchangeSkillOptions = getExchangeSkillOptions(
    CATEGORIES_TO_EXCHANGE,
    language
  )

  const selectSkillsOfferedProps = {
    sizeOnBlur: 1,
    size: 6,
    options: exchangeSkillOptions,
    multiple: true,
    typeEvent: 'SELECT_SKILLS_OFFERED',
  }

  const selectSkillsRequiredProps = {
    sizeOnBlur: 1,
    size: 6,
    options: exchangeSkillOptions,
    multiple: true,
    typeEvent: 'SELECT_SKILLS_REQ',
  }

  const selectCountryOptions = getCountriesOptions(COUNTRIES)

  const selectCountryProps = {
    sizeOnBlur: 1,
    size: 6,
    options: selectCountryOptions,
    multiple: true,
    typeEvent: 'SELECT_SKILLS_REQ_COUNTRY',
  }

  const selectLaguageOptions = getLanguagesOptions(LANGUAGES, language)

  const selectLanguageProps = {
    sizeOnBlur: 1,
    size: 6,
    options: selectLaguageOptions,
    multiple: true,
    typeEvent: 'SELECT_SKILLS_REQ_LANG',
  }

  return (
    <div className='CatalogSEP'>
      <div className='__titleScreen'>
        Members Search - Find a Skill Exchange Partner
      </div>
      <form className='__searchForm'>
        <div className='_row'>
          <div className='_col _titleForm'>You are suggesting to exchange:</div>
          <div>
            <Select {...selectSkillsOfferedProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>
            Find a skill exchange partner who has:
          </div>
          <div>
            <Select {...selectSkillsRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Country:</div>
          <div>
            <Select {...selectCountryProps} />
          </div>
        </div>
        <div className='_row'>
          <div className='_col _titleForm'>Speaking language:</div>
          <div>
            <Select {...selectLanguageProps} />
          </div>
        </div>
      </form>
    </div>
  )
}

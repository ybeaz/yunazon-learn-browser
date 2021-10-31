import React from 'react'
import { useSelector } from 'react-redux'

import { getStdDictionaryOptions } from './getStdDictionaryOptions'
import { getAgeOptions } from './getAgeOptions'
import { getLanguagesOptions } from './getLanguagesOptions'
import { getCountriesOptions } from './getCountriesOptions'
import { getExchangeSkillOptions } from './getExchangeSkillOptions'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SORT_BY } from '../../../Constants/sortBy.const'
import { MEDIA } from '../../../Constants/media.const'
import { GENDER } from '../../../Constants/gender.const'
import { AGE } from '../../../Constants/age.const'
import { Button } from './../Button'
import { Input } from './../Input'
import { Select } from './../Select'
import { LANGUAGES } from '../../../Constants/languages.const'
import { COUNTRIES } from '../../../Constants/countries.const'
import { CATEGORIES_TO_EXCHANGE } from '../../../Constants/categoriesToExchange.const'
import { IRootStore } from '../../../Interfaces/IRootStore'
import { nanoid } from 'nanoid'

import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'
const { Option: OptionAntd } = SelectAntd

/**
 * @description Component Catalog for Skills Exchange Page (SEP)
 */

export const CatalogSep: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const defaultOption = {
    text: DICTIONARY.notSelected[language],
    value: 'notSelected',
    selected: false,
  }

  const childrenProps = {
    selectSkillsOfferedProps: {
      classAdded: 'Select_skillsOffered',
      sizeOnBlur: 1,
      size: 6,
      options: getExchangeSkillOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_OFFERED',
    },
    selectSkillsRequiredProps: {
      classAdded: 'Select_skillsOffered', // 'Select_skillsRequired',
      sizeOnBlur: 2,
      size: 6,
      options: getExchangeSkillOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ',
    },
    selectCountryRequiredProps: {
      classAdded: 'Select_countryRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getCountriesOptions(COUNTRIES, language, defaultOption),
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_COUNTRY',
    },
    selectLanguageRequiredProps: {
      classAdded: 'Select_languageRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getLanguagesOptions(LANGUAGES, language, defaultOption),
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_LANG',
    },
    selectAgeFromRequiredProps: {
      classAdded: 'Select_ageFromRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getAgeOptions(AGE, defaultOption),
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_AGE_FROM',
    },
    selectAgeToRequiredProps: {
      classAdded: 'Select_ageToRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getAgeOptions(AGE, defaultOption),
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_AGE_TO',
    },
    inputAgeFromRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    inputAgeToRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectGenderRequiredProps: {
      classAdded: 'Select_genderRequired',
      sizeOnBlur: 1,
      size: 4,
      options: getStdDictionaryOptions(GENDER, language, defaultOption),
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_GENDER',
    },
    selectMediaRequiredProps: {
      classAdded: 'Select_mediaRequired',
      sizeOnBlur: 1,
      size: 6,
      options: getStdDictionaryOptions(MEDIA, language, defaultOption),
      multiple: true,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_MEDIA',
    },
    inputDescriptionRequiredProps: {
      classAdded: 'Input_descriptionRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'string',
      storeFormProp: 'string',
    },
    selectSortByProps: {
      classAdded: 'Select_SortByProps',
      sizeOnBlur: 1,
      size: 4,
      options: getStdDictionaryOptions(SORT_BY, language, defaultOption),
      multiple: false,
      componentId: nanoid(),
      language,
      typeEvent: 'SELECT_SKILLS_REQ_SORT_BY',
    },
    buttonSearchSepProps: {
      classAdded: 'Button_searchSep',
      icon: null,
      icon2: null,
      captureLeft: DICTIONARY['Search'][language],
      captureRight: '',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
    },
  }

  const classCol01 = '_col_1 _titleForm'
  const classCol02 = '_col_1'

  const stubOnAction = () => console.info('CatalogSep [306]')

  return (
    <div className='CatalogSep'>
      <h1 className='__titleScreen'>
        {DICTIONARY['Members Search - Find a Skill Exchange Partner'][language]}
      </h1>
      <form className='__searchForm'>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['You are suggesting to exchange'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <SelectAntd
              showSearch
              style={{ width: 200 }}
              placeholder='Select a person'
              optionFilterProp='children'
              onChange={stubOnAction}
              onFocus={stubOnAction}
              onBlur={stubOnAction}
              onSearch={stubOnAction}
              filterOption={(input, option) =>
                // @ts-ignore
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <OptionAntd value='lucy'>Lucy</OptionAntd>
              <OptionAntd value='john'>John</OptionAntd>
            </SelectAntd>
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Find a skill exchange partner who has'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd
              mode='multiple'
              allowClear
              style={{ width: '100%' }}
              placeholder='Please select'
              defaultValue={[]}
              onChange={stubOnAction}
            >
              <OptionAntd value='lucy'>Lucy</OptionAntd>
              <OptionAntd value='john'>John</OptionAntd>
            </SelectAntd>

            <Select {...childrenProps.selectSkillsRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Country'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <Select {...childrenProps.selectCountryRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Speaking language'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <Select {...childrenProps.selectLanguageRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>{DICTIONARY['Age'][language]}</div>
          <div className={classCol02}>
            <span>{DICTIONARY['fromStart'][language]}:&nbsp;&nbsp;</span>
            <Input {...childrenProps.inputAgeFromRequiredProps} />
            <span>&nbsp;&nbsp;{DICTIONARY['to'][language]}:&nbsp;&nbsp;</span>
            <Input {...childrenProps.inputAgeToRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>{DICTIONARY['Gender'][language]}</div>
          <div className={classCol02}>
            <Select {...childrenProps.selectGenderRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Prefered media or mean'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <Select {...childrenProps.selectMediaRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Description contains'][language]}
          </div>
          <div className={classCol02}>
            <Input {...childrenProps.inputDescriptionRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Sort results by'][language]}
          </div>
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
        <div className='_row'>
          <div className={classCol01}>
            {'* '}
            {DICTIONARY['Multi choice'][language]}
          </div>
        </div>
      </form>
    </div>
  )
}

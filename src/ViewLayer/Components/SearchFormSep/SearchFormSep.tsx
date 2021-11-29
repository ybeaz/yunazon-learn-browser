import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { SelectLanguage } from '../SelectLanguage'
import { getCountriesOptions } from './getCountriesOptions'
import { getStdDictionaryOptions } from './getStdDictionaryOptions'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SORT_BY } from '../../../Constants/sortBy.const'
import { MEDIA } from '../../../Constants/media.const'
import { GENDER } from '../../../Constants/gender.const'
import { Button } from './../Button'
import { Input } from './../Input'
import { LANGUAGES } from '../../../Constants/languages.const'
import { COUNTRIES } from '../../../Constants/countries.const'
import { CATEGORIES_TO_EXCHANGE } from '../../../Constants/categoriesToExchange.const'
import { IRootStore } from '../../../Interfaces/IRootStore'

/**
 * @description Component Catalog for Skills Exchange Page (SEP)
 */

export const SearchFormSep: React.FunctionComponent<any> = (props: any) => {
  const {
    forms: { searchFormSep },
    language,
    componentsState: { isSepAdvancedSearch },
  } = useSelector((store2: IRootStore) => store2)

  const history = useHistory()

  const {
    inputAgeFromRequired,
    inputAgeToRequired,
    inputDescriptionRequired,
    selectCountryRequired,
    selectGenderRequired,
    selectLanguageRequired,
    selectMediaRequired,
    selectSkillsOffered,
    selectSkillsRequired,
    selectSortBy,
  } = searchFormSep

  const defaultOptions = {
    selectSkillsOffered: 'all_skills',
    selectLanguageRequired: language,
    selectMediaRequired: 'messenger_and_voice',
    selectSortByProps: 'descending',
  }

  useEffect(() => {
    handleEvents(
      {},
      {
        typeEvent: 'SEP_SELECT_SKILLS_OFFERED',
        data: defaultOptions.selectSkillsOffered,
      }
    )
    handleEvents(
      {},
      {
        typeEvent: 'SEP_SELECT_MEDIA_REQUIRED',
        data: defaultOptions.selectMediaRequired,
      }
    )
    handleEvents(
      {},
      {
        typeEvent: 'SEP_SELECT_LANGUAGE_REQUIRED',
        data: [{ value: defaultOptions.selectLanguageRequired }],
      }
    )
    handleEvents(
      {},
      {
        typeEvent: 'SEP_SELECT_SORT_BY',
        data: defaultOptions.selectSortByProps,
      }
    )
  }, [])

  const defaultOption = DICTIONARY.notSelected

  const stubOnAction = () => {}

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const childrenProps = {
    selectSkillsOfferedProps: {
      allowClear: true,
      componentId: nanoid(),
      value: selectSkillsOffered,
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: 'SEP_SELECT_SKILLS_OFFERED', data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      // optionFilterProp: 'children',
      options: getStdDictionaryOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    selectSkillsRequiredProps: {
      // allowClear: true,
      componentId: nanoid(),
      value: [selectSkillsRequired],
      filterOption,
      mode: null,
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: 'SEP_SELECT_SKILLS_REQUIRED', data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    selectMediaRequiredProps: {
      allowClear: true,
      componentId: nanoid(),
      value: selectMediaRequired,
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: 'SEP_SELECT_MEDIA_REQUIRED', data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(MEDIA, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    // selectLanguageRequiredProps: {
    //   allowClear: true,
    //   componentId: nanoid(),
    //   defaultValue: [],
    //   filterOption,
    //   mode: 'multiple' as 'multiple' | 'tags',
    //   onBlur: stubOnAction,
    //   onChange: (values: string[]) =>
    //     handleEvents(
    //       {},
    //       { typeEvent: 'SEP_SELECT_LANGUAGE_REQUIRED', data: values }
    //     ),
    //   onFocus: stubOnAction,
    //   onSearch: stubOnAction,
    //   optionFilterProp: 'children',
    //   options: getLanguagesOptions(LANGUAGES, language, defaultOption),
    //   placeholder: DICTIONARY['select'][language],
    //   showSearch: true,
    //   style: { width: '100%' },
    // },
    selectCountryRequiredProps: {
      allowClear: true,
      componentId: nanoid(),
      value: selectCountryRequired,
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: 'SEP_SELECT_COUNTRY_REQUIRED', data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getCountriesOptions(COUNTRIES, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    inputAgeFromRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'SEP_INPUT_AGE_FROM_REQUIRED',
      storeFormProp: 'SEP_INPUT_AGE_FROM_REQUIRED',
    },
    inputAgeToRequiredProps: {
      classAdded: 'Input_ageFromToRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'SEP_INPUT_AGE_TO_REQUIRED',
      storeFormProp: 'SEP_INPUT_AGE_TO_REQUIRED',
    },
    selectGenderRequiredProps: {
      // allowClear: true,
      componentId: nanoid(),
      defaultValue: [], // defaultOption['en']
      filterOption,
      mode: null,
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: 'SEP_SELECT_GENDER_REQUIRED', data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(GENDER, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    inputDescriptionRequiredProps: {
      classAdded: 'Input_descriptionRequired',
      type: 'text',
      placeholder: DICTIONARY['optional'][language],
      typeEvent: 'SEP_INPUT_DESCRIPTION_REQUIRED',
      storeFormProp: 'SEP_INPUT_DESCRIPTION_REQUIRED',
    },
    selectSortByProps: {
      // allowClear: true,
      componentId: nanoid(),
      value: selectSortBy ? [selectSortBy] : [],
      filterOption,
      mode: null,
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents({}, { typeEvent: 'SEP_SELECT_SORT_BY', data: values }),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getStdDictionaryOptions(SORT_BY, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    buttonSearchSepProps: {
      classAdded: 'Button_searchSep',
      icon: 'FaUsers',
      icon2: null,
      captureLeft: DICTIONARY['Search'][language],
      captureRight: '',
      action: {
        typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
        data: { history, path: '/see-you', source: 'searchForm' },
      },
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
    },
  }

  const selectLanguageProps = {
    LANGUAGES,
    language, // selectLanguageRequired
    mode: 'multiple' as 'multiple' | 'tags',
    typeEvent: 'SEP_SELECT_LANGUAGE_REQUIRED',
    classAdded: 'SelectLanguage__SearchFormSep',
    languagesSelected: selectLanguageRequired.map(item => ({ value: item })),
  }

  const classCol01 = '_col_1 _titleForm'
  const classCol02 = '_col_1 _selectElement'
  const classAdvancedSearch = isSepAdvancedSearch ? '' : '_hideRow'

  const linkAdvancedSearchText = isSepAdvancedSearch
    ? DICTIONARY['Basic_search'][language]
    : DICTIONARY['Advanced_search'][language]

  return (
    <div className='SearchFormSep'>
      <form className='__searchForm'>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Category_info_you_are_looking_for'][language]}
            {' *'}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectSkillsRequiredProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}>
            {DICTIONARY['Speaking language'][language]}
          </div>
          <div className={classCol02}>
            <SelectLanguage {...selectLanguageProps} />
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>
            {DICTIONARY['Communication media'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectMediaRequiredProps} />
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>{DICTIONARY['Country'][language]}</div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectCountryRequiredProps} />
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>{DICTIONARY['Age'][language]}</div>
          <div className={classCol02}>
            <div className='_range'>
              {DICTIONARY['fromStart'][language]}:&nbsp;&nbsp;
            </div>
            <Input {...childrenProps.inputAgeFromRequiredProps} />
            <div className='_range'>
              &nbsp;&nbsp;{DICTIONARY['to'][language]}:&nbsp;&nbsp;
            </div>
            <Input {...childrenProps.inputAgeToRequiredProps} />
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>
            {DICTIONARY['Prefered gender'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectGenderRequiredProps} />
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>
            {DICTIONARY['Description contains'][language]}
          </div>
          <div className={classCol02}>
            <Input {...childrenProps.inputDescriptionRequiredProps} />
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>
            {DICTIONARY['You_are_suggesting_to_exchange'][language]}
          </div>
          <div className={classCol02}>
            {language && (
              <SelectAntd {...childrenProps.selectSkillsOfferedProps} />
            )}
          </div>
        </div>
        <div className={`_row ${classAdvancedSearch}`}>
          <div className={classCol01}>
            {DICTIONARY['Sort results by'][language]}
          </div>
          <div className={classCol02}>
            <SelectAntd {...childrenProps.selectSortByProps} />
          </div>
        </div>
        <div className='_row'>
          <div className={classCol01}></div>
          <div className={`${classCol02} _submitGroup`}>
            <Button {...childrenProps.buttonSearchSepProps} />
            <div
              className='_linkAdvacedSearch'
              onClick={event =>
                handleEvents({}, { typeEvent: 'TOGGLE_IS_ADVANCED_SEARCH' })
              }
            >
              {linkAdvancedSearchText}
            </div>
          </div>
        </div>
        {/* <div className='_row'>
          <div className={classCol01}>
            {'* '}
            {DICTIONARY['Required'][language]}
          </div>
        </div> */}
      </form>
    </div>
  )
}

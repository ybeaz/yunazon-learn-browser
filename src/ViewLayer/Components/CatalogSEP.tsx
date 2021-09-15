import React from 'react'
import { useSelector } from 'react-redux'

import { Select, ISelectOption } from './Select'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange'
import { IRootStore } from '../../Interfaces/IRootStore'

interface GetOptionsInterface {
  (categories: any, language: string): ISelectOption[]
}

export const CatalogSEP: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const getOptions: GetOptionsInterface = (categories, language2) => {
    return Object.keys(categories).map(key => {
      return {
        text: categories[key][language2],
        value: key,
        // defaultSelected: false,
        selected: false,
      }
    })
  }

  const optionsIn = getOptions(CATEGORIES_TO_EXCHANGE, language)

  const selectProps = {
    sizeOnBlur: 1,
    size: 6,
    options: optionsIn,
    multiple: true,
  }

  console.info('CatalogSEP [85]', {
    optionsIn,
    language,
    CATEGORIES_TO_EXCHANGE,
  })

  return (
    <div className='CatalogSEP'>
      <div className='__titleScreen'>
        Members Search - Find a Skill Exchange Partner
      </div>
      <form>
        <div className='__titleForm'>
          Find a language exchange partner who has:
        </div>
        <div>
          <Select {...selectProps} />
        </div>
      </form>
    </div>
  )
}

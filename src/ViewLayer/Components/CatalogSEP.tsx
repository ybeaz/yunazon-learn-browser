import React from 'react'

import { Select } from './Select'

export const CatalogSEP: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const optionsIn = [
    {
      text: '-other-',
      value: '-other-',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Volvo',
      value: 'Volvo',
      // defaultSelected: true,
      selected: false,
    },
    {
      text: 'Saab',
      value: 'Saab',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Opel',
      value: 'Opel',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Audi',
      value: 'Audi',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Volvo2',
      value: 'Volvo2',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Saab2',
      value: 'Saab2',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Opel2',
      value: 'Opel2',
      // defaultSelected: false,
      selected: false,
    },
    {
      text: 'Audi2',
      value: 'Audi2',
      // defaultSelected: false,
      selected: false,
    },
  ]

  const selectProps = {
    sizeOnBlur: 1,
    size: 6,
    options: optionsIn,
    multiple: true,
  }

  return (
    <div className='CatalogSEP'>
      <div>CatalogSEP</div>
      <div>
        <Select {...selectProps} />
      </div>
    </div>
  )
}

import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ICONS_SIMPLE } from '../../Constants/iconsSimpleShort.const'
import { CATEGORIES } from '../../Constants/categories.const'
import { ICategory } from '../../Interfaces/ICategory'
import { Button } from './Button'

interface IGetCategorisJsx {
  (categories: ICategory[]): ReactElement[]
}

interface CategoryCatalogArgs {}

export const CategoryCatalog: React.FunctionComponent<CategoryCatalogArgs> = (
  props: CategoryCatalogArgs
): JSX.Element => {
  const getCategorisJsx: IGetCategorisJsx = categories2 =>
    categories2.map((item: ICategory) => {
      const { icon } = item

      const buttonProps = {
        icon,
        icon2: null,
        classAdded: 'Button_CategoryCatalog',
      }

      return <Button {...buttonProps} />
    })

  const getCategoriesFromIcons = icons => {
    return Object.keys(icons).map(iconName => ({
      icon: iconName,
      en: '',
      ru: '',
    }))
  }

  const categoriesFromIcons = getCategoriesFromIcons(ICONS_SIMPLE)

  const categoriesNext = [...CATEGORIES, ...categoriesFromIcons]

  return (
    <div className='CategoryCatalog'>{getCategorisJsx(categoriesNext)}</div>
  )
}

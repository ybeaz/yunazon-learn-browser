import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IAction } from '../../Interfaces/IAction'
import { IRootStore } from '../../Interfaces/IRootStore'
import { ICONS_SIMPLE } from '../../Constants/iconsSimpleShort.const'
import { CATEGORIES } from '../../Constants/categories.const'
import { ICategory } from '../../Interfaces/ICategory'
import { Button } from './Button'

interface IGetCategorisJsx {
  (categories: ICategory[], language: string): ReactElement[]
}

interface CategoryCatalogArgs {}

export const CategoryCatalog: React.FunctionComponent<CategoryCatalogArgs> = (
  props: CategoryCatalogArgs
): JSX.Element => {
  const history = useHistory()
  const { language } = useSelector((store2: IRootStore) => store2)

  const getCategorisJsx: IGetCategorisJsx = (categories2, language2) =>
    categories2.map((item: ICategory) => {
      const { icon } = item

      const buttonProps = {
        icon,
        icon2: null,
        classAdded: 'Button_CategoryCatalog',
        tooltipText: item[language2],
        tooltipPosition: 'bottom',
        action: {
          typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
          data: { history, path: '/goodbye' },
        } as IAction,
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
    <div className='CategoryCatalog'>
      {getCategorisJsx(categoriesNext, language)}
    </div>
  )
}

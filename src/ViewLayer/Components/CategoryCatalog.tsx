import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { DICTIONARY } from '../../Constants/dictionary.const'
import { IAction } from '../../Interfaces/IAction'
import { IRootStore } from '../../Interfaces/IRootStore'
import { ICONS_PROGRAMMING } from '../../Constants/iconsSimple.const'
import { CATEGORIES } from '../../Constants/categories.const'
import { ICategory } from '../../Interfaces/ICategory'
import { Button } from './Button'

interface IGetCategorisJsx {
  (categories: ICategory[], language: string): ReactElement[]
}

interface CategoryCatalogArgs {}

export const CategoryCatalog: React.FunctionComponent<CategoryCatalogArgs> = (
  props: CategoryCatalogArgs
): ReactElement => {
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
          data: {
            history,
            path: '/see-you',
            source: 'categories',
            value: item['en'],
          },
        } as IAction,
      }

      return <Button {...buttonProps} />
    })

  const getCategoriesFromIcons = icons => {
    return Object.keys(icons)
      .sort((a, b) => a.localeCompare(b))
      .map(iconName => ({
        icon: iconName,
        en: iconName.slice(2),
        ru: iconName.slice(2),
      }))
  }

  const categoriesFromIcons = getCategoriesFromIcons(ICONS_PROGRAMMING)

  const categoriesNext = [...CATEGORIES, ...categoriesFromIcons]

  const propsOut = {
    buttonMdArrowForwardIosProps: {
      icon: 'MdArrowRight',
      icon2: null,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_MdArrowRight3',
      action: {
        typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
        data: {
          history,
          path: '/see-you',
          source: 'categoriesNext',
          value: 'next',
        },
      } as IAction,
      isDisplaying: true,
      tooltipText: DICTIONARY['Next'][language],
      tooltipPosition: 'top',
      isTooltipVisible: false,
      isUnderlined: false,
    },
  }

  return (
    <div className='CategoryCatalog'>
      <h2 className='_title p_2_0_1_0'>
        {DICTIONARY['Catalog_of_Topics'][language]}
      </h2>
      <div className='_catalogIcons'>
        {getCategorisJsx(categoriesNext, language)}
        <Button {...propsOut.buttonMdArrowForwardIosProps} />
      </div>
    </div>
  )
}

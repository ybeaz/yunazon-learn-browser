import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IconReact } from './IconReact'

interface CategoryCatalogArgs {}

export const CategoryCatalog: React.FunctionComponent<CategoryCatalogArgs> = (
  props: CategoryCatalogArgs
): JSX.Element => {
  const categories = [
    'AiOutlineQuestionCircle',
    'BiSelectMultiple',
    'BsLink45Deg',
    'BsQuestionCircle',
    'CgDarkMode',
    'FaFacebook',
    'FaGooglePlusG',
    'FaTwitter',
  ]

  interface IGetCategorisJsx {
    (categories: string[]): ReactElement[]
  }

  const getCategorisJsx: IGetCategorisJsx = categories =>
    categories.map((item: string) => {
      const iconReactProps = {
        icon: item,
        icon2: null,
        classAdded: 'IconReact_CategoryCatalog',
      }

      return <IconReact {...iconReactProps} />
    })

  return <div className='CategoryCatalog'>{getCategorisJsx(categories)}</div>
}

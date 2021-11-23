import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IconReact } from './IconReact'

interface ICategory {
  iconName: string
}
interface IGetCategorisJsx {
  (categories: ICategory[]): ReactElement[]
}

interface CategoryCatalogArgs {}

export const CategoryCatalog: React.FunctionComponent<CategoryCatalogArgs> = (
  props: CategoryCatalogArgs
): JSX.Element => {
  const categories: ICategory[] = [
    { iconName: 'BsHouseDoor' },
    { iconName: 'AiOutlineShoppingCart' },
    { iconName: 'AiOutlineMedicineBox' },
    { iconName: 'AiFillCar' },
    { iconName: 'MdFlightTakeoff' },
    { iconName: 'MdBusinessCenter' },
    { iconName: 'MdOutlineMeetingRoom' },
    { iconName: 'MdComputer' },
  ]

  const getCategorisJsx: IGetCategorisJsx = categories2 =>
    categories2.map((item: ICategory) => {
      const { iconName } = item

      const iconReactProps = {
        icon: iconName,
        icon2: null,
        classAdded: 'IconReact_CategoryCatalog',
      }

      return <IconReact {...iconReactProps} />
    })

  return <div className='CategoryCatalog'>{getCategorisJsx(categories)}</div>
}

import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface CategoryCatalogArgs {}

export const CategoryCatalog: React.FunctionComponent<CategoryCatalogArgs> = (
  props: CategoryCatalogArgs
): JSX.Element => {
  return <div className='CategoryCatalog'>CategoryCatalog</div>
}

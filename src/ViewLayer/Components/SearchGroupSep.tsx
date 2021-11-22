import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Image } from './Image'
import { SearchFormSep } from './SearchFormSep/SearchFormSep'

interface SearchGroupSepArgs {}

export const SearchGroupSep: React.FunctionComponent<SearchGroupSepArgs> = (
  props: SearchGroupSepArgs
): JSX.Element => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const imageFaceCollage2 = {
    classAdded: 'Image_SearchGroupSep',
    src: 'https://yourails.com/images/collage-happy-multicultural-people-faces-211122-21.jpg',
  }

  return (
    <div className='SearchGroupSep'>
      <h1 className='__titleScreen'>
        {DICTIONARY['Fast_Knowledge_and_Experience_Exchange'][language]}
      </h1>
      <SearchFormSep />
      <div className='__imagefaceCollage'>
        <Image {...imageFaceCollage2} />
      </div>
      <div className='__imagefaceCollage'>
        <Image {...imageFaceCollage2} />
      </div>
      <div className='__imagefaceCollage'>
        <Image {...imageFaceCollage2} />
      </div>
    </div>
  )
}

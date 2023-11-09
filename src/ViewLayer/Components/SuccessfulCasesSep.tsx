import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Image } from '../ComponentsLibrary/Image'
import { IRootStore } from '../../Interfaces/IRootStore'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface SuccessfulCasesSepArgs {}

export const SuccessfulCasesSep: React.FunctionComponent<
  SuccessfulCasesSepArgs
> = (props: SuccessfulCasesSepArgs): ReactElement => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const propsOut = {
    collageImageFaceProps: {
      classAdded: 'Image_collageImageFace',
      src: `${SERVERS_MAIN.remote}/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg`,
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'SkillExchangeIntro2',
            isActive: false,
            childProps: {},
          },
        ],
      },
    },
  }

  return (
    <div className='SuccessfulCasesSep'>
      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col'>
            <div className='_image'>
              <Image {...propsOut.collageImageFaceProps} />
            </div>
            <div className='_text'>
              {' '}
              Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla
              bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

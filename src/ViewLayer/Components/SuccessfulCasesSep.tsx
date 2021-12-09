import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Image } from './Image'
import { Button } from './Button'
import { IconReact } from './IconReact'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface SuccessfulCasesSepArgs {}

export const SuccessfulCasesSep: React.FunctionComponent<SuccessfulCasesSepArgs> =
  (props: SuccessfulCasesSepArgs): ReactElement => {
    const { language } = useSelector((store2: IRootStore) => store2)

    const propsOut = {
      collageImageFaceProps: {
        classAdded: 'Image_collageImageFace',
        src: 'https://yourails.com/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg',
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
        <h2 className='_title p_2_0_1_0'>
          {DICTIONARY['Our_Members_Success_Stories'][language]}
        </h2>
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

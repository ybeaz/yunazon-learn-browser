import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { withPropsYrl, ImageYrl } from 'yourails_view_layer_web'
import { handleEvents as handleEventsIn, HandleEventType } from '../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface SuccessfulCasesSepPropsType {
  handleEvents: HandleEventType
}

export const SuccessfulCasesSepComponent: React.FunctionComponent<SuccessfulCasesSepPropsType> = ({
  handleEvents,
}: SuccessfulCasesSepPropsType): ReactElement => {
  const { language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    collageImageFaceProps: {
      classAdded: 'Image_collageImageFace',
      src: `${SERVERS_MAIN.remote}/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg`,
      handleEvents,
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
              <ImageYrl {...propsOut.collageImageFaceProps} />
            </div>
            <div className='_text'>
              {' '}
              Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla
              Bla bla bla Bla bla bla Bla bla bla
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SuccessfulCasesSep: React.FunctionComponent<SuccessfulCasesSepPropsType> =
  withPropsYrl({ handleEvents: handleEventsIn })(React.memo(SuccessfulCasesSepComponent))

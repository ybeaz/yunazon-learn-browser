import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SERVERS_MAIN } from 'yourails_common'

import { withPropsYrl, ImageYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../DataLayer/index.handleEvents'
import { HandleEventType } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { DICTIONARY } from 'yourails_common'

interface HowItWorksSepPropsType {
  handleEvents: HandleEventType
}

export const HowItWorksSepComponent: React.FunctionComponent<HowItWorksSepPropsType> = ({
  handleEvents,
}: HowItWorksSepPropsType): ReactElement => {
  const { language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    illustration_5_1_1: {
      classAdded: 'Image_illustration',
      handleEvents,
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_1_1.png`,
    },
    illustration_5_2_1: {
      classAdded: 'Image_illustration',
      handleEvents,
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_2_1.png`,
    },
    illustration_5_3_1: {
      classAdded: 'Image_illustration',
      handleEvents,
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_3_1.png`,
    },
    illustration_5_4_1: {
      classAdded: 'Image_illustration',
      handleEvents,
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_4_1.png`,
    },
  }

  return (
    <div className='HowItWorksSep'>
      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col _flex_1'>
            <div className='_capturesImage'>
              <div className='_text'>
                {DICTIONARY['Select'][language]} {DICTIONARY['topic'][language]}
                {', '}
                {DICTIONARY['clarify_the_question'][language]}
              </div>
              <div className='_text'>{DICTIONARY['Receive_users_by_topic'][language]}</div>
            </div>

            <div className='_images'>
              <div className='_image'>
                <ImageYrl {...propsOut.illustration_5_1_1} />
              </div>
              <div className='_image'>
                <ImageYrl {...propsOut.illustration_5_2_1} />
              </div>
            </div>
          </div>

          <div className='_col _flex_1'>
            <div className='_capturesImage'>
              <div className='_text'>
                {DICTIONARY['Choose'][language]} {DICTIONARY['person'][language]}
              </div>
              <div className='_text'>{DICTIONARY['Say_hello_and_hear_new_things'][language]}</div>
            </div>
            <div className='_images'>
              <div className='_image'>
                <ImageYrl {...propsOut.illustration_5_3_1} />
              </div>
              <div className='_image'>
                <ImageYrl {...propsOut.illustration_5_4_1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const HowItWorksSep: React.FunctionComponent<HowItWorksSepPropsType> = withPropsYrl({
  handleEvents: handleEventsIn,
})(React.memo(HowItWorksSepComponent))

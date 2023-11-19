import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SERVERS_MAIN } from '../../Constants/servers.const'

import { ImageYrl } from '../ComponentsLibrary/ImageYrl/ImageYrl'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface HowItWorksSepArgs {}

export const HowItWorksSep: React.FunctionComponent<HowItWorksSepArgs> = (
  props: HowItWorksSepArgs
): ReactElement => {
  const { language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    illustration_5_1_1: {
      classAdded: 'Image_illustration',
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_1_1.png`,
    },
    illustration_5_2_1: {
      classAdded: 'Image_illustration',
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_2_1.png`,
    },
    illustration_5_3_1: {
      classAdded: 'Image_illustration',
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_3_1.png`,
    },
    illustration_5_4_1: {
      classAdded: 'Image_illustration',
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
              <div className='_text'>
                {DICTIONARY['Receive_users_by_topic'][language]}
              </div>
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
                {DICTIONARY['Choose'][language]}{' '}
                {DICTIONARY['person'][language]}
              </div>
              <div className='_text'>
                {DICTIONARY['Say_hello_and_hear_new_things'][language]}
              </div>
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

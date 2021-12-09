import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Image } from './Image'
import { Button } from './Button'
import { IconReact } from './IconReact'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface HowItWorksSepArgs {}

export const HowItWorksSep: React.FunctionComponent<HowItWorksSepArgs> = (
  props: HowItWorksSepArgs
): ReactElement => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const propsOut = {
    illustration_5_1_1: {
      classAdded: 'Image_illustration',
      src: 'https://yourails.com/images/illustrations/illustration_5_1_1.png',
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
    illustration_5_2_1: {
      classAdded: 'Image_illustration',
      src: 'https://yourails.com/images/illustrations/illustration_5_2_1.png',
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
    illustration_5_3_1: {
      classAdded: 'Image_illustration',
      src: 'https://yourails.com/images/illustrations/illustration_5_3_1.png',
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
    illustration_5_4_1: {
      classAdded: 'Image_illustration',
      src: 'https://yourails.com/images/illustrations/illustration_5_4_1.png',
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
    <div className='HowItWorksSep'>
      <h2 className='_title p_2_0_1_0'>
        {DICTIONARY['Service_works_simply'][language]}
      </h2>
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
                <Image {...propsOut.illustration_5_1_1} />
              </div>
              <div className='_image'>
                <Image {...propsOut.illustration_5_2_1} />
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
                <Image {...propsOut.illustration_5_3_1} />
              </div>
              <div className='_image'>
                <Image {...propsOut.illustration_5_4_1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

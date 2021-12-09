import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IconReact } from './IconReact'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface ServiceFunctionsSepArgs {}

export const ServiceFunctionsSep: React.FunctionComponent<ServiceFunctionsSepArgs> =
  (props: ServiceFunctionsSepArgs): ReactElement => {
    const { language } = useSelector((store2: IRootStore) => store2)

    const propsOut = {
      iconFunction1Props: {
        icon: 'BsPersonPlus',
        icon2: null,
        classAdded: 'IconReact_HiUsers',
      },
      iconFunction2Props: {
        icon: 'FaExchangeAlt',
        icon2: null,
        classAdded: 'IconReact_BsPiggyBank',
      },
      iconFunction3Props: {
        icon: 'FaChalkboardTeacher',
        icon2: null,
        classAdded: 'IconReact_AiOutlineShareAlt',
      },
      iconFunction4Props: {
        icon: 'MdLanguage',
        icon2: null,
        classAdded: 'IconReact_MdLanguage2',
      },
    }

    return (
      <div className='ServiceFunctionsSep'>
        <div className='__textBlock'>
          <div className='_row'>
            <div className='_col _m_0p5 _flex_1 _bg_color_1 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {
                  DICTIONARY['Expand_your_circle_of_friends_by_interests'][
                    language
                  ]
                }
              </div>
              <div className='_iconValue'>
                <IconReact {...propsOut.iconFunction1Props} />
              </div>
            </div>
            <div className='_col _m_0p5 _flex_1 _bg_color_2 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Get_answers_and_knowledge_from_people'][language]}
              </div>
              <div className='_iconValue'>
                <IconReact {...propsOut.iconFunction2Props} />
              </div>
            </div>
            <div className='_col _m_0p5 _flex_1 _bg_color_3 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Become_an_expert_for_others'][language]}
              </div>
              <div className='_iconValue'>
                <IconReact {...propsOut.iconFunction3Props} />
              </div>
            </div>
            <div className='_col _m_0p5 _flex_1 _bg_color_4 _asym_corners p_1_2'>
              <div className='_text'>
                {DICTIONARY['Chat_on_your_topics_in_all_languages'][language]}
              </div>
              <div className='_iconValue'>
                <IconReact {...propsOut.iconFunction4Props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

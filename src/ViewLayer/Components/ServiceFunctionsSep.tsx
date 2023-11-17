import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { IconYrl } from '../ComponentsLibrary/IconYrl/IconYrl'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface ServiceFunctionsSepArgs {}

export const ServiceFunctionsSep: React.FunctionComponent<
  ServiceFunctionsSepArgs
> = (props: ServiceFunctionsSepArgs): ReactElement => {
  const { language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    iconFunction1Props: {
      icon: 'BsFillPersonPlusFill',
      icon2: null,
      classAdded: 'IconReact_Function1',
    },
    iconFunction2Props: {
      icon: 'FaExchangeAlt',
      icon2: null,
      classAdded: 'IconReact_Function2',
    },
    iconFunction3Props: {
      icon: 'FaUserNinja',
      icon2: null,
      classAdded: 'IconReact_Function3',
    },
    iconFunction4Props: {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconReact_Function4',
    },
  }

  return (
    <div className='ServiceFunctionsSep'>
      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col _m_0p5 _flex_1 _bg_color_1 _asym_corners m_0_1_0_0 p_1_1'>
            <div className='_text'>
              {DICTIONARY['Find_people_by_knowledge_and_skills'][language]}
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconFunction1Props} />
            </div>
          </div>
          <div className='_col _m_0p5 _flex_1 _bg_color_2 _asym_corners m_0_1_0_0 p_1_1'>
            <div className='_text'>
              {
                DICTIONARY['Get_answers_to_your_questions_and_information'][
                  language
                ]
              }
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconFunction2Props} />
            </div>
          </div>
          <div className='_col _m_0p5 _flex_1 _bg_color_3 _asym_corners m_0_1_0_0 p_1_1'>
            <div className='_text'>
              {DICTIONARY['Become_an_expert_for_others'][language]}
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconFunction3Props} />
            </div>
          </div>
          <div className='_col _m_0p5 _flex_1 _bg_color_4 _asym_corners p_1_1'>
            <div className='_text'>
              {DICTIONARY['Chat_on_your_topics_in_all_languages'][language]}
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconFunction4Props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

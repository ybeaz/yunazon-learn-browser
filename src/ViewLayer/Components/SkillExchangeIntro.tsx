import React from 'react'
import { useSelector } from 'react-redux'

import { IconReact } from './IconReact'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface SkillExchangeIntroArgs {}

export const SkillExchangeIntro: React.FunctionComponent<SkillExchangeIntroArgs> =
  (props: SkillExchangeIntroArgs): JSX.Element => {
    const { language } = useSelector((store2: IRootStore) => store2)

    const aiOutlineQuestionCircleProps = {
      icon: 'AiOutlineQuestionCircle',
      icon2: null,
      classAdded: 'IconReact_AiOutlineQuestionCircle',
    }
    const MdLanguageProps = {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconReact_MdLanguage',
    }

    const ioChatbubblesOutlineProps = {
      icon: 'IoChatbubblesOutline',
      icon2: null,
      classAdded: 'IconReact_IoChatbubblesOutline',
    }

    const biSelectMultipleProps = {
      icon: 'BiSelectMultiple',
      icon2: null,
      classAdded: 'IconReact_BiSelectMultiple',
    }

    return (
      <div className='SkillExchangeIntro'>
        <h1 className='__title01'>
          {DICTIONARY['Welcome_to_Experience_Exchange_Service'][language]}
        </h1>
        <h2 className='__title02'>
          {DICTIONARY['Over_3_million_members'][language]}
        </h2>

        <div className='__textBlock'>
          <div className='_row'>
            <div className='_col _bg_color_1'>
              <div className='_text'>
                {DICTIONARY['Get_intro_knowledge_and_answers'][language]}
              </div>
            </div>
            <div className='_col _bg_color_2'>
              <div className='_text'>
                {DICTIONARY['Share_your_knowledge_and_skills'][language]}
              </div>
            </div>
            <div className='_col _bg_color_3'>
              <div className='_text'>
                {DICTIONARY['Make_friends_in_different_regions'][language]}
              </div>
            </div>
          </div>
          <div className='_text'>
            {DICTIONARY['You_can_find_a_user'][language]}
          </div>
          <ul className='_listActions'>
            <li className='_action'>
              <IconReact {...aiOutlineQuestionCircleProps} />
              <div className='_textLi'>
                {DICTIONARY['required_knowledge'][language]}
              </div>
            </li>
            <li className='_action'>
              <IconReact {...MdLanguageProps} />
              <div className='_textLi'>
                {DICTIONARY['language_of_communication'][language]}
              </div>
            </li>
            <li className='_action'>
              <IconReact {...ioChatbubblesOutlineProps} />
              <div className='_textLi'>
                {DICTIONARY['mean_of_communication'][language]}
              </div>
            </li>
            <li className='_action'>
              <IconReact {...biSelectMultipleProps} />
              <div className='_textLi'>
                {DICTIONARY['other_criteria'][language]}
              </div>
            </li>
          </ul>
          <div className='_textAcademy'>
            <div className='_textLi'>
              {DICTIONARY['You_can_also_host_or_take_video_lessons'][language]}
            </div>
          </div>
        </div>
      </div>
    )
  }

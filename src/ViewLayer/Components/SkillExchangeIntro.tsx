import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface SkillExchangeIntroArgs {}

export const SkillExchangeIntro: React.FunctionComponent<SkillExchangeIntroArgs> =
  (props: SkillExchangeIntroArgs): JSX.Element => {
    const { language } = useSelector((store2: IRootStore) => store2)

    return (
      <div className='SkillExchangeIntro'>
        <h1 className='__title01'>
          {DICTIONARY['Welcome_to_Online_Skills_Exchange_Community'][language]}
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
              {DICTIONARY['required_knowledge'][language]}
            </li>
            <li className='_action'>
              {DICTIONARY['language_of_communication'][language]}
            </li>
            <li className='_action'>
              {DICTIONARY['mean_of_communication'][language]}
            </li>
            <li className='_action'>
              {DICTIONARY['other_criteria'][language]}
            </li>
          </ul>
          <div className='_text'>
            {DICTIONARY['You_will_have_a_chance_to_hear'][language]}
          </div>
          <div className='_text'>
            {DICTIONARY['We_also_host_video_lessons_tests'][language]}
          </div>
        </div>
      </div>
    )
  }

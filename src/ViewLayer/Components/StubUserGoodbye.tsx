import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface StubUserGoodbyeArgs {}

export const StubUserGoodbye: React.FunctionComponent<StubUserGoodbyeArgs> = (
  props: StubUserGoodbyeArgs
): ReactElement => {
  const { language } = useSelector((store2: IRootStore) => store2)

  return (
    <div className='StubUserGoodbye'>
      <h1 className='_h1'>
        {DICTIONARY.This_functionality_is_under_development[language]}
      </h1>
      <div className='_text p_1_0_0_0'>
        {DICTIONARY.We_are_currently_looking_for_support_and_feedback[language]}
      </div>
      <div className='_text'>
        {DICTIONARY.If_you_have_any_ideas_or_opinions[language]}
      </div>
      <div className='_text p_1_0_0_0'>
        {DICTIONARY.please_share_them_with_us[language]}
      </div>
      <div className='_text'>{DICTIONARY.Our_contacts[language]}:</div>
      <div className='_text'>
        {DICTIONARY.Email[language]}
        {': '}
        <a href='mailto: akruglov2000@gmail.com' target='_blank'>
          akruglov2000@gmail.com
        </a>
      </div>
      <div className='_text'>{DICTIONARY.Tel[language]}: +1 650 7 410014</div>
    </div>
  )
}

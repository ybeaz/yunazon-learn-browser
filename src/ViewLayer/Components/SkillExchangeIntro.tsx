import React from 'react'
import { useSelector } from 'react-redux'

import { Image } from './Image'
import { Button } from './Button'
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

    const buttonContinueProps = {
      classAdded: 'Button_сontinueIntroSep',
      icon: 'MdForward',
      icon2: null,
      captureLeft: DICTIONARY['Continue'][language],
      captureRight: '',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          { childName: 'SkillExchangeIntro', isActive: false, childProps: {} },
        ],
      },
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
    }

    const collageImageFace = {
      classAdded: 'Image_collageImageFace',
      src: 'https://yourails.com/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg',
    }

    const collageImageIndustries = {
      classAdded: 'Image_collageImageIndustries',
      src: 'https://yourails.com/images/collage-icon-industries-211122-YxY-51.jpg',
    }

    const buttonNextProps = {
      ...buttonContinueProps,
      captureLeft: DICTIONARY['Next'][language],
    }

    return (
      <div className='SkillExchangeIntro'>
        <h1 className='__title01'>
          {DICTIONARY['Knowledge_and_experience'][language]}{' '}
          {DICTIONARY['directly_from_people'][language]}
        </h1>
        <h2 className='__title02'>
          {DICTIONARY['Over_3_million_members'][language]}
        </h2>
        <div className='__textBlock'>
          <div className='_row p_2_0'>
            <div className='_col _bg_color_1'>
              <div className='_text'>
                {DICTIONARY['Get_intro_knowledge_and_answers'][language]}
              </div>
            </div>
            <div className='_col _bg_color_2'>
              <div className='_text'>
                {DICTIONARY['Make_friends_in_different_regions'][language]}
              </div>
            </div>
            <div className='_col _bg_color_3'>
              <div className='_text'>
                {DICTIONARY['Share_your_knowledge'][language]}{' '}
                <br className='_mobileVisible' />
                {DICTIONARY['and_skills'][language]}
              </div>
            </div>
          </div>
        </div>

        <div className='_button _mobileVisible'>
          <Button {...buttonContinueProps} />
        </div>

        <div className='__textBlock'>
          <div className='_text'>
            {DICTIONARY['You_can_find_a_user'][language]}
          </div>
          <ul className='_listActions'>
            <li className='_action'>
              <IconReact {...aiOutlineQuestionCircleProps} />
              <div className='_textLi'>
                {DICTIONARY['required_information'][language]}
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
          <div className='_row p_2_0'>
            <div className='_col _center _p_0_1'>
              <h2 className='_titleSection'>
                Users are ready to start a conversation about your topic.
                Everybody is protected
              </h2>
              <Image {...collageImageFace} />
            </div>
            <div className='_col _center _p_0_1'>
              <h2 className='_titleSection'>
                There are people for all major topics. You don't need to wait
              </h2>
              <Image {...collageImageIndustries} />
            </div>
          </div>
          <div className='_row p_2_0'>
            <div className='_col _center'>
              <h2 className='_titleSection'>
                You can find a person of your interests who is ready to answer
                your question right now
              </h2>
            </div>
          </div>
        </div>
        <div className='_button'>
          <Button {...buttonNextProps} />
        </div>
      </div>
    )
  }

/*
  Showing your image is your preference. Everybody is protected
*/

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

    const mdOutlineBorderInnerProps = {
      icon: 'MdOutlineBorderInner',
      icon2: null,
      classAdded: 'IconReact_MdOutlineBorderInner',
    }
    const mdPauseProps = {
      icon: 'MdPause',
      icon2: null,
      classAdded: 'IconReact_MdPause',
    }
    const continueProps = {
      icon: 'FaRegSmileWink',
      icon2: null,
      classAdded: 'IconReact_FaRegSmileWink',
    }
    const riVoiceprintFillProps = {
      icon: 'RiVoiceprintFill',
      icon2: null,
      classAdded: 'IconReact_RiVoiceprintFill',
    }
    const mdDevicesOtherProps = {
      icon: 'MdDevicesOther',
      icon2: null,
      classAdded: 'IconReact_MdDevicesOther',
    }
    const mdPhonelinkSetupProps = {
      icon: 'MdPhonelinkSetup',
      icon2: null,
      classAdded: 'IconReact_MdPhonelinkSetup',
    }
    const mdOpenInBrowserProps = {
      icon: 'MdOpenInBrowser',
      icon2: null,
      classAdded: 'IconReact_MdOpenInBrowser',
    }
    const mdArrowForwardIosProps = {
      icon: 'MdArrowRight',
      icon2: null,
      classAdded: 'IconReact_ArrowRight',
    }
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

    const buttonNextProps = {
      ...buttonContinueProps,
      captureLeft: DICTIONARY['Next'][language],
    }

    const collageImageFace = {
      classAdded: 'Image_collageImageFace',
      src: 'https://yourails.com/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          { childName: 'SkillExchangeIntro', isActive: false, childProps: {} },
        ],
      },
    }

    const collageImageIndustries = {
      classAdded: 'Image_collageImageIndustries',
      src: 'https://yourails.com/images/collage-icon-industries-211122-YxY-51.jpg',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          { childName: 'SkillExchangeIntro', isActive: false, childProps: {} },
        ],
      },
    }

    return (
      <div className='SkillExchangeIntro'>
        <h1 className='__title01'>
          {DICTIONARY['Knowledge_and_experience'][language]}{' '}
          {DICTIONARY['directly_from_people'][language]}
        </h1>

        <div className='__textBlock'>
          <div className='_row'>
            <div className='_col _p2_Media'>
              <h2 className='__title02'>
                {DICTIONARY['Over_3_million_members'][language]}
              </h2>
            </div>
          </div>
        </div>

        <div className='__textBlock'>
          <div className='_row p_2_0_0_0'>
            <div className='_col'>
              <h2 className='_h2'>
                {
                  DICTIONARY[
                    'Enjoy_good_company_while_receiving_information_and_giving_help'
                  ][language]
                }
                :
              </h2>
            </div>
          </div>
          <div className='_row p_2_0'>
            <div className='_col _flex_1 _bg_color_1 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Get_answers_and_knowledge_in_real_time'][language]}
              </div>
            </div>
            <div className='_col _flex_1 _bg_color_2 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Share_your_knowledge'][language]}{' '}
                {DICTIONARY['and_skills'][language]}
              </div>
            </div>
            <div className='_col _flex_1 _bg_color_3 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Make_acquaintances_by_interests'][language]}
              </div>
            </div>
            <div className='_col _flex_1 _bg_color_4 _asym_corners p_1_2'>
              <div className='_text'>
                {
                  DICTIONARY['Communicate_and_practice_foreign_languages'][
                    language
                  ]
                }
              </div>
            </div>
          </div>
        </div>
        <div className='_button _mobileVisible'>
          <Button {...buttonContinueProps} />
        </div>

        <div className='__textBlock'>
          <div className='_row _p5_Media'>
            <div className='_col'>
              <h2 className='_h2'>How does it work?</h2>
            </div>
          </div>
          <div className='_row _p6_Media'>
            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>Choose</div>
              <div className='_iconAndText'>
                <IconReact {...mdOpenInBrowserProps} />
                <div className='_text'>browser app</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...mdPhonelinkSetupProps} />
                <div className='_text'>mobile app</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...mdDevicesOtherProps} />
                <div className='_text'>other</div>
              </div>
            </div>
            <div className='_col'>
              <IconReact {...mdArrowForwardIosProps} />
            </div>
            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>Select</div>
              <div className='_iconAndText'>
                <IconReact {...aiOutlineQuestionCircleProps} />
                <div className='_text'>category</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...MdLanguageProps} />
                <div className='_text'>language</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...biSelectMultipleProps} />
                <div className='_text'>
                  {DICTIONARY['other_criteria'][language]}
                </div>
              </div>
            </div>

            <div className='_col'>
              <IconReact {...mdArrowForwardIosProps} />
            </div>
            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>Ask and offer help</div>
              <div className='_iconAndText'>
                <IconReact {...ioChatbubblesOutlineProps} />
                <div className='_text'>messeging</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...riVoiceprintFillProps} />
                <div className='_text'>voice conversation</div>
              </div>
            </div>

            <div className='_col'>
              <IconReact {...mdArrowForwardIosProps} />
            </div>
            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>Manage involvment</div>
              <div className='_iconAndText'>
                <IconReact {...continueProps} />
                <div className='_text'>enjoy</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...mdPauseProps} />
                <div className='_text'>pause</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...mdOutlineBorderInnerProps} />
                <div className='_text'>limit</div>
              </div>
            </div>
          </div>
        </div>

        <div className='__textBlock'>
          <div className='_row _p1_Media'>
            <div className='_col'>
              <h2 className='_h2'>Features</h2>
            </div>
          </div>
          <div className='_row'>
            <div className='_col _flex_1 _center _p4_Media'>
              <h2 className='_text'>
                {DICTIONARY['real_people_is_talking_to_you'][language]}{' '}
                {DICTIONARY['Everybody_is_protected'][language]}
              </h2>
              <Image {...collageImageFace} />
            </div>
            <div className='_col _flex_1 _center _p3_Media'>
              <h2 className='_text'>
                {DICTIONARY['There_are_people_for_all_major_topics'][language]}{' '}
                {DICTIONARY['You_don_t_need_to_wait'][language]}
              </h2>
              <Image {...collageImageIndustries} />
            </div>
          </div>

          <div className='_row p_2_0_1_0'>
            <div className='_col'>
              <h2 className='_text'>
                {
                  DICTIONARY['You_can_find_a_person_of_your_interests'][
                    language
                  ]
                }{' '}
                {
                  DICTIONARY['who_is_ready_to_answer_your_question_right_now'][
                    language
                  ]
                }
              </h2>
            </div>
          </div>
        </div>
        <div className='_button p_3_0_2_0'>
          <Button {...buttonNextProps} />
        </div>
      </div>
    )
  }

/*
  Showing your image is your preference. Everybody is protected
  Messeging or voice chatting don't need to show your image
*/

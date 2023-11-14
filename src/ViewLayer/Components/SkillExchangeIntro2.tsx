import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { Image } from '../ComponentsLibrary/Image'
import { Button } from '../ComponentsLibrary/Button'
import { IconReact } from '../ComponentsLibrary/IconReact'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface SkillExchangeIntro2Args {}

export const SkillExchangeIntro2: React.FunctionComponent<
  SkillExchangeIntro2Args
> = (props: SkillExchangeIntro2Args): ReactElement => {
  const { language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    iconRiVoiceprintFillProps: {
      icon: 'RiVoiceprintFill',
      icon2: null,
      classAdded: 'IconReact_RiVoiceprintFill',
    },
    iconMdArrowForwardIosProps: {
      icon: 'MdArrowRight',
      icon2: null,
      classAdded: 'IconReact_ArrowRight',
    },
    iconAiOutlineQuestionCircleProps: {
      icon: 'AiOutlineQuestionCircle',
      icon2: null,
      classAdded: 'IconReact_AiOutlineQuestionCircle',
    },
    iconMdLanguageProps: {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconReact_MdLanguage',
    },
    iconIoLanguageSharpProps: {
      icon: 'IoLanguageSharp',
      icon2: null,
      classAdded: 'IconReact_IoLanguageSharp',
    },
    iconIoChatbubblesOutlineProps: {
      icon: 'IoChatbubblesOutline',
      icon2: null,
      classAdded: 'IconReact_IoChatbubblesOutline',
    },
    iconBiSelectMultipleProps: {
      icon: 'BiSelectMultiple',
      icon2: null,
      classAdded: 'IconReact_BiSelectMultiple',
    },
    iconBsPiggyBankProps: {
      icon: 'BsPiggyBank',
      icon2: null,
      classAdded: 'IconReact_BsPiggyBank',
    },
    iconAiOutlineShareAltProps: {
      icon: 'AiOutlineShareAlt',
      icon2: null,
      classAdded: 'IconReact_AiOutlineShareAlt',
    },
    iconHiUsersProps: {
      icon: 'HiUsers',
      icon2: null,
      classAdded: 'IconReact_HiUsers',
    },
    iconMdLanguageProps2: {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconReact_MdLanguage2',
    },
    iconBsFillPersonCheckFillProps: {
      icon: 'BsFillPersonCheckFill',
      icon2: null,
      classAdded: 'IconReact_BsFillPersonCheckFill',
    },
    iconFaUsersCogProps: {
      icon: 'FaUsersCog',
      icon2: null,
      classAdded: 'IconReact_FaUsersCog',
    },
    iconMdHomeRepairServiceProps: {
      icon: 'MdHomeRepairService',
      icon2: null,
      classAdded: 'IconReact_MdHomeRepairService',
    },
    iconFaUsersProps: {
      icon: 'FaUsers',
      icon2: null,
      classAdded: 'IconReact_FaUsers',
    },
    iconBiVideoPlusProps: {
      icon: 'BiVideoPlus',
      icon2: null,
      classAdded: 'IconReact_BiVideoPlus',
    },
    icon6Props: {
      icon: '',
      icon2: null,
      classAdded: 'IconReact_',
    },
    buttonContinueProps: {
      classAdded: 'Button_сontinueIntroSep',
      icon: 'MdForward',
      icon2: null,
      captureLeft: DICTIONARY['Continue'][language],
      captureRight: '',
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
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    buttonNextProps: {
      classAdded: 'Button_сontinueIntroSep',
      icon: 'MdForward',
      icon2: null,
      captureLeft: DICTIONARY['Next'][language],
      captureRight: '',
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
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    illustration_5_1_1: {
      classAdded: 'Image_illustration',
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_1_1.png`,
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
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_2_1.png`,
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
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_3_1.png`,
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
      src: `${SERVERS_MAIN.remote}/images/illustrations/illustration_5_4_1.png`,
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
    collageImageFaceProps: {
      classAdded: 'Image_collageImageFace',
      src: `${SERVERS_MAIN.remote}/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg`,
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

    collageImageIndustriesProps: {
      classAdded: 'Image_collageImageIndustries',
      src: `${SERVERS_MAIN.remote}/images/collage-icon-industries-211122-YxY-51.jpg`,
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
    <div className='SkillExchangeIntro2'>
      {/* Titles */}
      <h1 className='__title01'>
        {DICTIONARY['Knowledge_and_experience'][language]}{' '}
        {DICTIONARY['directly_from_people'][language]}
      </h1>

      <h1 className='__title02'>
        {DICTIONARY['Useful_and_interesting_contacts'][language]}
      </h1>

      {/* Numbers */}
      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col _p2_Media'>
            <div className='_statistics'>
              {DICTIONARY['_3_million_members'][language]}
            </div>
            <div className='_statistics'>
              {DICTIONARY['_175_countries'][language]}
            </div>
            <div className='_statistics'>
              {DICTIONARY['_11000_knowledges_and_skills'][language]}
            </div>
          </div>
        </div>
      </div>

      {/* Functions */}
      <div className='__textBlock'>
        <div className='_row p_2_0'>
          <div className='_col _m_0p5 _flex_1 _bg_color_1 _asym_corners m_0_1_0_0 p_1_2'>
            <div className='_text'>
              {DICTIONARY['Find_people_by_knowledge_and_skills'][language]}
            </div>
            <div className='_iconValue'>
              <IconReact {...propsOut.iconHiUsersProps} />
            </div>
          </div>
          <div className='_col _m_0p5 _flex_1 _bg_color_2 _asym_corners m_0_1_0_0 p_1_2'>
            <div className='_text'>
              {
                DICTIONARY['Get_answers_to_your_questions_and_information'][
                  language
                ]
              }
            </div>
            <div className='_iconValue'>
              <IconReact {...propsOut.iconBsPiggyBankProps} />
            </div>
          </div>
          <div className='_col _m_0p5 _flex_1 _bg_color_3 _asym_corners m_0_1_0_0 p_1_2'>
            <div className='_text'>
              {DICTIONARY['Become_an_expert_for_others'][language]}
            </div>
            <div className='_iconValue'>
              <IconReact {...propsOut.iconAiOutlineShareAltProps} />
            </div>
          </div>
          <div className='_col _m_0p5 _flex_1 _bg_color_4 _asym_corners p_1_2'>
            <div className='_text'>
              {DICTIONARY['Chat_on_your_topics_in_all_languages'][language]}
            </div>
            <div className='_iconValue'>
              <IconReact {...propsOut.iconMdLanguageProps2} />
            </div>
          </div>
        </div>
      </div>
      <div className='_button _mobileVisible'>
        <Button {...propsOut.buttonContinueProps} />
      </div>

      {/* How it works */}
      <div className='__textBlock'>
        <div className='_row _p5_Media'>
          <div className='_col'>
            <h2 className='_h2'>
              {DICTIONARY['Service_works_simply'][language]}
            </h2>
          </div>
        </div>
        <div className='_row _p6_Media'>
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

      {/* Features */}
      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col'>
            <h2 className='_h2'>{DICTIONARY['Features'][language]}</h2>
          </div>
        </div>
        <div className='_row _p6_Media'>
          <div className='_col _flex_1 _center _p4_Media _m1_Media'>
            <h2 className='_text'>
              {DICTIONARY['real_people_is_talking_to_you'][language]}{' '}
              {DICTIONARY['Everybody_is_protected'][language]}
            </h2>
            <Image {...propsOut.collageImageFaceProps} />
          </div>
          <div className='_col _flex_1 _center _p3_Media _m1_Media'>
            <h2 className='_text'>
              {DICTIONARY['There_are_people_for_all_major_topics'][language]}{' '}
              {DICTIONARY['You_don_t_need_to_wait'][language]}
            </h2>
            <Image {...propsOut.collageImageIndustriesProps} />
          </div>
        </div>

        <div className='_row p_2_0_1_0'>
          <div className='_col'>
            <h2 className='_text'>
              {DICTIONARY['You_can_find_a_person_of_your_interests'][language]}{' '}
              {
                DICTIONARY['who_is_ready_to_answer_your_topic_right_now'][
                  language
                ]
              }
            </h2>
          </div>
        </div>
      </div>
      <div className='_button p_3_0_2_0'>
        <Button {...propsOut.buttonNextProps} />
      </div>
    </div>
  )
}

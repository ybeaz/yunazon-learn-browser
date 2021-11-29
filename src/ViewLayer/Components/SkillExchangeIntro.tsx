import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { Image } from './Image'
import { Button } from './Button'
import { IconReact } from './IconReact'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface SkillExchangeIntroArgs {}

export const SkillExchangeIntro: React.FunctionComponent<SkillExchangeIntroArgs> =
  (props: SkillExchangeIntroArgs): ReactElement => {
    const { language } = useSelector((store2: IRootStore) => store2)

    const iconAiOutlineSettingProps = {
      icon: 'AiOutlineSetting',
      icon2: null,
      classAdded: 'IconReact_AiOutlineSetting',
    }
    const iconMdPauseProps = {
      icon: 'MdPause',
      icon2: null,
      classAdded: 'IconReact_MdPause',
    }
    const iconContinueProps = {
      icon: 'FaRegSmileWink',
      icon2: null,
      classAdded: 'IconReact_FaRegSmileWink',
    }
    const iconRiVoiceprintFillProps = {
      icon: 'RiVoiceprintFill',
      icon2: null,
      classAdded: 'IconReact_RiVoiceprintFill',
    }
    const iconMdDevicesOtherProps = {
      icon: 'MdDevicesOther',
      icon2: null,
      classAdded: 'IconReact_MdDevicesOther',
    }
    const iconMdPhonelinkSetupProps = {
      icon: 'MdPhonelinkSetup',
      icon2: null,
      classAdded: 'IconReact_MdPhonelinkSetup',
    }
    const iconMdOpenInBrowserProps = {
      icon: 'MdOpenInBrowser',
      icon2: null,
      classAdded: 'IconReact_MdOpenInBrowser',
    }
    const iconMdArrowForwardIosProps = {
      icon: 'MdArrowRight',
      icon2: null,
      classAdded: 'IconReact_ArrowRight',
    }
    const iconAiOutlineQuestionCircleProps = {
      icon: 'AiOutlineQuestionCircle',
      icon2: null,
      classAdded: 'IconReact_AiOutlineQuestionCircle',
    }
    const iconMdLanguageProps = {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconReact_MdLanguage',
    }
    const iconIoLanguageSharpProps = {
      icon: 'IoLanguageSharp',
      icon2: null,
      classAdded: 'IconReact_IoLanguageSharp',
    }

    const iconIoChatbubblesOutlineProps = {
      icon: 'IoChatbubblesOutline',
      icon2: null,
      classAdded: 'IconReact_IoChatbubblesOutline',
    }

    const iconBiSelectMultipleProps = {
      icon: 'BiSelectMultiple',
      icon2: null,
      classAdded: 'IconReact_BiSelectMultiple',
    }

    const iconBsPiggyBankProps = {
      icon: 'BsPiggyBank',
      icon2: null,
      classAdded: 'IconReact_BsPiggyBank',
    }

    const iconAiOutlineShareAltProps = {
      icon: 'AiOutlineShareAlt',
      icon2: null,
      classAdded: 'IconReact_AiOutlineShareAlt',
    }

    const iconHiUsersProps = {
      icon: 'HiUsers',
      icon2: null,
      classAdded: 'IconReact_HiUsers',
    }

    const iconMdLanguageProps2 = {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconReact_MdLanguage2',
    }

    const iconBsFillPersonCheckFillProps = {
      icon: 'BsFillPersonCheckFill',
      icon2: null,
      classAdded: 'IconReact_BsFillPersonCheckFill',
    }

    const iconFaUsersCogProps = {
      icon: 'FaUsersCog',
      icon2: null,
      classAdded: 'IconReact_FaUsersCog',
    }

    const iconMdHomeRepairServiceProps = {
      icon: 'MdHomeRepairService',
      icon2: null,
      classAdded: 'IconReact_MdHomeRepairService',
    }

    const iconFaUsersProps = {
      icon: 'FaUsers',
      icon2: null,
      classAdded: 'IconReact_FaUsers',
    }

    const iconBiVideoPlusProps = {
      icon: 'BiVideoPlus',
      icon2: null,
      classAdded: 'IconReact_BiVideoPlus',
    }

    const icon6Props = {
      icon: '',
      icon2: null,
      classAdded: 'IconReact_',
    }

    const icon7Props = {
      icon: '',
      icon2: null,
      classAdded: 'IconReact_',
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
          {DICTIONARY['Knowledge_Exchange_and_Useful_Contacts'][language]}
        </h1>

        <h1 className='__title02'>
          {DICTIONARY['Knowledge_and_experience'][language]}{' '}
          {DICTIONARY['directly_from_people'][language]}
        </h1>

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

        <div className='__textBlock'>
          {/* <div className='_row p_2_0_0_0'>
            <div className='_col'>
              <h2 className='_h2'>
                {
                  DICTIONARY[
                    'Communicate_receiving_information_and_giving_help'
                  ][language]
                }
                :
              </h2>
            </div>
          </div> */}
          <div className='_row p_2_0'>
            <div className='_col _flex_1 _bg_color_1 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {
                  DICTIONARY['Find_and_add_people_contacts_by_interests'][
                    language
                  ]
                }
              </div>
              <div className='_iconValue'>
                <IconReact {...iconHiUsersProps} />
              </div>
            </div>
            <div className='_col _flex_1 _bg_color_2 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Get_answers_and_knowledge_in_real_time'][language]}
              </div>
              <div className='_iconValue'>
                <IconReact {...iconBsPiggyBankProps} />
              </div>
            </div>
            <div className='_col _flex_1 _bg_color_3 _asym_corners m_0_1_0_0 p_1_2'>
              <div className='_text'>
                {DICTIONARY['Share_your_knowledge'][language]}{' '}
                {DICTIONARY['and_skills'][language]}
              </div>
              <div className='_iconValue'>
                <IconReact {...iconAiOutlineShareAltProps} />
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
              <div className='_iconValue'>
                <IconReact {...iconMdLanguageProps2} />
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
              <h2 className='_h2'>
                {DICTIONARY['Service_works_simply'][language]}
              </h2>
            </div>
          </div>
          <div className='_row _p6_Media'>
            {/* <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>{DICTIONARY['Choose'][language]}</div>
              <div className='_iconAndText'>
                <IconReact {...iconMdOpenInBrowserProps} />
                <div className='_text'>
                  {DICTIONARY['browser_app'][language]}
                </div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconMdPhonelinkSetupProps} />
                <div className='_text'>
                  {DICTIONARY['mobile_app'][language]}
                </div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconMdDevicesOtherProps} />
                <div className='_text'>{DICTIONARY['other'][language]}</div>
              </div>
            </div> */}

            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>
                {DICTIONARY['Choose'][language]} {DICTIONARY['topic'][language]}
                {' *'}
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconAiOutlineQuestionCircleProps} />
                <div className='_text'>{DICTIONARY['category'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconIoLanguageSharpProps} />
                <div className='_text'>{DICTIONARY['language'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconBiSelectMultipleProps} />
                <div className='_text'>
                  {DICTIONARY['other_criteria'][language]}
                </div>
              </div>
            </div>

            <div className='_col'>
              <IconReact {...iconMdArrowForwardIosProps} />
            </div>

            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>
                {DICTIONARY['Get_chat_list'][language]}
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconFaUsersProps} />
                <div className='_text'>
                  {DICTIONARY['A_list_to_chat_is_created'][language]}
                </div>
              </div>
            </div>

            <div className='_col'>
              <IconReact {...iconMdArrowForwardIosProps} />
            </div>

            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>{DICTIONARY['Select'][language]}</div>
              <div className='_iconAndText'>
                <IconReact {...iconBsFillPersonCheckFillProps} />
                <div className='_text'>{DICTIONARY['person'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconMdLanguageProps} />
                <div className='_text'>
                  {DICTIONARY['by_country'][language]}
                </div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconFaUsersCogProps} />
                <div className='_text'>
                  {DICTIONARY['by_ageGroup'][language]}
                </div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconMdHomeRepairServiceProps} />
                <div className='_text'>
                  {DICTIONARY['reputation'][language]}
                </div>
              </div>
            </div>

            <div className='_col'>
              <IconReact {...iconMdArrowForwardIosProps} />
            </div>

            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>
                {DICTIONARY['Ask_question_and_extend_contacts'][language]}
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconIoChatbubblesOutlineProps} />
                <div className='_text'>{DICTIONARY['messaging'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconRiVoiceprintFillProps} />
                <div className='_text'>{DICTIONARY['voice'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconBiVideoPlusProps} />
                <div className='_text'>{DICTIONARY['video'][language]}</div>
              </div>
            </div>

            {/* <div className='_col'>
              <IconReact {...iconMdArrowForwardIosProps} />
            </div>

            <div className='_col _flex_1 _bordered p_1_1'>
              <div className='_text'>{DICTIONARY['Manage'][language]}</div>
              <div className='_iconAndText'>
                <IconReact {...iconContinueProps} />
                <div className='_text'>{DICTIONARY['enjoy'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconMdPauseProps} />
                <div className='_text'>{DICTIONARY['pause'][language]}</div>
              </div>
              <div className='_iconAndText'>
                <IconReact {...iconAiOutlineSettingProps} />
                <div className='_text'>{DICTIONARY['configure'][language]}</div>
              </div>
            </div> */}
          </div>
        </div>

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
              <Image {...collageImageFace} />
            </div>
            <div className='_col _flex_1 _center _p3_Media _m1_Media'>
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
                  DICTIONARY['who_is_ready_to_answer_your_topic_right_now'][
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
  messaging or voice chatting don't need to show your image
*/

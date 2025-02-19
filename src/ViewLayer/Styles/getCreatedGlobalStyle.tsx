import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { ILightness, IAlphas } from 'yourails_common'
import { getBuiltColor } from './getBuiltColor'

interface IGetCreatedGlobalStyle {
  (props: { lightness: ILightness; alphas: IAlphas; theme: string }): any
}

export const CreatedGlobalStyle: IGetCreatedGlobalStyle = ({ lightness, alphas, theme }) => {
  const { darker4, darker3, darker2, darker, middle, lighter, lighter2, lighter3, lighter4 } =
    lightness

  const {
    clearer4,
    clearer3,
    clearer2,
    clearer,
    medial,
    opaciter,
    opaciter2,
    opaciter3,
    opaciter4,
  } = alphas

  if (!theme) return null

  const getColor = getBuiltColor(theme, 1, middle)

  const output = createGlobalStyle`

    .Icon_TagsTooltip ._icon,
    .PlayerPanel ._capture,
    .AvatarPlusInfo,
    .AvatarPlusInfo > ._link > ._captureText,
    .ModulesBody.ModulesBody_AcademyMatrixBody > ._h2Wrapper > ._link >._h2,
    .LogoGroup,
    .AbInCircle,
    .Button_MdClose ._in {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
    }

    .LogoGroup_StubForUserResearch .__div,
    .LogoGroup_StubForUserResearch .__div ._img,
    .LogoGroup_SkillsExchangeMatrix .__div,
    .LogoGroup_SkillsExchangeMatrix .__div ._img {
      background-color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
    }

    .SearchFormSep .__searchForm ._row ._linkAdvacedSearch {
      color: ${props2 => getColor(props2, 'colorActive', opaciter2, middle, 'Light')};
    }

    .SelectLanguage__AppLanguage {
      background: ${props2 => getColor(props2, 'colorSecond', medial, middle, 'Light')};
    }

    .SelectLanguage .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      border-color: ${(props2: any) => {
        const DICTIONARY_STYLES: Record<string, any> = {
          Dark: getColor(props2, 'colorSecond', medial, middle),
          Light: getColor(props2, 'colorGrey', opaciter4, middle, 'Light'),
        }
        return DICTIONARY_STYLES[theme]
      }};}

    .SearchFormSep .__titleScreen {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
      background: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .SearchFormSep .__searchForm ._row ._selectElement {
      background-color: ${props2 => getColor(props2, 'colorSecond', 1, middle, 'Light')};
    }

    .SearchFormSep .__searchForm ._row ._selectElement ._range {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
      background: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .SearchFormSep .__searchForm ._row ._selectElement._submitGroup {
      background-color: unset;
    }

    .SkillExchangeIntro ._statistics {
      color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .Select .__selectTag {
      border: solid 1px ${props2 => getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .Select .__Ok {
      background: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .LoaderBlurhash .__text {
      color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .FeatureBar .__tooltipText {
      background: ${props2 => getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .SuccessTried .__tooltipText {
      background: ${props2 => getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .LoaderOverlayYrl .LoaderOverlay__spinner {
      border: 16px solid ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      border-top: 16px solid ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .InputYrl .__input {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      background-color: ${props2 => getColor(props2, 'colorSecondDarker', medial, darker)};
    }

    .InputYrl .__input:active,
    .InputYrl .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      border-color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .Input_ProfileBody_avatar .__input,
    .Input_ProfileBody_avatar .__input:active,
    .Input_ProfileBody_avatar .__input:focus {
      color: ${props2 => 'transparent'};
      border: ${props2 => 'none'};
      border-color: ${props2 => 'none'};
    }

    .Input_userInfoAbout .__input,
    .Input_nameFirst .__input,
    .Input_ageFromToRequired .__input, 
    .Input_descriptionRequired .__input  {
      color: ${props2 => getColor(props2, 'colorFirst', medial, lighter)};
      background-color: ${props2 => getColor(props2, 'colorSecond', lighter, medial, 'Light')};
      border-color: ${props2 => {
        const DICTIONARY_STYLES: Record<string, any> = {
          Dark: getColor(props2, 'colorFirst', medial, lighter4, 'Dark'),
          Light: getColor(props2, 'colorGrey', opaciter4, middle, 'Light'),
        }

        return DICTIONARY_STYLES[theme]
      }};}

    .Input_ageFromToRequired .__input:active,
    .Input_ageFromToRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
      background: ${props2 => getColor(props2, 'colorSecond', lighter, medial, 'Light')};
      border-color: ${props2 => getColor(props2, 'colorActive', medial, middle, 'Dark')};
    }

    .Input_ageFromToRequired .__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
      opacity: 1; /* Firefox */
    }
    
    .Input_ageFromToRequired .__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }
    
    .Input_ageFromToRequired .__input::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }

    .Input_userInfoAbout .__input:active,
    .Input_nameFirst .__input:active,
    .Input_nameFirst .__input:focus,
    .Input_descriptionRequired .__input:active,
    .Input_descriptionRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
      background: ${props2 => getColor(props2, 'colorSecond', medial, lighter, 'Light')};
      border-color: ${props2 => getColor(props2, 'colorActive', medial, middle, 'Dark')};
    }

    .Input_userInfoAbout .__input::placeholder,
    .Input_nameFirst .__input::placeholder,
    .Input_descriptionRequired .__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
      opacity: 1; /* Firefox */
    }
    
    .Input_userInfoAbout .__input:-ms-input-placeholder,
    .Input_nameFirst .__input:-ms-input-placeholder,
    .Input_descriptionRequired .__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }
    
    .Input_userInfoAbout .__input::-ms-input-placeholder,
    .Input_nameFirst .__input::-ms-input-placeholder,
    .Input_descriptionRequired .__input::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }

    .Input_passwordAuth .__input,
    .Input_usernameAuth .__input {
      background: ${props2 => getColor(props2, 'colorFirst', medial, middle, 'Dark')};
    }

    .Input_search .__input {
      border-color: ${props2 => getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .SideNavigation .__content {
      background-color: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .ButtonYrl .__button:active,
    .ButtonYrl .__button:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      border-color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }
    .ButtonYrl ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }
    .ButtonYrl .__tooltipText {
      background: ${props2 => getColor(props2, 'colorSecondLighter2', medial, lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }


    .Button_MdForward .__button,
    .Button_playerUp .__button,
    .Button_summaryUp .__button,
    .Button_articleUp .__button,
    .Button_objectionsUp .__button,
    .Button_NoCancel,
    .Button_create_stage_repeat .__button,
    .Button_summaryIsSummary .__button,
    .Button_summaryIsObjections .__button,
    .Button_PaginationNavigationBackward .__button,
    .Button_PaginationNavigationForward .__button,
    .Button_MdBackward2 .__button,
    .Button_MdBackward3 .__button,
    .Button_MdForward2 .__button,
    .Button_CallForActionMatrix .__button,
    .Button_NextTask .__button,
    .Button_Credit .__button,
    .Button_EditName .__button,
    .Button_ConfirmEditName .__button,
    .Button_Achievements .__button,
    .Button_BackToTopic .__button,
    .Button_UseCertificate .__button,
    .Button_AuthSignInUpBack .__button,
    .Button_AuthSignInUp .__button,
    .Button_сontinueIntroSep .__button,
    .Button_startModule .__button,
    .Button_BackToTop .__button,
    .Button_searchSepActive .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .Button_SignUp .__button {
      background-color: ${props2 => getColor(props2, 'colorGrey', medial, middle)};
    }

    .TextToSpeechYrl ._textToSpeechYrlbuttonsWrapper .__button ._in,
    .Icon_TagsTooltip ._icon,
    .AuthUser .vl-innertext,
    div.ant-tooltip-content  > div > div._contentPlateTooltipContentIsCompleted,
    div.ant-tooltip-content  > div > div._contentPlateTooltipContentTags,
    div.ant-tooltip-content  > div > div._tagsCloudBodyTooltipContentTagButton,
    .TagsCloudBody ._headlineNavLink,
    .Button_downLeft ._in,
    .Button_MdForward ._in,
    .Button_playerUp ._in,
    .Button_summaryUp ._in,
    .Button_articleUp ._in,
    .Button_objectionsUp ._in,
    .Button_NoCancel ._in,
    .Button_create_stage_repeat  ._in,
    .Button_summaryIsSummary  ._in,
    .Button_summaryIsObjections  ._in,
    .Button_PaginationNavigationBackward ._in,
    .Button_PaginationNavigationForward ._in,
    .Button_MdBackward2 ._in,
    .Button_MdBackward3 ._in,
    .Button_MdForward2 ._in,
    .Button_CallForActionMatrix ._in,
    .Button_NextTask ._in,
    .Button_Credit ._in,
    .Button_EditName ._in,
    .Button_ConfirmEditName ._in,
    .Button_Achievements ._in,
    .Button_BackToTopic ._in,
    .Button_UseCertificate ._in,
    .Button_AuthSignInUpBack ._in,
    .Button_AuthSignInUp ._in,
    .Button_сontinueIntroSep ._in,
    .Button_startModule ._in,
    .Button_BackToTop ._in,
    .Button_searchSepActive ._in,
    .Button_ForgetPassword ._in,
    .Button_SignUp ._in,
    .Button_AuthGoogle ._in,
    .Button_AuthVkontakte ._in,
    .Button_AuthFacebook ._in {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle, 'Dark')};
    }

    .Button_AuthGoogle .__button {
      background-color: #dd4b39;
    }

    .Button_AuthVkontakte .__button {
      background-color: #45668e;
    }

    .Button_AuthFacebook .__button {
      background-color: #3b5998;
    }

    .Button_YesConfirm,
    .Button_downLeft .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter3', medial, lighter3, 'Dark')};
    }

    .Button_MdBlock .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter2', medial, lighter2)};
    }

    .Button_MdBlock ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', medial, lighter4)};
    }

    .Button_MdClose .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', medial, lighter4)};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker)};
      background-color: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .IconLabelWithClose {
      color:  ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      background-color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .Button_SiGoogleplay .__button,
    .Button_SiAppstore .__button,
    .Button_MdMenu .__button,
    .Button_AddCourse .__button,
    .Button_ThemeToggle .__button {
      background-color: ${props2 => {
        const DICTIONARY_STYLES: Record<string, any> = {
          Dark: getColor(props2, 'colorSecond', medial, middle),
          Light: 'rgb(245, 246, 250)',
        }

        return DICTIONARY_STYLES[theme]
      }};}

    .Button_SiGoogleplay ._in,
    .Button_SiAppstore ._in,
    .Button_MdMenu ._in,
    .Button_AddCourse ._in,
    .Button_authHeader ._in,
    .Button_ThemeToggle ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .Button_authSideMenu_authorized .__button ._in ._icon,
    .Button_authHeader_authorized .__button ._in ._icon {
      color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .Button_MdPerson .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .Button_MdPerson ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', medial, lighter4)};
    }

    .Button_DeactivateDocument ._in,
    .Button_CourseCreateSubmit ._in,
    .Button_MdSearch ._in {
      color: ${props2 => getColor(props2, 'colorFirstLighter', medial, lighter)};
    }

    .Button_authSideMenu ._in,
    .Button_authHeader ._in,
    .Button_Avatar ._in {
      color: ${props2 => getColor(props2, 'colorGrey', opaciter2, lighter4)};
    }

    .ButtonYrl.Button_authSideMenu .__button ._in ._capture_right {
      color: ${props2 => getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .Button_searchSepPassive .__button {
      background-color: ${props2 => getColor(props2, 'colorGrey', opaciter2, middle)};
    }

    .Button_ForgetPassword .__button {
      background-color: ${props2 => getColor(props2, 'colorGrey', medial, middle)};
    }

    .IconYrl_authUserHeader ._icon {
      color: ${props2 => getColor(props2, 'colorGrey', opaciter2, lighter4)};
    }

    .IconYrl_authUserHeaderActive ._icon {
      color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .ModalFrames {
      background-color: ${props2 => getColor(props2, 'colorGrey', medial, middle)};
    }

    .ModalFrames .__content {
      background-color: ${props2 => {
        const DICTIONARY_STYLES: Record<string, any> = {
          Dark: getColor(props2, 'colorSecond', middle, lighter4),
          Light: getColor(props2, 'colorSecond', medial, middle),
        }

        return DICTIONARY_STYLES[theme]
      }};}

    .AuthUser .form, .AuthUser .bottomContainer {
      background: ${props2 => {
        const DICTIONARY_STYLES: Record<string, any> = {
          Dark: getColor(props2, 'colorGrey', medial, middle),
          Light: getColor(props2, 'colorSecond', medial, middle),
        }
        return DICTIONARY_STYLES[theme]
      }};}
    
    .AuthUser .header2 {
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker)};
    }

    .AuthUser .vl-innertext {
      background: ${props2 => getColor(props2, 'colorGrey', medial, middle)};
    }

    .CheckRadioGroup ._capture {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .CheckRadioGroup .checkmark {
      background-color: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
      border: solid 1.5px ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .TextToSpeechYrl ._textToSpeechYrlbuttonsWrapper .__button,
    .TooltipImageContent._playerPanel_tooltipIsCompleted div._cycle,
    .TooltipImageContent._playerPanel_tooltipTags div._cycle,
    .TooltipImageContent._contentPlate_tooltipIsCompleted div._cycle,
    .TooltipImageContent._contentPlate_tooltipTags div._cycle,
    .CheckRadioGroup input:checked ~ .checkmark {
      background-color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }
      
    .Icon_isCompleted ._icon {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle, 'Green')};
    }


    .TooltipImageContent._playerPanel_tooltipIsCompleted div._cycle,
    .TooltipImageContent._contentPlate_tooltipIsCompleted div._cycle {
      background-color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
    }

    .RadioButton .checkmark:after {
      background: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker, 'Dark')};
    }

    .HeaderFrame {
      background-color: ${props2 => {
        const DICTIONARY_STYLES: Record<string, any> = {
          Dark: getColor(props2, 'colorSecond', medial, middle),
          Light: 'rgb(245, 246, 250)',
        }

        return DICTIONARY_STYLES[theme]
      }};}

    .CertificateFrameA {
      color: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
      background: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
    }

    .Certificate2,
    .Certificate,
    .MainFrame {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      background: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }


    @media print {
      #root {
        background-color: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
        .Certificate2,
        .Certificate {
          background-color: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
        }
      }
    }
  `

  return output
}

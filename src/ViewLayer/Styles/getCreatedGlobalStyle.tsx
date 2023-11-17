import React from 'react'
import { useSelector } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

import { ILightness, IAlphas } from '../../Constants/globalTheme.const'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getBuiltColor } from './getBuiltColor'
interface IGetCreatedGlobalStyle {
  (lightness: ILightness, alphas: IAlphas): any
}

export const getCreatedGlobalStyle: IGetCreatedGlobalStyle = (
  lightness,
  alphas
) => {
  const {
    darker4,
    darker3,
    darker2,
    darker,
    middle,
    lighter,
    lighter2,
    lighter3,
    lighter4,
  } = lightness

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

  const {
    globalVars: { theme },
  } = useSelector((store2: RootStoreType) => store2)

  if (!theme) return null

  const getColor = getBuiltColor(theme, 1, middle)

  const output = createGlobalStyle`

    .LogoGroup_StubForUserResearch .__div,
    .LogoGroup_StubForUserResearch .__div ._img,
    .LogoGroup_SkillsExchangeMatrix .__div,
    .LogoGroup_SkillsExchangeMatrix .__div ._img {
      background-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle)};
    }

    .SearchFormSep .__searchForm ._row ._linkAdvacedSearch {
      color: ${props2 =>
        getColor(props2, 'colorActive', opaciter2, middle, 'Light')};
    }

    .SelectLanguage__AppLanguage {
      background: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Light')};
    }

    .SelectLanguage .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      border-color: ${props2 =>
        ({
          Dark: getColor(props2, 'colorSecond', medial, middle),
          Light: getColor(props2, 'colorGrey', opaciter4, middle, 'Light'),
        }[theme])};}

    .SearchFormSep .__titleScreen {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
      background: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }

    .SearchFormSep .__searchForm ._row ._selectElement {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', 1, middle, 'Light')};
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
      border: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .Select .__Ok {
      background: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .LoaderBlurhash .__text {
      color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .FeatureBar .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .SuccessTried .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .LoaderOverlayYrl .LoaderOverlay__spinner {
      border: 16px solid ${props2 =>
        getColor(props2, 'colorFirstDarker', medial, darker)};
      border-top: 16px solid ${props2 =>
        getColor(props2, 'colorActive', medial, middle)};
    }

    .InputYrl .__input {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      background-color: ${props2 =>
        getColor(props2, 'colorSecondDarker', medial, darker)};
    }

    .InputYrl .__input:active,
    .InputYrl .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      border-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle)};
    }

    .Input_ProfileBody_avatar .__input,
    .Input_ProfileBody_avatar .__input:active,
    .Input_ProfileBody_avatar .__input:focus {
      color: ${props2 => 'transparent'};
      border: ${props2 => 'none'};
      border-color: ${props2 => 'none'};
    }

    .Input_userInfoAbout .__input,
    .Input_userNameFirst .__input,
    .Input_ageFromToRequired .__input, 
    .Input_descriptionRequired .__input  {
      color: ${props2 => getColor(props2, 'colorFirst', medial, lighter)};
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', lighter, medial, 'Light')};
      border-color: ${props2 =>
        ({
          Dark: getColor(props2, 'colorFirst', medial, lighter4, 'Dark'),
          Light: getColor(props2, 'colorGrey', opaciter4, middle, 'Light'),
        }[theme])};}

    .Input_ageFromToRequired .__input:active,
    .Input_ageFromToRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
      background: ${props2 =>
        getColor(props2, 'colorSecond', lighter, medial, 'Light')};
      border-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle, 'Dark')};
    }

    .Input_ageFromToRequired .__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
      opacity: 1; /* Firefox */
    }
    
    .Input_ageFromToRequired .__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }
    
    .Input_ageFromToRequired .__input::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }

    .Input_userInfoAbout .__input:active,
    .Input_userNameFirst .__input:active,
    .Input_userNameFirst .__input:focus,
    .Input_descriptionRequired .__input:active,
    .Input_descriptionRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirst', medial, lighter4)};
      background: ${props2 =>
        getColor(props2, 'colorSecond', medial, lighter, 'Light')};
      border-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle, 'Dark')};
    }

    .Input_userInfoAbout .__input::placeholder,
    .Input_userNameFirst .__input::placeholder,
    .Input_descriptionRequired .__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
      opacity: 1; /* Firefox */
    }
    
    .Input_userInfoAbout .__input:-ms-input-placeholder,
    .Input_userNameFirst .__input:-ms-input-placeholder,
    .Input_descriptionRequired .__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }
    
    .Input_userInfoAbout .__input::-ms-input-placeholder,
    .Input_userNameFirst .__input::-ms-input-placeholder,
    .Input_descriptionRequired .__input::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker4, 'Dark')};
    }

    .Input_passwordAuth .__input,
    .Input_usernameAuth .__input {
      background: ${props2 =>
        getColor(props2, 'colorFirst', medial, middle, 'Dark')};
    }

    .Input_search .__input {
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .PlayerPanel ._capture {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
    }

    .LogoGroup {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
    }

    .SideNavigation .__content {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle)};
    }

    .ButtonYrl .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', medial, lighter3)};
    }

    .ButtonYrl .__button:active,
    .ButtonYrl .__button:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      border-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle)};
    }
    .ButtonYrl ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }
    .ButtonYrl .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', medial, lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .Button_MdBackward3 .__button,
    .Button_MdForward2 .__button,
    .Button_CallForActionMatrix .__button,
    .Button_UseCertificate .__button,
    .Button_AuthSignInUpBack .__button,
    .Button_AuthSignInUp .__button,
    .Button_сontinueIntroSep .__button,
    .Button_startModule .__button,
    .Button_BackToTop .__button,
    .Button_searchSepActive .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle)};
    }

    .Button_SignUp .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorGrey', medial, middle)};
    }

    .Button_ForgetPassword ._in,
    .Button_SignUp ._in,
    .Button_AuthSignInUp ._in,
    .Button_AuthSignInUpBack ._in,
    .Button_AuthGoogle ._in,
    .Button_AuthVkontakte ._in,
    .Button_AuthFacebook ._in {
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, middle, 'Dark')};
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

    .Button_UseCertificate ._in {
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker, 'Dark')};
    }

    .Button_downLeft .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', medial, lighter3)};
    }

    .Button_downLeft ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .Button_MdBlock .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', medial, lighter2)};
    }

    .Button_MdBlock ._in {
      color: ${props2 =>
        getColor(props2, 'colorSecondLighter4', medial, lighter4)};
    }

    .Button_MdClose .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, lighter4)};
    }

    .Button_MdClose ._in {
      color: ${props2 => getColor(props2, 'colorFirst', medial, middle)};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle)};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker)};
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle)};
    }

    .Button_MdBackward3 ._in {
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker, 'Dark')};
    }

    .Button_MdBackward2 .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorActiveDarker', medial, darker)};
    }

    .Button_MdForward .__button {
      color:  ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      background-color: ${props2 =>
        getColor(props2, 'colorActive', medial, middle)};
    }

    .Button_SiGoogleplay .__button,
    .Button_SiAppstore .__button,
    .Button_MdMenu .__button,
    .Button_AddCourse .__button,
    .Button_ThemeToggle .__button {
      background-color: ${props2 =>
        ({
          Dark: getColor(props2, 'colorSecond', medial, middle),
          Light: 'rgb(245, 246, 250)',
        }[theme])};}

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
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle)};
    }

    .Button_MdPerson ._in {
      color: ${props2 =>
        getColor(props2, 'colorSecondLighter4', medial, lighter4)};
    }

    .Button_MdSearch .__button {
      border-bottom: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Dark')};
      border-right: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Dark')};
      border-top: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .Button_MdSearch ._in {
      color: ${props2 =>
        getColor(props2, 'colorFirstLighter', medial, lighter)};
    }

    .Button_authSideMenu ._in,
    .Button_authHeader ._in,
    .Button_Avatar ._in {
      color: ${props2 => getColor(props2, 'colorGrey', opaciter2, lighter4)};
    }

    .ButtonYrl.Button_authSideMenu .__button ._in ._capture_right {
      color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle, 'Dark')};
    }

    .Button_searchSepPassive .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorGrey', opaciter2, middle)};
    }

    .Button_ForgetPassword .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorGrey', medial, middle)};
    }

    .IconYrl_authUserHeader ._icon {
      color: ${props2 => getColor(props2, 'colorGrey', opaciter2, lighter4)};
    }

    .IconYrl_authUserHeaderActive ._icon {
      color: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .ModalFrames {
      background-color: ${props2 =>
        getColor(props2, 'colorGrey', medial, middle)};
    }

    .ModalFrames .__content {
      background-color: ${props2 =>
        ({
          Dark: getColor(props2, 'colorSecond', middle, lighter4),
          Light: getColor(props2, 'colorSecond', medial, middle),
        }[theme])};}

    .AuthUser .form, .AuthUser .bottomContainer {
      background: ${props2 =>
        ({
          Dark: getColor(props2, 'colorGrey', medial, middle),
          Light: getColor(props2, 'colorSecond', medial, middle),
        }[theme])};}
    
    .AuthUser .header2 {
      color: ${props2 => getColor(props2, 'colorFirst', medial, darker)};
    }

    .AuthUser .vl-innertext {
      background: ${props2 => getColor(props2, 'colorGrey', medial, middle)};
      color: ${props2 =>
        getColor(props2, 'colorFirst', medial, darker, 'Dark')};
    }

    .CheckRadioGroup ._capture {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .CheckRadioGroup .checkmark {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle)};
      border: solid 1.5px ${props2 =>
        getColor(props2, 'colorFirstDarker', medial, darker)};
    }

    .CheckRadioGroup ._checkdiv:hover input ~ .checkmark {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', medial, lighter2)};
    }
    

    .CheckRadioGroup input:checked ~ .checkmark {
      background: ${props2 => getColor(props2, 'colorActive', medial, middle)};
    }

    .RadioButton .checkmark:after {
      background: ${props2 =>
        getColor(props2, 'colorFirstDarker', medial, darker, 'Dark')};
    }

    .HeaderFrame {
      background-color: ${props2 =>
        ({
          Dark: getColor(props2, 'colorSecond', medial, middle),
          Light: 'rgb(245, 246, 250)',
        }[theme])};}

    body {
      color: ${props2 => getColor(props2, 'colorFirstDarker', medial, darker)};
      background: ${props2 => getColor(props2, 'colorSecond', medial, middle)};
    }
  `

  return output
}

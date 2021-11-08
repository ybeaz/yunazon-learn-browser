import { useSelector } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

import { ALPHAS } from '../../Constants/globalTheme.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { getBuiltColor } from './getBuiltColor'

interface IGetCreatedGlobalStyleArgs {
  darker4: number
  darker3: number
  darker2: number
  darker: number
  middle: number
  lighter: number
  lighter2: number
  lighter3: number
  lighter4: number
}

export const getCreatedGlobalStyle = (
  brightness: IGetCreatedGlobalStyleArgs
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
  } = brightness

  const {
    globalVars: { theme },
  } = useSelector((store2: IRootStore) => store2)

  if (!theme) return null

  const getColor = getBuiltColor(theme, 1, middle)

  return createGlobalStyle`

    .Select .__selectTag {
      border: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 0, middle, 'Dark')};
    }

    .Select .__Ok {
      background: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .LoaderBlurhash .__text {
      color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .FeatureBar .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .SuccessTried .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .LoaderOverlay .LoaderOverlay__spinner {
      border: 16px solid ${props2 =>
        getColor(props2, 'colorFirstDarker', 0, darker)};
      border-top: 16px solid ${props2 =>
        getColor(props2, 'colorActive', 0, middle)};
    }

    .Input .__input {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
      background-color: ${props2 =>
        getColor(props2, 'colorSecondDarker', 0, darker)};
    }

    .Input .__input:active,
    .Input .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
      border-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Input_ageFromToRequired .__input {
      color: ${props2 => getColor(props2, 'colorFirst', 0, lighter)};
      background: ${props2 => getColor(props2, 'colorSecond', 0, lighter)};
      border-color: ${props2 =>
        getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Input_ageFromToRequired .__input:active,
    .Input_ageFromToRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirst', 0, lighter4)};
      background: ${props2 =>
        getColor(props2, 'colorSecond', lighter, 0, 'Light')};
      border-color: ${props2 =>
        getColor(props2, 'colorBoxes', 0, middle, 'Dark')};
    }

    .Input_ageFromToRequired .__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker4, 'Dark')};
      opacity: 1; /* Firefox */
    }
    
    .Input_ageFromToRequired .__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker4, 'Dark')};
    }
    
    .Input_ageFromToRequired .__input::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker4, 'Dark')};
    }

    .Input_descriptionRequired .__input {
      color: ${props2 => getColor(props2, 'colorFirst', 0, lighter4)};
      background: ${props2 =>
        getColor(props2, 'colorSecond', lighter, 0, 'Light')};
      border-color: ${props2 =>
        getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Input_descriptionRequired .__input:active,
    .Input_descriptionRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirst', 0, lighter4)};
      background: ${props2 =>
        getColor(props2, 'colorSecond', 0, lighter, 'Light')};
      border-color: ${props2 =>
        getColor(props2, 'colorBoxes', 0, middle, 'Dark')};
    }


    .Input_descriptionRequired .__input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker4, 'Dark')};
      opacity: 1; /* Firefox */
    }
    
    .Input_descriptionRequired .__input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker4, 'Dark')};
    }
    
    .Input_descriptionRequired .__input::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker4, 'Dark')};
    }

    .Input_passwordAuth .__input {
      background: ${props2 =>
        getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Input_usernameAuth .__input {
      background: ${props2 =>
        getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Input_search .__input {
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', 0, middle, 'Dark')};
    }

    .PlayerPanel ._capture {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle)};
    }

    .LogoGroup {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle)};
    }

    .SideNavigation .__content {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', 0, lighter3)};
    }

    .Button .__button:active,
    .Button .__button:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
      border-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }
    .Button ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }
    .Button .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', 0, lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .Button.Button_ThemeToggle .__button {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', 0, lighter2)};
    }

    .Button_searchSep .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_startModule .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_ForgetPassword .__button {
      background-color: ${props2 => getColor(props2, 'colorGrey', 0, middle)};
    }

    .Button_ForgetPassword ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_SignUp .__button {
        background-color: ${props2 => getColor(props2, 'colorGrey', 0, middle)};
    }

    .Button_SignUp ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_AuthSignInUp .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_AuthSignInUp ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_AuthSignInUpBack .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_AuthSignInUpBack ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_AuthGoogle .__button {
      background-color: #dd4b39;
    }

    .Button_AuthGoogle ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_AuthVkontakte .__button {
      background-color: #45668e;
    }

    .Button_AuthVkontakte ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_AuthFacebook .__button {
      background-color: #3b5998;
    }

    .Button_AuthFacebook ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_AddCourse .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button_personalCabinet .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button_CallForActionMatrix .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_UseCertificate .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_UseCertificate ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker, 'Dark')};
    }

    .Button_downLeft .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', 0, lighter3)};
    }

    .Button_downLeft ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .Button_MdBlock .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', 0, lighter2)};
    }

    .Button_MdBlock ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', 0, lighter4)};
    }

    .Button_MdClose .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', 0, lighter4, 'Dark')};
    }

    .Button_MdClose ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, middle, 'Dark')};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker)};
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button_MdBackward3 .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, darker)};
    }

    .Button_MdBackward3 ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker, 'Dark')};
    }

    .Button_MdBackward2 .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorActiveDarker', 0, darker)};
    }

    .Button_MdForward2 .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_MdForward .__button {
      color:  ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
      background-color: ${props2 => getColor(props2, 'colorActive', 0, middle)};
    }

    .Button_MdMenu ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button_MdPerson .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    .Button_MdPerson ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', 0, lighter4)};
    }

    .Button_MdSearch .__button {
      border-bottom: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 0, middle, 'Dark')};
      border-right: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 0, middle, 'Dark')};
      border-top: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 0, middle, 'Dark')};
    }

    .Button_MdSearch ._in {
      color: ${props2 => getColor(props2, 'colorFirstLighter', 0, lighter)};
    }

    .ModalFrames .__content {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', 0, lighter4)};
    }



    .ModalFrames .__content {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', 0, lighter4, 'Dark')};
    }


    .AuthUser .form, .AuthUser .bottomContainer {
      background: ${props2 => getColor(props2, 'colorGrey', 0, middle)};
    }
    
    .AuthUser .header2 {
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker, 'Dark')};
    }

    .AuthUser .vl-innertext {
      background: ${props2 => getColor(props2, 'colorGrey', 0, middle)};
      color: ${props2 => getColor(props2, 'colorFirst', 0, darker, 'Dark')};
    }

    .CheckRadioGroup ._capture {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .CheckRadioGroup .checkmark {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
      border: solid 1.5px ${props2 =>
        getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .CheckRadioGroup ._checkdiv:hover input ~ .checkmark {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', 0, lighter2)};
    }
    

    .CheckRadioGroup input:checked ~ .checkmark {
      background: ${props2 => getColor(props2, 'colorBoxes', 0, middle)};
    }

    .RadioButton .checkmark:after {
      background: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
    }

    .HeaderFrame {
      background-color: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }

    body {
      color: ${props2 => getColor(props2, 'colorFirstDarker', 0, darker)};
      background: ${props2 => getColor(props2, 'colorSecond', 0, middle)};
    }
  `
}

import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import { IRootStore } from '../../Interfaces/IRootStore'

export const getCreatedGlobalStyle = () => {
  const {
    globalVars: { theme },
  } = useSelector((store2: IRootStore) => store2)

  const getColor = (
    props2: any,
    color2: string,
    theme2: string = theme
  ): string => props2.theme.colors[color2][theme2]

  return createGlobalStyle`
    .Select .__Ok {
      background: ${props2 => getColor(props2, 'colorActive')};
    }

    .LoaderBlurhash .__text {
      color: ${props2 => getColor(props2, 'colorActive')};
    }

    .FeatureBar .__tooltipText {
      background: ${props2 => getColor(props2, 'colorSecondLighter2')};
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .SuccessTried .__tooltipText {
      background: ${props2 => getColor(props2, 'colorSecondLighter2')};
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .LoaderOverlay .LoaderOverlay__spinner {
      border: 16px solid ${props2 => getColor(props2, 'colorFirstDarker')};
      border-top: 16px solid ${props2 => getColor(props2, 'colorActive')};
    }

    .Input .__input {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      background-color: ${props2 => getColor(props2, 'colorSecondDacker')};
      border-color: ${props2 => getColor(props2, 'colorSecondLighter2')};
    }

    .Input .__input:active,
    .Input .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      border-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Input_ageFromToRequired .__input {
      color: ${props2 => getColor(props2, 'colorSecond')};
      background: ${props2 => getColor(props2, 'colorFirstLighter', 'Dark')};
      border-color: ${props2 => getColor(props2, 'colorSecond', 'Dark')};
    }

    .Input_ageFromToRequired .__input:active,
    .Input_ageFromToRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorSecond')};
      background: ${props2 => getColor(props2, 'colorFirstLighter', 'Dark')};
      border-color: ${props2 => getColor(props2, 'colorSecond', 'Dark')};
    }

    .Input_descriptionRequired .__input {
      color: ${props2 => getColor(props2, 'colorSecond')};
      background: ${props2 => getColor(props2, 'colorFirstLighter', 'Dark')};
      border-color: ${props2 => getColor(props2, 'colorSecond', 'Dark')};
    }

    .Input_descriptionRequired .__input:active,
    .Input_descriptionRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorSecond')};
      background: ${props2 => getColor(props2, 'colorSecond')};
      border-color: ${props2 => getColor(props2, 'colorSecond', 'Dark')};
    }

    .Input_passwordAuth .__input {
      background: ${props2 => getColor(props2, 'colorSecondLighter2')};
    }

    .Input_usernameAuth .__input {
      background: ${props2 => getColor(props2, 'colorSecondLighter2')};
    }

    .Input_search .__input {
      border-color: ${props2 => getColor(props2, 'colorSecond', 'Dark')};
    }

    .PlayerPanel ._capture {
      color: ${props2 => getColor(props2, 'colorFirst')};
    }

    .LogoGroup {
      color: ${props2 => getColor(props2, 'colorFirst')};
    }

    .SideNavigation .__content {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter3')};
    }

    .Button .__button:active,
    .Button .__button:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      border-color: ${props2 => getColor(props2, 'colorActive')};
    }
    .Button ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
    }
    .Button .__tooltipText {
      background: ${props2 => getColor(props2, 'colorSecondLighter2')};
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .Button.Button_ThemeToggle .__button {
      background: ${props2 => getColor(props2, 'colorSecondLighter2')};
    }

    .Button_searchSep .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_startModule .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_ForgetPassword .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter4')};
    }

    .Button_ForgetPassword ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 'Dark')};
    }

    .Button_SignUp .__button {
        background-color: ${props2 => getColor(props2, 'colorSecondLighter4')};
    }

    .Button_SignUp ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 'Dark')};
    }

    .Button_AuthSignInUp .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_AuthSignInUp ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 'Dark')};
    }

    .Button_AuthSignInUpBack .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_AuthGoogle .__button {
      background-color: #dd4b39;
    }

    .Button_AuthGoogle ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 'Dark')};
    }

    .Button_AuthVkontakte .__button {
      background-color: #45668e;
    }

    .Button_AuthVkontakte ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 'Dark')};
    }

    .Button_AuthFacebook .__button {
      background-color: #3b5998;
    }

    .Button_AuthFacebook ._in {
      color: ${props2 => getColor(props2, 'colorFirst', 'Dark')};
    }

    .Button_AddCourse .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_personalCabinet .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_CallForActionMatrix .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_UseCertificate .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_downLeft .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter3')};
    }

    .Button_downLeft ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .Button_MdBlock .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter2')};
    }

    .Button_MdBlock ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4')};
    }

    .Button_MdClose .__button {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter3')};
    }

    .Button_MdClose ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4')};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_MdBackward3 .__button {
      background-color: ${props2 => getColor(props2, 'colorActiveDacker')};
    }

    .Button_MdBackward2 .__button {
      background-color: ${props2 => getColor(props2, 'colorActiveDacker')};
    }

    .Button_MdForward2 .__button {
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_MdForward .__button {
      color:  ${props2 => getColor(props2, 'colorFirstDarker')};
      background-color: ${props2 => getColor(props2, 'colorActive')};
    }

    .Button_MdMenu ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_MdPerson .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    .Button_MdPerson ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4')};
    }

    .Button_MdSearch .__button {
      border-bottom: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 'Dark')};
      border-right: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 'Dark')};
      border-top: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', 'Dark')};
    }

    .Button_MdSearch ._in {
      color: ${props2 => getColor(props2, 'colorFirstLighter')};
    }

    .CheckRadioGroup ._capture {
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .CheckRadioGroup .checkmark {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
      border: solid 1.5px ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .CheckRadioGroup ._checkdiv:hover input ~ .checkmark {
      background-color: ${props2 => getColor(props2, 'colorSecondLighter2')};
    }
    

    .CheckRadioGroup input:checked ~ .checkmark {
      background: ${props2 => getColor(props2, 'colorBoxes')};
    }

    .RadioButton .checkmark:after {
      background: ${props2 => getColor(props2, 'colorFirstDarker')};
    }

    .HeaderFrame {
      background-color: ${props2 => getColor(props2, 'colorSecond')};
    }

    body {
      display: flex;
      color: ${props2 => getColor(props2, 'colorFirstDarker')};
      background: ${props2 => getColor(props2, 'colorSecond')};
    }
  `
}

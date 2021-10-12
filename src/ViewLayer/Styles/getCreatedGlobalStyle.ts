import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import { IRootStore } from '../../Interfaces/IRootStore'

export const getCreatedGlobalStyle = () => {
  const {
    globalVars: { theme },
  } = useSelector((store2: IRootStore) => store2)

  let darker = -3
  let middle = 0
  let lighter = 3
  let lighter2 = 6
  let lighter3 = 9
  let lighter4 = 12

  // if (theme === 'Light') {
  //   const factor = -1.5
  //   darker = darker * factor
  //   middle = middle * factor
  //   lighter = lighter * factor
  //   lighter2 = lighter2 * factor
  //   lighter3 = lighter3 * factor
  //   lighter4 = lighter4 * factor
  // }

  const getColor = (
    props2: any,
    color2: string,
    dif: number,
    theme2: string = theme
  ): string => {
    let colorNext = color2

    if (
      color2 === 'colorFirstDarker' ||
      color2 === 'colorFirst' ||
      color2 === 'colorFirstLighter'
    ) {
      colorNext = 'colorFirst'
    } else if (
      color2 === 'colorSecondDarker' ||
      color2 === 'colorSecond' ||
      color2 === 'colorSecondLighter2' ||
      color2 === 'colorSecondLighter3' ||
      color2 === 'colorSecondLighter4'
    ) {
      colorNext = 'colorSecond'
    } else if (color2 === 'colorActiveDarker') {
      colorNext = 'colorActive'
    }

    const [hue, saturation, value] = props2.theme.colors[colorNext][theme2]
    const valueNext = value + dif

    console.info('getCreatedGlobalStyle [40]', {
      value,
      theme2,
      colorNext,
      dif,
      hue,
      saturation,
    })
    return `hsl(${hue}, ${saturation}%, ${valueNext}%)`
  }

  return createGlobalStyle`

    .Select .__selectTag {
      border: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .Select .__Ok {
      background: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .LoaderBlurhash .__text {
      color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .FeatureBar .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }

    .SuccessTried .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }

    .LoaderOverlay .LoaderOverlay__spinner {
      border: 16px solid ${props2 =>
        getColor(props2, 'colorFirstDarker', darker)};
      border-top: 16px solid ${props2 =>
        getColor(props2, 'colorActive', middle)};
    }

    .Input .__input {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      background-color: ${props2 =>
        getColor(props2, 'colorSecondDarker', darker)};
      border-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
    }

    .Input .__input:active,
    .Input .__input:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      border-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Input_ageFromToRequired .__input {
      color: ${props2 => getColor(props2, 'colorSecond', middle)};
      background: ${props2 =>
        getColor(props2, 'colorFirstLighter', lighter, 'Dark')};
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .Input_ageFromToRequired .__input:active,
    .Input_ageFromToRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorSecond', middle)};
      background: ${props2 =>
        getColor(props2, 'colorFirstLighter', lighter, 'Dark')};
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .Input_descriptionRequired .__input {
      color: ${props2 => getColor(props2, 'colorSecond', middle)};
      background: ${props2 =>
        getColor(props2, 'colorFirstLighter', lighter, 'Dark')};
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .Input_descriptionRequired .__input:active,
    .Input_descriptionRequired .__input:focus {
      color: ${props2 => getColor(props2, 'colorSecond', middle)};
      background: ${props2 => getColor(props2, 'colorSecond', middle)};
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .Input_passwordAuth .__input {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
    }

    .Input_usernameAuth .__input {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
    }

    .Input_search .__input {
      border-color: ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .PlayerPanel ._capture {
      color: ${props2 => getColor(props2, 'colorFirst', middle)};
    }

    .LogoGroup {
      color: ${props2 => getColor(props2, 'colorFirst', middle)};
    }

    .SideNavigation .__content {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', lighter3)};
    }

    .Button .__button:active,
    .Button .__button:focus {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      border-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }
    .Button ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }
    .Button .__tooltipText {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }

    .Button.Button_ThemeToggle .__button {
      background: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
    }

    .Button_searchSep .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_startModule .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_ForgetPassword .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter4', lighter4)};
    }

    .Button_ForgetPassword ._in {
      color: ${props2 => getColor(props2, 'colorFirst', middle, 'Dark')};
    }

    .Button_SignUp .__button {
        background-color: ${props2 =>
          getColor(props2, 'colorSecondLighter4', lighter4)};
    }

    .Button_SignUp ._in {
      color: ${props2 => getColor(props2, 'colorFirst', middle, 'Dark')};
    }

    .Button_AuthSignInUp .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_AuthSignInUp ._in {
      color: ${props2 => getColor(props2, 'colorFirst', middle, 'Dark')};
    }

    .Button_AuthSignInUpBack .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_AuthGoogle .__button {
      background-color: #dd4b39;
    }

    .Button_AuthGoogle ._in {
      color: ${props2 => getColor(props2, 'colorFirst', middle, 'Dark')};
    }

    .Button_AuthVkontakte .__button {
      background-color: #45668e;
    }

    .Button_AuthVkontakte ._in {
      color: ${props2 => getColor(props2, 'colorFirst', middle, 'Dark')};
    }

    .Button_AuthFacebook .__button {
      background-color: #3b5998;
    }

    .Button_AuthFacebook ._in {
      color: ${props2 => getColor(props2, 'colorFirst', middle, 'Dark')};
    }

    .Button_AddCourse .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_personalCabinet .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_CallForActionMatrix .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_UseCertificate .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_downLeft .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', lighter3)};
    }

    .Button_downLeft ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }

    .Button_MdBlock .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
    }

    .Button_MdBlock ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', lighter4)};
    }

    .Button_MdClose .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter3', lighter3)};
    }

    .Button_MdClose ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', lighter4)};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_MdBackward3 .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorActiveDarker', darker)};
    }

    .Button_MdBackward2 .__button {
      background-color: ${props2 =>
        getColor(props2, 'colorActiveDarker', darker)};
    }

    .Button_MdForward2 .__button {
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_sideMenuItems .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_sideMenuItems ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_MdForward .__button {
      color:  ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      background-color: ${props2 => getColor(props2, 'colorActive', middle)};
    }

    .Button_MdMenu ._in {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_MdPerson .__button {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    .Button_MdPerson ._in {
      color: ${props2 => getColor(props2, 'colorSecondLighter4', lighter4)};
    }

    .Button_MdSearch .__button {
      border-bottom: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
      border-right: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
      border-top: solid 1px ${props2 =>
        getColor(props2, 'colorSecond', middle, 'Dark')};
    }

    .Button_MdSearch ._in {
      color: ${props2 => getColor(props2, 'colorFirstLighter', lighter)};
    }

    .CheckRadioGroup ._capture {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }

    .CheckRadioGroup .checkmark {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
      border: solid 1.5px ${props2 =>
        getColor(props2, 'colorFirstDarker', darker)};
    }

    .CheckRadioGroup ._checkdiv:hover input ~ .checkmark {
      background-color: ${props2 =>
        getColor(props2, 'colorSecondLighter2', lighter2)};
    }
    

    .CheckRadioGroup input:checked ~ .checkmark {
      background: ${props2 => getColor(props2, 'colorBoxes', middle)};
    }

    .RadioButton .checkmark:after {
      background: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
    }

    .HeaderFrame {
      background-color: ${props2 => getColor(props2, 'colorSecond', middle)};
    }

    body {
      color: ${props2 => getColor(props2, 'colorFirstDarker', darker)};
      background: ${props2 => getColor(props2, 'colorSecond', middle)};
    }
  `
}

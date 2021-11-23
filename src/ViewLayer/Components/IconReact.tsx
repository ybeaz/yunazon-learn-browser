import React from 'react'
import { IconContext } from 'react-icons'

import {
  MdComputer,
  MdOutlineMeetingRoom,
  MdBusinessCenter,
  MdFlightTakeoff,
  MdAddBox,
  MdAddShoppingCart,
  MdBlock,
  MdClose,
  MdContactMail,
  MdFlag,
  MdForward,
  MdHome,
  MdLanguage,
  MdMailOutline,
  MdMenu,
  MdPause,
  MdPerson,
  MdPlayArrow,
  MdPrint,
  MdQueue,
  MdRemoveCircle,
  MdSearch,
} from 'react-icons/md'

import {
  AiFillCar,
  AiOutlineMedicineBox,
  AiOutlineShoppingCart,
  AiOutlineQuestionCircle,
} from 'react-icons/ai'
import { BiSelectMultiple } from 'react-icons/bi'
import { BsHouseDoor, BsLink45Deg, BsQuestionCircle } from 'react-icons/bs'
import { CgDarkMode } from 'react-icons/cg'
import { FaFacebook, FaVk, FaTwitter, FaGooglePlusG } from 'react-icons/fa'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { IoChatbubblesOutline } from 'react-icons/io5'

const ICON = {
  MdComputer,
  MdOutlineMeetingRoom,
  MdBusinessCenter,
  MdFlightTakeoff,
  AiFillCar,
  AiOutlineMedicineBox,
  AiOutlineShoppingCart,
  BsHouseDoor,
  AiOutlineQuestionCircle,
  BiSelectMultiple,
  BsLink45Deg,
  BsQuestionCircle,
  CgDarkMode,
  FaFacebook,
  FaGooglePlusG,
  FaTwitter,
  FaVk,
  HiOutlineAcademicCap,
  IoChatbubblesOutline,
  MdAddBox,
  MdAddShoppingCart,
  MdBlock,
  MdClose,
  MdContactMail,
  MdFlag,
  MdForward,
  MdHome,
  MdLanguage,
  MdMailOutline,
  MdMenu,
  MdPause,
  MdPerson,
  MdPlayArrow,
  MdPrint,
  MdQueue,
  MdRemoveCircle,
  MdSearch,
}

interface IconReactArgs {
  classAdded: string
  icon: string
  icon2: string
}

export const IconReact: React.FunctionComponent<IconReactArgs> = (
  props: IconReactArgs
): JSX.Element => {
  const { icon, icon2, classAdded } = props

  const Icon = ICON[icon]
  const Icon2 = ICON[icon2]

  return (
    <>
      {Icon && (
        <div className={`IconReact ${classAdded}`}>
          <IconContext.Provider
            value={{
              className: `_icon`,
            }}
          >
            <Icon />
          </IconContext.Provider>
          {Icon2 && (
            <IconContext.Provider
              value={{
                className: `_icon`,
              }}
            >
              <Icon2 />
            </IconContext.Provider>
          )}
        </div>
      )}
    </>
  )
}

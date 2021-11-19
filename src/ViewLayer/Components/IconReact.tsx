import React from 'react'
import { IconContext } from 'react-icons'

import {
  MdAddBox,
  MdQueue,
  MdHome,
  MdContactMail,
  MdAddShoppingCart,
  MdFlag,
  MdMailOutline,
  MdBlock,
  MdClose,
  MdPrint,
  MdForward,
  MdRemoveCircle,
  MdPause,
  MdPlayArrow,
  MdPerson,
  MdMenu,
  MdSearch,
} from 'react-icons/md'

import { FaFacebook, FaVk, FaTwitter, FaGooglePlusG } from 'react-icons/fa'
import { BsLink45Deg, BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { CgDarkMode } from 'react-icons/cg'

const ICON = {
  CgDarkMode,
  FaFacebook,
  FaVk,
  FaTwitter,
  FaGooglePlusG,
  MdAddBox,
  MdQueue,
  MdHome,
  MdContactMail,
  MdAddShoppingCart,
  MdFlag,
  BsLink45Deg,
  MdMailOutline,
  BsQuestionCircle,
  MdBlock,
  HiOutlineAcademicCap,
  MdClose,
  MdPrint,
  MdForward,
  MdRemoveCircle,
  MdPause,
  MdPlayArrow,
  MdMenu,
  MdSearch,
  MdPerson,
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

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getCreatedUrlSearchQuery } from 'yourails_common'
import { getParsedUrlQuery } from 'yourails_common'
import { getClasses } from 'yourails_common'

import {
  NavLinkWithQueryComponentPropsType,
  NavLinkWithQueryPropsType,
  NavLinkWithQueryPropsOutType,
  NavLinkWithQueryComponentType,
  NavLinkWithQueryType,
} from './NavLinkWithQueryTypes'

/**
 * @description Component to render NavLinkWithQuery
 * @import import { NavLinkWithQuery, NavLinkWithQueryPropsType, NavLinkWithQueryPropsOutType, NavLinkWithQueryType } 
             from '../Components/NavLinkWithQuery/NavLinkWithQuery'
 */
const NavLinkWithQueryComponent: NavLinkWithQueryComponentType = (
  props: NavLinkWithQueryComponentPropsType
) => {
  const {
    storeStateSlice: {
      urlParamsQuery: { sendCc: sendCcState, sendBcc: sendBccState },
    },
  } = props
  const { sendCc: sendCcQuery, sendBcc: sendBccQuery } = getParsedUrlQuery()

  const sendCc = sendCcState || sendCcQuery
  const sendBcc = sendBccState || sendBccQuery

  const search = getCreatedUrlSearchQuery({ sendCc, sendBcc })

  const propsOut: NavLinkWithQueryPropsOutType = {
    navLinkProps: { ...props, end: true },
  }

  propsOut.navLinkProps.to.search = search

  return <NavLink {...propsOut.navLinkProps} />
}

const storeStateSliceProps: string[] = ['urlParamsQuery']
const NavLinkWithQuery: NavLinkWithQueryType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(NavLinkWithQueryComponent)
)

export type { NavLinkWithQueryPropsType, NavLinkWithQueryType }
export { NavLinkWithQuery }

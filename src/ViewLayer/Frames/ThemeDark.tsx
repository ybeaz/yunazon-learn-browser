import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// require(`../Styles/theme${'Dark'}.less`)
import './ThemeDark.style.less'

interface TemplateArgs {
  children: any
}

export const ThemeDark: React.FunctionComponent<TemplateArgs> = (
  props: TemplateArgs
): JSX.Element => {
  return <div className='ThemeDark1'>Dark111111111111{props.children}</div>
}

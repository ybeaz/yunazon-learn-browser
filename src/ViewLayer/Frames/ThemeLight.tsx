import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ThemeLight.style.less'

interface TemplateArgs {
  children: any
}

export const ThemeLight: React.FunctionComponent<TemplateArgs> = (
  props: TemplateArgs
): JSX.Element => {
  return <div className='ThemeLight'>Light{props.children}</div>
}

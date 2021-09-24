import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './ThemeLight.style.less'

interface TemplateArgs {
  children: any
}

console.info('ThemeLight [9]', { styles })

export const ThemeLight: React.FunctionComponent<TemplateArgs> = (
  props: TemplateArgs
): JSX.Element => {
  return <div className={styles.ThemeLight}>Light{props.children}</div>
}

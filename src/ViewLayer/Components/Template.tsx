import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface ITemplateArgs {}

export const Template: React.FunctionComponent<ITemplateArgs> = (
  props: ITemplateArgs
): ReactElement => {
  const propsOut = {}
  return <div className='Template'>null</div>
}

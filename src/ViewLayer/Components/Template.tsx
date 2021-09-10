import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface TemplateArgs {}

export const Template: React.FunctionComponent<TemplateArgs> = (
  props: TemplateArgs
): JSX.Element => {
  return <div className='Template'>null</div>
}

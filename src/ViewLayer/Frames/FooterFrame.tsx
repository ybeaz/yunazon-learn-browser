import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface FooterFrameArgs {
  children: React.ReactElement
}

export const FooterFrame: React.FunctionComponent<FooterFrameArgs> = (
  props: FooterFrameArgs
): ReactElement => {
  return <div className='FooterFrame'>{props.children}</div>
}

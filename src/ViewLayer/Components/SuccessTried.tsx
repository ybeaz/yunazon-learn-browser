import React, { useState, useEffect, useRef, ReactElement } from 'react'

import { getRandomNumBetween } from '../../Shared/getRandomNumBetween'
interface ISuccessTriedInput {
  tooltipText: string
  tooltipPosition: string
}

export const SuccessTried: React.FunctionComponent<any> = (
  props: ISuccessTriedInput
): JSX.Element => {
  const { tooltipText, tooltipPosition } = props

  const classTooltipAdd = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }[tooltipPosition]

  const tried = useRef(Math.round(getRandomNumBetween(10, 100)))
  const succedded = useRef(Math.round(getRandomNumBetween(10, tried.current)))

  return (
    <div className='SuccessTried'>
      <span className={`__tooltipText ${classTooltipAdd}`}>{tooltipText}</span>
      {succedded.current} / {tried.current}
    </div>
  )
}

import React from 'react'

import { getClasses } from '../../../../Shared/getClasses'
import { BORDER_IMAGE_SORCE_URALS } from '../../../../Constants/expertiseLevels.const'
import {
  CertificateFrameAComponentPropsType,
  CertificateFrameAPropsType,
  CertificateFrameAPropsOutType,
  CertificateFrameAComponentType,
  CertificateFrameAType,
} from './CertificateFrameATypes'

/**
 * @description Component to render CertificateFrameA
 * @import import { CertificateFrameA, CertificateFrameAPropsType, CertificateFrameAPropsOutType, CertificateFrameAType } 
             from '../../Frames/CertificateFrames/CertificateFrameA/CertificateFrameA'
 */
const CertificateFrameAComponent: CertificateFrameAComponentType = (
  props: CertificateFrameAComponentPropsType
) => {
  const { classAdded, children, borderImageSourceUrl } = props

  const propsOut: CertificateFrameAPropsOutType = {
    borderImageSourceUrlProps: borderImageSourceUrl || BORDER_IMAGE_SORCE_URALS.default,
  }

  return (
    <div
      className={getClasses('CertificateFrameA', classAdded)}
      style={{ borderImageSource: `url(${propsOut.borderImageSourceUrlProps})` }}
    >
      {children}
    </div>
  )
}

export const CertificateFrameA: CertificateFrameAType = React.memo(CertificateFrameAComponent)

export type {
  CertificateFrameAPropsType,
  CertificateFrameAPropsOutType,
  CertificateFrameAComponentType,
  CertificateFrameAType,
}

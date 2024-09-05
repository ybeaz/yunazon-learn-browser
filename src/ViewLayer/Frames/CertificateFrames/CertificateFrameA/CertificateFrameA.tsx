import React from 'react'

import { getClasses } from '../../../../Shared/getClasses'
import {
  CertificateFrameAComponentPropsType,
  CertificateFrameAPropsType,
  CertificateFrameAPropsOutType,
  CertificateFrameAComponentType,
  CertificateFrameAType,
} from './CertificateFrameATypes'

const BORDER_IMAGE_SORCE_URALS_CONST: Record<string, string> = {
  cogwheels: 'https://cdn.pixabay.com/photo/2018/05/11/16/38/gears-3390986_960_720.jpg',
  ornamentA: 'https://m.media-amazon.com/images/I/41zcSWiYniL._AC_.jpg',
  ornamentB: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  ornamentC: 'https://m.media-amazon.com/images/I/41ORQTzhk6L._AC_.jpg',
}

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
    borderImageSourceUrlProps: borderImageSourceUrl || BORDER_IMAGE_SORCE_URALS_CONST.ornamentB,
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

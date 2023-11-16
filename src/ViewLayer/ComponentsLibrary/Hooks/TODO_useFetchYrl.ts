import React, { useState, useEffect, useRef } from 'react'

export type UseTemplateYrlPropsType = {}

export interface UseTemplateYrlType {
  (props: UseTemplateYrlPropsType): void
}

/**
 * @description React hook to provide data fetching with AbortController()
 * @import import { useTemplateYrl } from './YrlNativeViewLibrary'
 * @link https://stackoverflow.com/a/61056569/4791116
 * @link https://dev.to/pallymore/clean-up-async-requests-in-useeffect-hooks-90h
 */

export const useTemplateYrl: UseTemplateYrlType = ({}) => {}

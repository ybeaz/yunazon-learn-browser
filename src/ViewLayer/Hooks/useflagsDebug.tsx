import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import {
  isDebugModalWindowQuestionScoresSuccess,
  isDebugModalWindowQuestionScoresFailure,
  isDebugCertificateRedirectTo,
} from '../../FeatureFlags'
import { courseFailure } from '../../ContentMock/courseFailureMock'
import { courseSuccess } from '../../ContentMock/courseSuccessMock'

/**
 * @description Hook to add debugging functionality
 * @import import { useflagsDebug } from '../Hooks/useflagsDebug'
 */
export function useflagsDebug(mediaLoadedCoursesString: string) {
  const navigate = useNavigate()

  useEffect(() => {
    /* isDebugModalWindowQuestionScoresSuccess() */
    if (isDebugModalWindowQuestionScoresSuccess()) {
      const eventAction01 = {
        typeEvent: 'SET_COURSES',
        data: [courseSuccess],
      }
      handleEvents({}, eventAction01)

      const eventAction02 = {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'QuestionScores',
            isActive: true,
            childProps: {
              courseCapture:
                'Исторические деятели России и СССР первой половины XX века',
            },
          },
        ],
      }
      handleEvents({}, eventAction02)
    } else if (isDebugModalWindowQuestionScoresFailure()) {
      const eventAction01 = {
        typeEvent: 'SET_COURSES',
        data: [courseFailure],
      }
      handleEvents({}, eventAction01)

      const eventAction02 = {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'QuestionScores',
            isActive: true,
            childProps: {
              courseCapture:
                'Исторические деятели России и СССР первой половины XX века',
            },
          },
        ],
      }
      handleEvents({}, eventAction02)
    } else if (isDebugCertificateRedirectTo()) {
      /* isDebugCertificateRedirectTo() */
      handleEvents(
        {},
        {
          typeEvent: 'GO_SCREEN',
          data: {
            history: navigate,
            path: '/d/QbPOPMImLHB/2023-11-20-certificate',
          },
        }
      )
    }
  }, [mediaLoadedCoursesString])
}

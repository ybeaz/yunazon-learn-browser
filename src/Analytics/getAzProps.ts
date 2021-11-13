import { IAzProps } from '../Interfaces/IAzProps'

export const getAzProps: Function = (type: string): IAzProps => {
  const output = {
    // NOT USED
    VISIT_TOPIC: (options: any) => {
      const { netTitle, documentCapture, documentID, courseID, contentID } =
        options

      return {
        type: 'mouseleave',
        name: 'element leave topic',
      }
    },

    CLICK_ADD_COURSE_BUTTON: (options: any) => {
      const { contentComponentName } = options

      return {
        type: 'click',
        name: 'add course button clicked',
        value: `{'contentComponentName':'${contentComponentName}'}`,
        level: 5,
      }
    },

    CLICK_SOCIAL_NET_BUTTON: (options: any) => {
      const { netTitle, documentCapture, documentID, courseID, contentID } =
        options

      return {
        type: 'click',
        name: 'social net button clicked',
        value: `{'netTitle':'${netTitle}','documentCapture':'${documentCapture}','documentID':'${documentID}','courseID':'${courseID}','contentID':'${contentID}'}`,
        level: 5,
      }
    },

    DOCUMENT_LINK_COPIED: (options: any) => {
      const { documentCapture, documentID, courseID, contentID } = options

      return {
        type: 'click',
        name: 'document link copied',
        value: `{'documentCapture':'${documentCapture}','documentID':'${documentID}','courseID':'${courseID}','contentID':'${contentID}'}`,
        level: 5,
      }
    },

    DOCUMENT_EMAIL_SENT: (options: any) => {
      const { documentID, sendTo, sendCc } = options

      return {
        type: 'click',
        name: 'document email sent',
        value: `{'documentID':'${documentID}','sendTo':'${sendTo}','sendCc':'${sendCc}'}`,
        level: 5,
      }
    },

    DOCUMENT_PRINTED: (options: any) => {
      const { documentCapture, documentID, courseID, contentID } = options

      return {
        type: 'click',
        name: 'document printed',
        value: `{'documentCapture':'${documentCapture}','documentID':'${documentID}','courseID':'${courseID}','contentID':'${contentID}'}`,
        level: 5,
      }
    },

    PERSONAL_DATA_SUBMITTED: (options: any) => {
      const { courseCapture } = options
      return {
        type: 'click',
        name: 'personal data submitted',
        value: `{'courseCapture':'${courseCapture}'}`,
        level: 4,
      }
    },

    RESULTS_SUBMITTED: (options: any) => {
      const { result, courseCapture } = options
      return {
        type: 'click',
        name: `results submitted: ${result}`,
        value: `{'courseCapture':'${courseCapture}','result':'${result}'}`,
        level: 3,
      }
    },

    QUESTIONS_STEPPED_FORWARD: (options: any) => {
      const { courseCapture, questionsSlideNumber } = options
      return {
        type: 'click',
        name: 'questions: step forward',
        value: `{'courseCapture':'${courseCapture}','questionsSlideNumber':'${questionsSlideNumber}'}`,
        level: 2,
      }
    },

    MODULE_STARTED: (options: any) => {
      const { courseCapture, courseID, moduleID, contentID } = options

      return {
        type: 'click',
        name: 'module started',
        value: `{'courseCapture':'${courseCapture}','courseID':'${courseID}','moduleID':'${moduleID}','contentID':'${contentID}'}`,
        level: 2,
      }
    },

    WENT_BACK: (options: any) => {
      const { result, courseCapture } = options
      return {
        type: 'click',
        name: `went back: ${result}`,
        value: `{'result':'${result}','courseCapture':'${courseCapture}'}`,
        level: 1,
      }
    },

    COURSE_PLATE_CLICKED: (options: any) => {
      const { courseCapture, courseID, moduleID, contentID } = options

      return {
        type: 'click',
        name: 'plate clicked',
        value: `{'courseCapture':'${courseCapture}','courseID':'${courseID}','moduleID':'${moduleID}','contentID':'${contentID}'}`,
        level: 1,
      }
    },

    FROM_CERTIFICATE_WENT_BACK: options => {
      const { documentCapture } = options
      return {
        type: 'click',
        name: 'from certificate went back',
        value: `{'documentCapture':'${documentCapture}'}`,
      }
    },

    LOGO_CLICKED: () => {
      return {
        type: 'click',
        name: 'logo clicked',
      }
    },

    SIDE_PANEL_TOGGLED: () => ({
      type: 'click',
      name: 'side panel toggled',
    }),

    APP_LANGUAGE_SELECTED: (options: string) => {
      return {
        type: 'click',
        name: 'language selected',
        value: options,
      }
    },
  }

  return output[type]
}

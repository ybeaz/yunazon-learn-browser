import { IAzProps } from '../Interfaces/IAzProps'

export const getAzProps: Function = (type: string): IAzProps => {
  const output = {
    MODULE_STARTED: (options: any) => {
      const { courseCapture } = options

      return {
        type: 'click',
        name: 'module started',
        value: `{'courseCapture':'${courseCapture}'}`,
        level: 2,
      }
    },

    LANGUAGE_SELECTED: (options: string) => {
      return {
        type: 'click',
        name: 'language selected',
        value: options,
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

    QUESTIONS_STEPPED_FORWARD: (options: any) => {
      const { courseCapture } = options
      return {
        type: 'click',
        name: 'questions: step forward',
        value: `{'courseCapture':'${courseCapture}'}`,
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

    RESULTS_SUBMITTED: (options: any) => {
      const { result, courseCapture } = options
      return {
        type: 'click',
        name: `results submitted: ${result}`,
        value: `{'courseCapture':'${courseCapture}','result':'${result}'}`,
        level: 3,
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

    SIDE_PANEL_TOGGLED: () => ({
      type: 'click',
      name: 'side panel toggled',
    }),
  }

  return output[type]
}

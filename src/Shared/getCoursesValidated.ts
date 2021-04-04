const noCourseDescription = ({
  courseValidation,
  courseIndex,
  courseCapture,
  courseDescription,
}) => {
  if (!courseDescription) {
    courseValidation = [
      ...courseValidation,
      { type: 'no-course-description', courseIndex, courseCapture },
    ]
  }
  return courseValidation
}

const noCourseCapture = ({ courseValidation, courseIndex, courseCapture }) => {
  if (!courseCapture) {
    courseValidation = [
      ...courseValidation,
      { type: 'no-course-capture', courseIndex },
    ]
  }
  return courseValidation
}

const noQuestions = ({
  courseValidation,
  courseIndex,
  courseCapture,
  moduleIndex,
  questions,
}) => {
  if (!questions.length) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'no-questions',
        courseIndex,
        courseCapture,
        moduleIndex,
      },
    ]
  }
  return courseValidation
}

const noRightOption = ({
  courseValidation,
  courseIndex,
  courseCapture,
  moduleIndex,
  questionIndex,
  questionCapture,
  options,
}) => {
  const isFound = options.find(option => option.status === true)
  if (!isFound) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'no-right-option',
        courseIndex,
        courseCapture,
        moduleIndex,
        questionIndex,
        questionCapture,
      },
    ]
  }
  return courseValidation
}

/**
 * @description Function to validate a course by known criteria
 * @param courses: any[]
 * @returns content: any[]
 */
export const getCoursesValidated: Function = (courses: any[]): any[] => {
  let courseValidation: any[] = []

  courses.forEach((course, courseIndex) => {
    const {
      capture: courseCapture,
      description: courseDescription,
      modules,
    } = course
    courseValidation = noCourseCapture({
      courseValidation,
      courseIndex,
      courseCapture,
    })

    courseValidation = noCourseDescription({
      courseValidation,
      courseIndex,
      courseCapture,
      courseDescription,
    })

    modules.forEach((module: any, moduleIndex: number) => {
      const { questions } = module

      courseValidation = noQuestions({
        courseValidation,
        courseIndex,
        courseCapture,
        moduleIndex,
        questions,
      })

      questions.forEach((question, questionIndex) => {
        const { capture: questionCapture, options } = question

        courseValidation = noRightOption({
          courseValidation,
          courseIndex,
          courseCapture,
          moduleIndex,
          questionIndex,
          questionCapture,
          options,
        })

        options.forEach(option => {})
      })
    })
  })

  if (courseValidation.length) {
    console.error('getCourseValidated [35]', courseValidation)
  }
  return courses
}

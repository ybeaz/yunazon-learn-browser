const errorCourse = ({
  courseValidation,
  courseIndex,
  courseID,
  courseCapture,
  courseDescription,
  language,
  isActive,
  questionNumber,
  passRate,
  meta,
}) => {
  if (!courseID || typeof courseID !== 'string' || courseID.length < 10) {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-courseID-or-type-error', courseIndex, courseCapture },
    ]
  }

  if (
    !courseCapture ||
    typeof courseCapture !== 'string' ||
    courseCapture.length < 12
  ) {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-capture-or-type-error', courseIndex, courseCapture },
    ]
  }

  if (
    !courseDescription ||
    typeof courseDescription !== 'string' ||
    courseDescription.length < 64
  ) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-description-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  if (!language || typeof language !== 'string' || language.length < 2) {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-language-or-type-error', courseIndex, courseCapture },
    ]
  }

  if (typeof isActive !== 'boolean') {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-isActive-or-type-error', courseIndex, courseCapture },
    ]
  }

  if (
    !questionNumber ||
    typeof questionNumber !== 'number' ||
    questionNumber <= 1
  ) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-questionNumber-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  if (
    !passRate ||
    typeof passRate !== 'number' ||
    passRate > 1 ||
    passRate <= 0
  ) {
    courseValidation = [
      ...courseValidation,
      { type: 'course-no-passRate-or-type-error', courseIndex, courseCapture },
    ]
  }

  const { institution, specTitle, specName, email, isSendingBcc } = meta
  if (
    !institution ||
    typeof institution !== 'string' ||
    institution.length < 2
  ) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-meta-institution-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  if (!specTitle || typeof specTitle !== 'string' || specTitle.length < 2) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-meta-specTitle-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  if (!specName || typeof specName !== 'string' || specName.length < 2) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-meta-specName-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  if (!email || typeof email !== 'string' || email.length < 2) {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-meta-email-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  if (typeof isSendingBcc !== 'boolean') {
    courseValidation = [
      ...courseValidation,
      {
        type: 'course-no-meta-isSendingBcc-or-type-error',
        courseIndex,
        courseCapture,
      },
    ]
  }

  return courseValidation
}

const errorModules = ({
  courseValidation,
  courseIndex,
  courseCapture,
  modules,
}) => {
  let errors = []
  let isFound: any

  if (!modules.length) errors = [...errors, 'module-no-modules']

  isFound = modules.find(
    (module: any) =>
      !module.moduleID ||
      module.moduleID === '' ||
      typeof module.moduleID !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-moduleID-or-type-error']

  isFound = modules.find(
    (module: any) =>
      module.index === undefined || typeof module.index !== 'number'
  )
  if (isFound) errors = [...errors, 'module-no-index-or-type-error']

  isFound = modules.find(
    (module: any) =>
      module.isActive === undefined || typeof module.isActive !== 'boolean'
  )
  if (isFound) errors = [...errors, 'module-no-isActive-or-type-error']

  isFound = modules.find(
    (module: any) =>
      module.contentType === undefined || typeof module.contentType !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-contentType-or-type-error']

  isFound = modules.find(
    (module: any) =>
      module.contentID === undefined || typeof module.contentID !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-index-or-type-error']

  isFound = modules.find(
    (module: any) =>
      !module.capture ||
      module.capture === '' ||
      typeof module.capture !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-capture-or-type-error']

  isFound = modules.find(
    (module: any) =>
      !module.duration ||
      module.duration === 0 ||
      typeof module.duration !== 'string'
  )
  if (isFound) errors = [...errors, 'module-no-duration-or-type-error']

  if (errors.length) {
    return [
      ...courseValidation,
      {
        errors,
        courseIndex,
        courseCapture,
      },
    ]
  } else return courseValidation
}

const errorQuestions = ({
  courseValidation,
  courseIndex,
  courseCapture,
  moduleIndex,
  questions,
}) => {
  let errors = []
  let isFound: any

  if (!questions.length) errors = [...errors, 'questions-no-questions']

  isFound = questions.find(
    question =>
      !question.capture ||
      question.capture === '' ||
      typeof question.capture !== 'string'
  )
  if (isFound) errors = [...errors, 'question-no-capture-or-type-error']

  isFound = questions.find(
    question =>
      question.isActive === undefined || typeof question.isActive !== 'boolean'
  )
  if (isFound) errors = [...errors, 'question-no-isActive-or-type-error']

  if (errors.length) {
    return [
      ...courseValidation,
      {
        errors,
        courseIndex,
        courseCapture,
        moduleIndex,
      },
    ]
  } else return courseValidation
}

const errorOptions = ({
  courseValidation,
  courseIndex,
  courseCapture,
  moduleIndex,
  questionIndex,
  questionCapture,
  options,
}) => {
  let errors = []
  let isFound: any

  isFound = options.find(
    option =>
      !option.label || option.label === '' || typeof option.label !== 'string'
  )
  if (isFound) errors = [...errors, 'option-no-label-or-type-error']

  isFound = options.find(option => {
    const output =
      !option.hasOwnProperty('status') ||
      !(option.status === true || option.status === false)
    return output
  })
  if (isFound) errors = [...errors, 'option-no-status-or-type-error']

  isFound = options.find(option => option.status === true)
  if (!isFound) errors = [...errors, 'option-no-right-option']

  if (errors.length) {
    return [
      ...courseValidation,
      {
        errors,
        courseIndex,
        courseCapture,
        moduleIndex,
        questionIndex,
        questionCapture,
      },
    ]
  } else return courseValidation
}

/**
 * @description Function to validate a course by known criteria
 * @param courses: any[]
 * @returns content: any[]
 */
export const getValidatedCourses: Function = (courses: any[]): any[] => {
  let courseValidation: any[] = []

  courses.forEach((course, courseIndex) => {
    const {
      courseID,
      capture: courseCapture,
      description: courseDescription,
      language,
      isActive,
      questionNumber,
      passRate,
      meta,
      modules,
    } = course

    courseValidation = errorCourse({
      courseValidation,
      courseIndex,
      courseID,
      courseCapture,
      courseDescription,
      language,
      isActive,
      questionNumber,
      passRate,
      meta,
    })

    courseValidation = errorModules({
      courseValidation,
      courseIndex,
      courseCapture,
      modules,
    })

    modules.forEach((module: any, moduleIndex: number) => {
      const { questions } = module

      courseValidation = errorQuestions({
        courseValidation,
        courseIndex,
        courseCapture,
        moduleIndex,
        questions,
      })

      questions.forEach((question, questionIndex) => {
        const { capture: questionCapture, options } = question

        courseValidation = errorOptions({
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
    console.error('getCourseValidated 225]', courseValidation)
  }
  return courses
}

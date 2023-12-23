import { CourseType, ModuleType, QuestionType, OptionType } from '../@types/'

/**
 * @description Function to get answer by optionID
 * @import import { getCheckedCoursesAnswered } from 'src/Shared/getCheckedCoursesAnswered'
 */

export const getCheckedCoursesAnswered = (courses: CourseType[]): boolean => {
  let isAnswered = true

  for (let course of courses) {
    if (!isAnswered) break

    const modules: any = course.modules || []

    for (let module of modules) {
      if (!isAnswered) break

      const { questions } = module

      for (let question of questions) {
        const options: (OptionType & { answer?: boolean })[] = question.options

        isAnswered = options.some(option => option.answer === true)

        if (!isAnswered) break
      }
    }
  }

  return isAnswered
}

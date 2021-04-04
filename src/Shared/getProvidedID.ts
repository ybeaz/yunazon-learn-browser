import { v4 as uuidv4 } from 'uuid'

/**
 * @description Function to provide content arr with IDs for courses, questions, options
 * @param content: any[]
 * @returns content: any[]
 */
export const getProvidedID: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.map(question => {
        const { options } = question

        const optionNext = options.map(option => {
          const uuid = uuidv4()
          return { optionID: uuid, ...option }
        })

        const uuid = uuidv4()
        return { questionID: uuid, ...question, options: optionNext }
      })

      const uuid = uuidv4()
      return { moduleID: uuid, ...module, questions: questionsNext }
    })

    const uuid = uuidv4()
    return { courseID: uuid, ...course, modules: modulesNext }
  })
}

// Testing and debugging

// const content = [
//   {
//     ytID: 'QHCFNu4D1uA',
//     course: 'Уравнения с модулями.',
//     description:
//       'Данный курс о путях решения уравнений с модулями: метод интервала, графический метод, метод геометрической интерпретации. Как раскрывать модуль с правилом знаком? При каких значениях x функция обращаться в ноль? Как графики взаимодействуют? Как анализировать уравнение путем геометрической интерпретации?',
//     meta: {
//       institution: 'Канал на Ютубе TutorOnline',
//       specTitle: '...',
//       specName: 'Ольга',
//     },
//     questions: [
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture: 'Сколько существует видов решения уравнений с модулями?',
//         options: [
//           { label: '1', status: false },
//           { label: '3', status: true },
//           { label: '2', status: false },
//           { label: '4', status: false },
//         ],
//       },
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture:
//           'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
//         options: [
//           { label: '1', status: false },
//           { label: '2', status: true },
//           { label: '4', status: false },
//         ],
//       },
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture: '|3x-2|=1 ',
//         options: [
//           { label: 'x¹=1/3x²=1', status: true },
//           { label: 'x¹=1', status: false },
//           { label: 'x€[1/3;1]', status: false },
//         ],
//       },
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture:
//           'Если иксы сократились и получилось равенство чисел, какое из утверждений верно?',
//         options: [
//           {
//             label: 'Если получилась прада, например 2=2, то x€R',
//             status: true,
//           },
//           {
//             label: 'Если получилась неправда, то у уравнения нет корней',
//             status: true,
//           },
//           {
//             label: 'Если получилась правда, то у уравнения нет корней',
//             status: false,
//           },
//         ],
//       },
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture: 'При каких значениях x уравнение обращаться в ноль?',
//         options: [
//           { label: 'x=1', status: true },
//           { label: 'x=1, x=-2', status: false },
//           { label: 'x€[-2;1]', status: false },
//         ],
//       },
//     ],
//   },
//   {
//     ytID: 'wBvQba1DI1Y',
//     course: 'Исторические деятели России и СССР первой половины XX века',
//     meta: {
//       institution: 'Студия "Городок"',
//       specTitle: 'Специалист Oтдела Мировой Истории',
//       specName: 'Олег Приколов',
//     },
//     questions: [
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture: 'Согласно текста самодержец Николка',
//         options: [
//           { label: 'был внешностью красив', status: false },
//           { label: 'правил так, что было что закусить', status: true },
//           { label: 'был выдающейся личностью в истории', status: false },
//           { label: 'не видел дальше носа своего', status: true },
//         ],
//       },
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture: 'Согласно услышанного при товарище Сталине...',
//         options: [
//           { label: 'колхозы распустили', status: false },
//           { label: 'строились ТЭЦ', status: true },
//           { label: 'в лагеря загнали всех', status: true },
//           { label: 'граждан жизни не лишали', status: false },
//         ],
//       },
//       {
//         designType: 'CheckBox',
//         multi: true,
//         capture: 'Согласно песни Микитушка...',
//         options: [
//           { label: 'наградил Кеннади медалью', status: false },
//           { label: 'совершил немного дел', status: false },
//           { label: 'был невысого роста', status: true },
//           { label: 'пихал (космонавтов) на Луну', status: true },
//         ],
//       },
//     ],
//   },
// ]

// const contentNext = getProvidedContentID(content)

// console.info('getProvidedContentID [153]', {
//   'contentNext[0]': contentNext[0],
//   'contentNext[0].questions[0]': contentNext[0].questions[0],
//   'contentNext[0].questions[0].options': contentNext[0].questions[0].options,
//   content,
// })

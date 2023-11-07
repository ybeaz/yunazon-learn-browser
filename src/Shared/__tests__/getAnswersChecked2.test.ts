import { getAnswersChecked2 } from '../getAnswersChecked2'

const questions_220 = [
  {
    designType: 'CheckBox',
    multi: true,
    capture: 'Сколько существует видов решения уравнений с модулями? ',
    options: [
      { label: '1', status: false, answer: false },
      { label: '3', status: true, answer: true },
      { label: '2', status: true, answer: true },
      { label: '4', status: false, answer: false },
    ],
  },
  {
    designType: 'CheckBox',
    multi: true,
    capture:
      'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
    options: [
      { label: '1', status: false, answer: false },
      { label: '2', status: true, answer: true },
      { label: '4', status: false, answer: false },
    ],
  },
]

const questions2_211 = [
  {
    designType: 'CheckBox',
    multi: true,
    capture: 'Сколько существует видов решения уравнений с модулями?',
    options: [
      { label: '1', status: false, answer: false },
      { label: '3', status: true, answer: true },
      { label: '2', status: true, answer: true },
      { label: '4', status: false, answer: false },
    ],
  },
  {
    designType: 'CheckBox',
    multi: true,
    capture:
      'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
    options: [
      { label: '1', status: false, answer: true },
      { label: '2', status: true, answer: true },
      { label: '4', status: false, answer: false },
    ],
  },
]

const questions3_202 = [
  {
    designType: 'CheckBox',
    multi: true,
    capture: 'Сколько существует видов решения уравнений с модулями?',
    options: [
      { label: '1', status: false, answer: true },
      { label: '3', status: true, answer: true },
      { label: '2', status: true, answer: false },
      { label: '4', status: false, answer: false },
    ],
  },
  {
    designType: 'CheckBox',
    multi: true,
    capture:
      'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
    options: [
      { label: '1', status: false, answer: true },
      { label: '2', status: true, answer: true },
      { label: '4', status: false, answer: false },
    ],
  },
]

const questions4_202 = [
  {
    designType: 'CheckBox',
    multi: true,
    capture: 'Сколько существует видов решения уравнений с модулями?',
    options: [
      { label: '1', status: false, answer: true },
      { label: '3', status: true, answer: false },
      { label: '2', status: true, answer: false },
      { label: '4', status: false, answer: true },
    ],
  },
  {
    designType: 'CheckBox',
    multi: true,
    capture:
      'В графическом способе решения уравнения с модулями сколько надо построить графиков?',
    options: [
      { label: '1', status: false, answer: true },
      { label: '2', status: true, answer: true },
      { label: '4', status: false, answer: false },
    ],
  },
]

describe('Algoritms', () => {
  it('test getAnswersChecked with renaming', () => {
    let expected = undefined
    let output4_202 = getAnswersChecked2(questions4_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output4_202).toEqual(expected)
    let output3_202 = getAnswersChecked2(questions3_202)
    expected = { total: 2, right: 0, wrong: 2 }
    expect(output3_202).toEqual(expected)
    let output2_211 = getAnswersChecked2(questions2_211)
    expected = { total: 2, right: 1, wrong: 1 }
    expect(output2_211).toEqual(expected)
    let output_220 = getAnswersChecked2(questions_220)
    expected = { total: 2, right: 2, wrong: 0 }
    expect(output_220).toEqual(expected)
  })
})

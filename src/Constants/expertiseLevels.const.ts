export type ExpertiseElementType = {
  level: number
  name: string
  min: number
  max: number
  iconName: string
  documentName: string
}
export type IconLibType = 'fa'
export type ExpertiseLevelType = ExpertiseElementType[]

export const EXPERTISE_LEVELS: ExpertiseLevelType = [
  {
    level: 1,
    name: 'Learner',
    min: 0,
    max: 4,
    iconName: 'FaUserSlash',
    documentName: 'Certificate of Completion',
  },
  {
    level: 3,
    name: 'Beginner',
    min: 5,
    max: 8,
    iconName: 'FaUserPlus',
    documentName: 'Certificate of Training',
  },
  {
    level: 4,
    name: 'Intermediate',
    min: 9,
    max: 12,
    iconName: 'FaUserCog',
    documentName: 'Certificate of Competency',
  },
  {
    level: 6,
    name: 'Advanced',
    min: 13,
    max: 16,
    iconName: 'FaUserLock',
    documentName: 'Certificate of Achievement',
  },
  {
    level: 7,
    name: 'Specialist',
    min: 17,
    max: 20,
    iconName: 'FaUserGraduate',
    documentName: 'Certificate of Excellence',
  },
  {
    level: 8,
    name: 'Competent',
    min: 21,
    max: 24,
    iconName: 'FaUserTie',
    documentName: 'Certificate of Recognition',
  },
  {
    level: 10,
    name: 'Proficient',
    min: 25,
    max: 28,
    iconName: 'FaUserShield',
    documentName: 'Dimploma',
  },
  { level: 12, name: 'Expert', min: 29, max: 32, iconName: 'FaUserMd', documentName: 'Dimploma' },
  {
    level: 14,
    name: 'Master',
    min: 33,
    max: 36,
    iconName: 'FaUserNinja',
    documentName: 'Dimploma',
  },
  {
    level: 15,
    name: 'Guru',
    min: 37,
    max: 40,
    iconName: 'FaWandMagicSparkles',
    documentName: 'Dimploma',
  },
  {
    level: 16,
    name: 'Wizard',
    min: 41,
    max: 44,
    iconName: 'FaHatWizard',
    documentName: 'Dimploma',
  },
  { level: 17, name: 'Sage', min: 45, max: 48, iconName: 'GiSnake', documentName: 'Dimploma' },
  {
    level: 18,
    name: 'Enlightened',
    min: 49,
    max: 52,
    iconName: 'FaRegSun',
    documentName: 'Dimploma',
  },
  {
    level: 20,
    name: 'Legendary',
    min: 53,
    max: 1000000,
    iconName: 'FaMountainSun',
    documentName: 'Dimploma',
  },
]

/*
Certificate of Completion
Certificate of Training
Certificate of Competency
Certificate of Achievement
Certificate of Excellence
Certificate of Recognition

Certificate of Attendance
Certificate of Participation
Certificate of Appreciation
Certificate of Proficiency

{ level: 2, name: 'Novice', min: 3, max: 4, iconName: 'FaUserMinus', documentName: 'Certificate of Completion' },
{ level: 5, name: 'Skilled', min: 9, max: 12, iconName: 'FaUserCheck', documentName: 'Certificate of Training' },
{ level: 9, name: 'Adept', min: 25, max: 28, iconName: 'FaUserEdit', documentName: 'Dimploma' },
{ level: 11, name: 'Teacher', min: 33, max: 36, iconName: 'FaChalkboardTeacher', documentName: 'Award' },
{ level: 13, name: 'Virtuoso', min: 41, max: 44, iconName: 'FaUserAstronaut', documentName: '' },
{ level: 19, name: 'Transcendent', min: 73, max: 84, iconName: 'FaMoon', documentName: '' },
*/

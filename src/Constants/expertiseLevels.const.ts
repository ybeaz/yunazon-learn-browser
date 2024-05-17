export type ExpertiseElementType = {
  level: number
  name: string
  min: number
  max: number
  iconName: string
}
export type IconLibType = 'fa'
export type ExpertiseLevelType = ExpertiseElementType[]

export const EXPERTISE_LEVELS: ExpertiseLevelType = [
  { level: 0, name: '', min: 0, max: 1, iconName: '' },
  { level: 1, name: 'Novice', min: 2, max: 5, iconName: 'FaUserSlash' },
  { level: 2, name: 'Beginner', min: 6, max: 8, iconName: 'FaUserMinus' },
  { level: 3, name: 'Learner', min: 9, max: 11, iconName: 'FaUserPlus' },
  { level: 4, name: 'Intermediate', min: 12, max: 17, iconName: 'FaUserCog' },
  { level: 5, name: 'Skilled', min: 18, max: 23, iconName: 'FaUserCheck' },
  { level: 6, name: 'Advanced', min: 24, max: 29, iconName: 'FaUserLock' },
  { level: 7, name: 'Specialist', min: 30, max: 35, iconName: 'FaUserGraduate' },
  { level: 8, name: 'Competent', min: 36, max: 41, iconName: 'FaUserTie' },
  { level: 9, name: 'Adept', min: 42, max: 47, iconName: 'FaUserEdit' },
  { level: 10, name: 'Proficient', min: 48, max: 53, iconName: 'FaUserShield' },
  { level: 11, name: 'Teacher', min: 54, max: 59, iconName: 'FaChalkboardTeacher' },
  { level: 12, name: 'Expert', min: 60, max: 65, iconName: 'FaUserMd' },
  { level: 13, name: 'Virtuoso', min: 66, max: 71, iconName: 'FaUserAstronaut' },
  { level: 14, name: 'Master', min: 72, max: 77, iconName: 'FaUserNinja' },
  { level: 15, name: 'Guru', min: 78, max: 83, iconName: 'FaWandMagicSparkles' },
  { level: 16, name: 'Wizard', min: 84, max: 89, iconName: 'FaHatWizard' },
  { level: 17, name: 'Sage', min: 90, max: 95, iconName: 'GiSnake' },
  { level: 18, name: 'Enlightened', min: 96, max: 101, iconName: 'FaRegSun' },
  { level: 19, name: 'Transcendent', min: 102, max: 107, iconName: 'FaMoon' },
  { level: 20, name: 'Legendary', min: 108, max: 1000000, iconName: 'FaMountainSun' },
]

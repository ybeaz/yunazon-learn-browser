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
  { level: 1, name: 'Learner', min: 0, max: 2, iconName: 'FaUserSlash' },
  { level: 2, name: 'Novice', min: 3, max: 4, iconName: 'FaUserMinus' },
  { level: 3, name: 'Beginner', min: 5, max: 6, iconName: 'FaUserPlus' },
  { level: 4, name: 'Intermediate', min: 7, max: 8, iconName: 'FaUserCog' },
  { level: 5, name: 'Skilled', min: 9, max: 12, iconName: 'FaUserCheck' },
  { level: 6, name: 'Advanced', min: 13, max: 16, iconName: 'FaUserLock' },
  { level: 7, name: 'Specialist', min: 17, max: 20, iconName: 'FaUserGraduate' },
  { level: 8, name: 'Competent', min: 21, max: 24, iconName: 'FaUserTie' },
  { level: 9, name: 'Adept', min: 25, max: 28, iconName: 'FaUserEdit' },
  { level: 10, name: 'Proficient', min: 29, max: 32, iconName: 'FaUserShield' },
  { level: 11, name: 'Teacher', min: 33, max: 36, iconName: 'FaChalkboardTeacher' },
  { level: 12, name: 'Expert', min: 37, max: 40, iconName: 'FaUserMd' },
  { level: 13, name: 'Virtuoso', min: 41, max: 44, iconName: 'FaUserAstronaut' },
  { level: 14, name: 'Master', min: 45, max: 48, iconName: 'FaUserNinja' },
  { level: 15, name: 'Guru', min: 49, max: 52, iconName: 'FaWandMagicSparkles' },
  { level: 16, name: 'Wizard', min: 53, max: 56, iconName: 'FaHatWizard' },
  { level: 17, name: 'Sage', min: 57, max: 60, iconName: 'GiSnake' },
  { level: 18, name: 'Enlightened', min: 61, max: 72, iconName: 'FaRegSun' },
  { level: 19, name: 'Transcendent', min: 73, max: 84, iconName: 'FaMoon' },
  { level: 20, name: 'Legendary', min: 85, max: 1000000, iconName: 'FaMountainSun' },
]

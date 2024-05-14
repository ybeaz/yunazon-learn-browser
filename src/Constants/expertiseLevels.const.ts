export type ExpertiseElementType = { name: string; min: number; max: number; iconName: string }

export type ExpertiseLevelType = Record<'fa', Record<number, ExpertiseElementType>>

export const EXPERTISE_LEVELS: ExpertiseLevelType = {
  fa: {
    1: { name: 'Novice', min: 2, max: 5, iconName: 'FaUserSlash' },
    2: { name: 'Beginner', min: 6, max: 8, iconName: 'FaUserMinus' },
    3: { name: 'Learner', min: 9, max: 11, iconName: 'FaUserPlus' },
    4: { name: 'Intermediate', min: 12, max: 17, iconName: 'FaUserCog' },
    5: { name: 'Skilled', min: 18, max: 23, iconName: 'FaUserCheck' },
    6: { name: 'Advanced', min: 24, max: 29, iconName: 'FaUserLock' },
    7: { name: 'Specialist', min: 30, max: 35, iconName: 'FaUserGraduate' },
    8: { name: 'Competent', min: 36, max: 41, iconName: 'FaUserTie' },
    9: { name: 'Adept', min: 42, max: 47, iconName: 'FaUserEdit' },
    10: { name: 'Proficient', min: 48, max: 53, iconName: 'FaUserShield' },
    11: { name: 'Teacher', min: 54, max: 59, iconName: 'FaChalkboardTeacher' },
    12: { name: 'Expert', min: 60, max: 65, iconName: 'FaUserMd' },
    13: { name: 'Virtuoso', min: 66, max: 71, iconName: 'FaUserAstronaut' },
    14: { name: 'Master', min: 72, max: 77, iconName: 'FaUserNinja' },
    15: { name: 'Guru', min: 78, max: 83, iconName: 'FaWandMagicSparkles' },
    16: { name: 'Wizard', min: 84, max: 89, iconName: 'FaHatWizard' },
    17: { name: 'Sage', min: 90, max: 95, iconName: 'GiSnake' },
    18: { name: 'Enlightened', min: 96, max: 101, iconName: 'FaRegSun' },
    19: { name: 'Transcendent', min: 102, max: 107, iconName: 'FaMoon' },
    20: { name: 'Legendary', min: 108, max: 1000000, iconName: 'FaMountainSun' },
  },
}

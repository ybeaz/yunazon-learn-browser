export const BORDER_IMAGE_SORCE_URALS: Record<string, string> = {
  default: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  1: 'https://static8.depositphotos.com/1070439/922/v/450/depositphotos_9228333-stock-illustration-calligraphy-ornamental-decorative-frame.jpg',
  2: 'https://as1.ftcdn.net/v2/jpg/02/09/91/80/1000_F_209918023_NOLYJ3xmJeS0KRgGy9rAGp2yhHRzqay4.jpg',
  3: 'https://m.media-amazon.com/images/I/41zcSWiYniL._AC_.jpg',
  4: 'https://m.media-amazon.com/images/I/41ORQTzhk6L._AC_.jpg',
  5: 'https://static.vecteezy.com/system/resources/thumbnails/044/240/796/small_2x/black-frame-for-name-tag-vintage-line-prayer-frame-pattern-for-decoration-vector.jpg',
  6: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  7: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  8: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  9: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  10: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  11: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  12: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  13: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  14: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
}

export type ExpertiseElementType = {
  level: number
  name: string
  min: number
  max: number
  iconName: string
  documentName: string
  borderImageSourceUrl: string
}
export type IconLibType = 'fa'
export type ExpertiseLevelType = ExpertiseElementType[]

const borderImageSourceUrlDefault: string =
  'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg'

export const EXPERTISE_LEVELS: ExpertiseLevelType = [
  {
    level: 1,
    name: 'Learner',
    min: 0,
    max: 4,
    iconName: 'FaUserSlash',
    documentName: 'Certificate of Completion',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[1],
  },
  {
    level: 2,
    name: 'Beginner',
    min: 5,
    max: 8,
    iconName: 'FaUserPlus',
    documentName: 'Certificate of Training',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[2],
  },
  {
    level: 3,
    name: 'Intermediate',
    min: 9,
    max: 12,
    iconName: 'FaUserCog',
    documentName: 'Certificate of Competency',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[3],
  },
  {
    level: 4,
    name: 'Advanced',
    min: 13,
    max: 16,
    iconName: 'FaUserLock',
    documentName: 'Certificate of Achievement',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[4],
  },
  {
    level: 5,
    name: 'Specialist',
    min: 17,
    max: 20,
    iconName: 'FaUserGraduate',
    documentName: 'Certificate of Excellence',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 6,
    name: 'Competent',
    min: 21,
    max: 24,
    iconName: 'FaUserTie',
    documentName: 'Certificate of Recognition',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 7,
    name: 'Proficient',
    min: 25,
    max: 28,
    iconName: 'FaUserShield',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 8,
    name: 'Expert',
    min: 29,
    max: 32,
    iconName: 'FaUserMd',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 9,
    name: 'Master',
    min: 33,
    max: 36,
    iconName: 'FaUserNinja',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 10,
    name: 'Guru',
    min: 37,
    max: 40,
    iconName: 'FaWandMagicSparkles',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 11,
    name: 'Wizard',
    min: 41,
    max: 44,
    iconName: 'FaHatWizard',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 12,
    name: 'Sage',
    min: 45,
    max: 48,
    iconName: 'GiSnake',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 13,
    name: 'Enlightened',
    min: 49,
    max: 52,
    iconName: 'FaRegSun',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
  {
    level: 14,
    name: 'Legendary',
    min: 53,
    max: 1000000,
    iconName: 'FaMountainSun',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS.default,
  },
]

/*
Beginner
Familiar
Fluent
Advanced

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

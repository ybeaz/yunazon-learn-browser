export const BORDER_IMAGE_SORCE_URALS: Record<string, string> = {
  default: 'https://m.media-amazon.com/images/I/51Kheqk1i6L._AC_.jpg',
  1: 'https://static8.depositphotos.com/1070439/922/v/450/depositphotos_9228333-stock-illustration-calligraphy-ornamental-decorative-frame.jpg',
  2: 'https://img.freepik.com/premium-vector/hand-drawn-diploma-border-frame_23-2151194163.jpg?ga=GA1.1.399173598.1725509946&semt=ais_hybrid',
  3: 'https://m.media-amazon.com/images/I/41zcSWiYniL._AC_.jpg',
  4: 'https://m.media-amazon.com/images/I/41ORQTzhk6L._AC_.jpg',
  5: 'https://thumbs.dreamstime.com/b/floral-frame-border-certificate-crown-blank-template-122760353.jpg',
  6: 'https://thumbs.dreamstime.com/b/blue-floral-border-certificates-crown-certificates-blue-floral-border-certificates-crown-122802880.jpg',
  7: 'https://img.freepik.com/free-vector/hand-drawn-diploma-border-frame_23-2151194184.jpg',
  8: 'https://www.freestock.com/450/freestock_134670728.jpg',
  9: 'https://img.freepik.com/free-vector/hand-drawn-diploma-border-frame_23-2151194172.jpg?semt=ais_hybrid',
  10: 'https://w7.pngwing.com/pngs/852/883/png-transparent-blue-and-white-invitation-template-frame-text-structure-area-pattern-empty-certificate-template-border-rectangle-academic-certificate.png',
  11: 'https://media.istockphoto.com/id/172740259/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%88%B8%E3%81%AE%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0.jpg?s=612x612&w=0&k=20&c=ECRQTZ5dhcInEvDRZep6WF1QkiRUKfYb7U5D2bUIzuw=',
  12: 'https://img.freepik.com/free-vector/hand-drawn-diploma-border-frame_23-2151194184.jpg?ga=GA1.1.399173598.1725509946&semt=ais_hybrid',
  13: 'https://img.freepik.com/free-vector/hand-drawn-diploma-border-frame_23-2151194166.jpg?ga=GA1.1.399173598.1725509946&semt=ais_hybrid',
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
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[5],
  },
  {
    level: 6,
    name: 'Competent',
    min: 21,
    max: 24,
    iconName: 'FaUserTie',
    documentName: 'Certificate of Recognition',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[6],
  },
  {
    level: 7,
    name: 'Proficient',
    min: 25,
    max: 28,
    iconName: 'FaUserShield',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[7],
  },
  {
    level: 8,
    name: 'Expert',
    min: 29,
    max: 32,
    iconName: 'FaUserMd',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[8],
  },
  {
    level: 9,
    name: 'Master',
    min: 33,
    max: 36,
    iconName: 'FaUserNinja',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[9],
  },
  {
    level: 10,
    name: 'Guru',
    min: 37,
    max: 40,
    iconName: 'FaWandMagicSparkles',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[10],
  },
  {
    level: 11,
    name: 'Wizard',
    min: 41,
    max: 44,
    iconName: 'FaHatWizard',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[11],
  },
  {
    level: 12,
    name: 'Sage',
    min: 45,
    max: 48,
    iconName: 'GiSnake',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[12],
  },
  {
    level: 13,
    name: 'Enlightened',
    min: 49,
    max: 52,
    iconName: 'FaRegSun',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[13],
  },
  {
    level: 14,
    name: 'Legendary',
    min: 53,
    max: 1000000,
    iconName: 'FaMountainSun',
    documentName: 'Dimploma',
    borderImageSourceUrl: BORDER_IMAGE_SORCE_URALS[14],
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

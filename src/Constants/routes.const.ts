export type RouteType = {
  page: string
  path: string
  children: any[]
  errorElement: string
}

export const ROUTES: RouteType[] = [
  {
    page: 'ArticlePresent',
    path: `/a/:articleID/:slug?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'AboutAcademy',
    path: `/about`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'Certificate',
    path: `/d/:documentID/:dataName?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'Profiles',
    path: `/profiles`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'CourseCreate' /* Screen/Page to display the form to create a course */,
    path: `/course-create/:courseID?/:moduleID?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'Courses' /* Screen/Page to display courses created by the author */,
    path: `/courses`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'Documents',
    path: `/documents`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'AcademyPresent',
    path: `/m/:moduleID/:moduleCapture?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'AcademyMatrix',
    path: `/`,
    children: [],
    errorElement: 'Error404',
  },
  {
    page: 'Error404',
    path: `/error404`,
    children: [],
    errorElement: 'Error404',
  },
]

/* Remove after 2024-01-15

  // {
  //   page: 'CertificateStyled',
  //   path: `/Certificate-styled`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Dark',
  //   exact: true,
  // },

  // {
  //   page: 'AcademyMatrix',
  //   path: '/academy',
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Dark',
  //   exact: true,
  // },

  // {
  //   page: 'Profile',
  //   path: `/profile`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },
  // {
  //   page: 'StubForUserResearch',
  //   path: `/see-you`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },
  // {
  //   page: 'SkillsExchangeMatrix',
  //   path: `/sep`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },
  // {
  //   page: 'SkillsExchangeMatrixChRP',
  //   path: `/sep-2`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },

*/

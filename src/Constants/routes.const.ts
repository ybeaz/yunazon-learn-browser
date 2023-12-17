export type RouteType = {
  page: string
  path: string
  children: any[]
  errorElement: string
  themeDafault: string
  strict?: boolean
  exact?: boolean
}

export const ROUTES: RouteType[] = [
  {
    page: 'Certificate',
    path: `/d/:documentID/:dataName?`,
    children: [],
    errorElement: 'Error404',
    strict: true,
  },
  {
    page: 'Certificate',
    path: `/certificate`,
    children: [],
    errorElement: 'Error404',
    exact: true,
  },
  {
    page: 'AcademyPresent',
    path: `/m/:moduleID/:moduleCapture?`,
    children: [],
    errorElement: 'Error404',
    strict: true,
  },
  {
    page: 'AcademyMatrix',
    path: `/`,
    children: [],
    errorElement: 'Error404',
    exact: true,
  },
  {
    page: 'Error404',
    path: `/error404`,
    children: [],
    errorElement: 'Error404',
    exact: true,
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

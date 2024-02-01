export type RouteType = {
  screen: string
  path: string
  children: any[]
  errorElement: string
}

export const ROUTES: RouteType[] = [
  {
    screen: 'ArticlePresent',
    path: `/a/:articleID/:slugArticle?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'AboutAcademy',
    path: `/about`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'Certificate',
    path: `/d/:documentID/:slugDocument?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'Profiles',
    path: `/profiles`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen:
      'MyModules' /* Screen/Page to display modules and the form to create it */,
    path: `/my-modules`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'MyDocuments',
    path: `/my-documents`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'AcademyPresent',
    path: `/m/:moduleID/:slugModule?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'AcademyMatrix',
    path: `/`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'Error404',
    path: `/error404`,
    children: [],
    errorElement: 'Error404',
  },
]

/* Remove after 2024-01-15

  // {
  //   screen: 'CertificateStyled',
  //   path: `/Certificate-styled`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Dark',
  //   exact: true,
  // },

  // {
  //   screen: 'AcademyMatrix',
  //   path: '/academy',
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Dark',
  //   exact: true,
  // },

  // {
  //   screen: 'Profile',
  //   path: `/profile`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },
  // {
  //   screen: 'StubForUserResearch',
  //   path: `/see-you`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },
  // {
  //   screen: 'SkillsExchangeMatrix',
  //   path: `/sep`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },
  // {
  //   screen: 'SkillsExchangeMatrixChRP',
  //   path: `/sep-2`,
  //   children: [],
  //   errorElement: 'Error404',
  //   themeDafault: 'Light',
  //   exact: true,
  // },

*/

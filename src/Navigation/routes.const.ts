export type RouteType = {
  screen: string
  path: string
  children: any[]
  errorElement: string
}

export const ROUTES: RouteType[] = [
  {
    screen: 'TagsCloud',
    path: `/tags-cloud`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'ArticlePresent',
    path: `/a/:articleID/:slugArticle?`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'AcademyAbout',
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
    screen: 'Certificate2',
    path: `/d2/:documentID/:slugDocument?`,
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
    screen: 'MyModules' /* Screen/Page to display modules and the form to create it */,
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
    screen: 'ModulesPresent',
    path: `/m`,
    children: [],
    errorElement: 'Error404',
  },
  {
    screen: 'TagsCloud',
    path: `/t`,
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
    screen: 'AcademyMatrix',
    path: `/index.html`,
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

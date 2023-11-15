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
    page: 'Profile',
    path: `/profile`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Light',
    exact: true,
  },
  {
    page: 'StubForUserResearch',
    path: `/see-you`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Light',
    exact: true,
  },
  {
    page: 'SkillsExchangeMatrix',
    path: `/sep`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Light',
    exact: true,
  },
  {
    page: 'SkillsExchangeMatrixChRP',
    path: `/sep-2`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Light',
    exact: true,
  },
  {
    page: 'Certificate',
    path: `/d/:documentID`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    strict: true,
  },
  {
    page: 'CertificateStyled',
    path: `/Certificate-styled`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    exact: true,
  },
  {
    page: 'Certificate',
    path: `/certificate`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    exact: true,
  },
  {
    page: 'AcademyPresent',
    path: `/c/:moduleID/:moduleCapture`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    strict: true,
  },
  {
    page: 'AcademyMatrix',
    path: '/academy',
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    exact: true,
  },
  {
    page: 'AcademyMatrix',
    path: `/demo-youtube-learn.html/home`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    exact: true,
  },
  {
    page: 'AcademyMatrix',
    path: `/`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Dark',
    exact: true,
  },
]

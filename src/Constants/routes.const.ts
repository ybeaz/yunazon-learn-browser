interface IRoute {
  path: string
  strict?: boolean
  exact?: boolean
  page: string
  themeDafault: string
}

export const routes: IRoute[] = [
  {
    path: `/see-you`,
    exact: true,
    page: 'StubForUserResearch',
    themeDafault: 'Light',
  },
  {
    path: `/home`,
    exact: true,
    page: 'SkillsExchangeSearch',
    themeDafault: 'Light',
  },
  {
    path: `/exchange-search-2`,
    exact: true,
    page: 'SkillsExchangeSearchChRP',
    themeDafault: 'Light',
  },
  {
    path: `/d/:documentID`,
    strict: true,
    page: 'Certificate',
    themeDafault: 'Dark',
  },
  {
    path: `/Certificate-styled`,
    exact: true,
    page: 'CertificateStyled',
    themeDafault: 'Dark',
  },
  {
    path: `/certificate`,
    exact: true,
    page: 'Certificate',
    themeDafault: 'Dark',
  },
  {
    path: `/c/:courseID`,
    strict: true,
    page: 'AcademyPresent',
    themeDafault: 'Dark',
  },
  {
    path: '/academy',
    exact: true,
    page: 'AcademyMatrix',
    themeDafault: 'Dark',
  },
  {
    path: `/demo-youtube-learn.html/home`,
    exact: true,
    page: 'AcademyMatrix',
    themeDafault: 'Dark',
  },
  {
    path: `/`,
    exact: true,
    page: 'AcademyMatrix',
    themeDafault: 'Dark',
  },
]

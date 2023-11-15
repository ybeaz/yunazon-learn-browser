import React, { ReactElement } from 'react'
import {
  BrowserRouter,
  useRoutes,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { ROUTES, RouteType } from './Constants/routes.const'
import { Profile } from './ViewLayer/Screens/Profile'
import { StubForUserResearch } from './ViewLayer/Screens/StubForUserResearch'
import { SkillsExchangeMatrix } from './ViewLayer/Screens/SkillsExchangeMatrix'
import { SkillsExchangeMatrixChRP } from './ViewLayer/Screens/SkillsExchangeMatrixChRP'
import { AcademyMatrix } from './ViewLayer/Screens/AcademyMatrix'
import { AcademyPresent } from './ViewLayer/Screens/AcademyPresent'
import { Error404 } from './ViewLayer/Screens/Error404'
import { Certificate } from './ViewLayer/Screens/Certificate'

const PAGES: Record<string, any> = {
  Profile,
  StubForUserResearch,
  SkillsExchangeMatrix,
  SkillsExchangeMatrixChRP,
  AcademyMatrix,
  Certificate,
  AcademyPresent,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const demoHostName = 'r1.userto.com'
  const demoPath = '/demo-youtube-learn.html'
  const rootPath = location.hostname === demoHostName ? demoPath : ''

  interface IGetRoutes {
    (
      routesArg: {
        path: string
        strict?: boolean
        exact?: boolean
        page: string
        themeDafault: string
      }[]
    ): ReactElement[]
  }

  const routesDict = ROUTES.map((route: RouteType) => {
    const { page, path, themeDafault, children, errorElement } = route
    const Element = PAGES[route.page]
    const elementProps = { rootPath, routeProps: {}, themeDafault }
    const element = <Element {...elementProps} />
    return { element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  return <RouterProvider router={routes} />
}

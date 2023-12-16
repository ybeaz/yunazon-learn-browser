import React, { ReactElement, FunctionComponent } from 'react'
import { nanoid } from 'nanoid'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES, RouteType } from '../Constants/routes.const'
import { AcademyMatrix } from '../ViewLayer/Screens/AcademyMatrix/AcademyMatrix'
import { AcademyPresent } from '../ViewLayer/Screens/AcademyPresent/AcademyPresent'
import { Error404 } from '../ViewLayer/Screens/Error404'
import { Certificate } from '../ViewLayer/Screens/Certificate'

const PAGES: Record<string, FunctionComponent<any>> = {
  AcademyMatrix,
  Certificate,
  AcademyPresent,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const routesDict = ROUTES.map((route: RouteType, index: number) => {
    const { page, path, children, errorElement } = route
    const Element = PAGES[page]
    const element: ReactElement = <Element />
    console.info('NavigationWeb [46]', { element, page })
    const id = nanoid()
    return { id, element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  return <RouterProvider router={routes} />
}

/* Remove after 2024-01-15

import { Profile } from '../ViewLayer/Screens/Profile'
import { StubForUserResearch } from '../ViewLayer/Screens/StubForUserResearch'
import { SkillsExchangeMatrix } from '../ViewLayer/Screens/SkillsExchangeMatrix'
import { SkillsExchangeMatrixChRP } from '../ViewLayer/Screens/SkillsExchangeMatrixChRP'

  // Profile,
  // StubForUserResearch,
  // SkillsExchangeMatrix,
  // SkillsExchangeMatrixChRP,

*/

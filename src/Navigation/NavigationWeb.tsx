import React, { ReactElement, FunctionComponent } from 'react'
import { nanoid } from 'nanoid'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES, RouteType } from '../Constants/routes.const'
import { CourseCreate } from '../ViewLayer/Screens/CourseCreate/CourseCreate'
import { ArticlePresent } from '../ViewLayer/Screens/ArticlePresent/ArticlePresent'
import { AboutAcademy } from '../ViewLayer/Screens/AboutAcademy/AboutAcademy'
import { AcademyMatrix } from '../ViewLayer/Screens/AcademyMatrix/AcademyMatrix'
import { AcademyPresent } from '../ViewLayer/Screens/AcademyPresent/AcademyPresent'
import { Documents } from '../ViewLayer/Screens/Documents/Documents'
import { Profiles } from '../ViewLayer/Screens/Profiles/Profiles'
import { Courses } from '../ViewLayer/Screens/Courses/Courses'
import { Certificate } from '../ViewLayer/Screens/Certificate/Certificate'
import { Error404 } from '../ViewLayer/Screens/Error404'
import { useEffectedInitialRequests } from '../ViewLayer/Hooks/useEffectedInitialRequests'

const SCREENS: Record<string, FunctionComponent<any>> = {
  CourseCreate,
  ArticlePresent,
  AboutAcademy,
  AcademyMatrix,
  AcademyPresent,
  Documents,
  Profiles,
  Courses,
  Certificate,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const routesDict = ROUTES.map((route: RouteType, index: number) => {
    const { screen, path, children, errorElement } = route
    const Element = SCREENS[screen]
    const element: ReactElement = <Element />
    const id = nanoid()
    return { id, element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  useEffectedInitialRequests([{ type: 'GET_AUTH_DATA' }])

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

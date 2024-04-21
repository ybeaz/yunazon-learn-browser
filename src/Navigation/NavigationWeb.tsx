import React, { ReactElement, FunctionComponent } from 'react'
import { nanoid } from 'nanoid'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES, RouteType } from './routes.const'
import { MyModules } from '../ViewLayer/Screens/MyModules/MyModules'
import { ArticlePresent } from '../ViewLayer/Screens/ArticlePresent/ArticlePresent'
import { AcademyAbout } from '../ViewLayer/Screens/AcademyAbout/AcademyAbout'
import { AcademyMatrix } from '../ViewLayer/Screens/AcademyMatrix/AcademyMatrix'
import { AcademyPresent } from '../ViewLayer/Screens/AcademyPresent/AcademyPresent'
import { MyDocuments } from '../ViewLayer/Screens/MyDocuments/MyDocuments'
import { Profiles } from '../ViewLayer/Screens/Profiles/Profiles'
import { Certificate } from '../ViewLayer/Screens/Certificate/Certificate'
import { Error404 } from '../ViewLayer/Screens/Error404'
import { useEffectedInitialRequests } from '../ViewLayer/Hooks/useEffectedInitialRequests'

const SCREENS: Record<string, FunctionComponent<any>> = {
  MyModules,
  ArticlePresent,
  AcademyAbout,
  AcademyMatrix,
  AcademyPresent,
  MyDocuments,
  Profiles,
  Certificate,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const routesDict = ROUTES.map((route: RouteType, index: number) => {
    const { screen, path, children, errorElement } = route
    const Element = SCREENS[screen]
    const element: ReactElement = <Element />
    const id = `router-${index}`
    return { key: id, id, element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  useEffectedInitialRequests([{ type: 'GET_AUTH_DATA' }])

  return <RouterProvider router={routes} />
}

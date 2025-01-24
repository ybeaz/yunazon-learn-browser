import React, { ReactElement, Suspense, FunctionComponent, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { SCREENS } from './screensConst'
import { ROUTES, RouteType } from './routesConst'
import { useEffectedInitialRequests } from '../ViewLayer/Hooks/useEffectedInitialRequests'
import { LoaderBlurhash } from '../ViewLayer/Components/LoaderBlurhash'

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const routesDict = ROUTES.map((route: RouteType, index: number) => {
    const { screen, path, children, errorElement } = route
    const Element = SCREENS[screen]
    const element: ReactElement = <Element />
    const id = `router-${index}`
    return { key: id, id, element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  useEffectedInitialRequests([{ type: 'GET_AUTH_DATA' }], [])

  return (
    <Suspense fallback={<LoaderBlurhash />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

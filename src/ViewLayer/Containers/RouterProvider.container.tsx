import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { PlayAndSubscribeScreen } from '../Screens/PlayAndSubscribe.screen'
import { Error404Screen } from '../Screens/Error404.screen'

export const RouterProvider = () => {
  const PAGES = {
    PlayAndSubscribeScreen,
    Error404Screen,
  }

  const demoHostName = 'r1.userto.com'
  const demoPath = '/demo-youtube-learn.html'
  const rootPath = location.hostname === demoHostName ? demoPath : ''

  const isDemoHost =
    location.hostname === demoHostName ||
    location.pathname.endsWith('/demo-earthquake-zen-garden-js.html')
  const slash = isDemoHost ? '/' : ''

  const { router } = {
    router: {
      routes: [
        { path: `/`, exact: true, page: 'PlayAndSubscribeScreen' },
        {
          path: `/home`,
          exact: true,
          page: 'PlayAndSubscribeScreen',
        },
        {
          path: `${demoPath}/home`,
          exact: true,
          page: 'PlayAndSubscribeScreen',
        },
      ],
      redirects: [
        { from: `${demoPath}`, to: `${demoPath}/home`, exact: true },
        { from: `/home2`, to: `home`, exact: true },
      ],
    },
  }

  const { routes, redirects } = router

  const getRoutes = () =>
    routes.map((route, i) => {
      const { path, exact, page } = route
      const Page = PAGES[page]
      return (
        <Route
          exact={exact}
          path={path}
          render={routeProps => {
            // console.info('RouterProvider [65] a route', {
            //   rootPath,
            //   routeProps,
            //   hostname: location.hostname,
            //   location,
            // })
            const pageProps = { rootPath, routeProps }
            return <Page {...pageProps} />
          }}
        />
      )
    })

  const getRedirects: Function = (): JSX.Element[] =>
    redirects.map(redirect => {
      const { from: fromPath, to: toPath, exact } = redirect
      const from = `${fromPath}`
      const to = `${toPath}`
      return (() => {
        // console.info('RouterProvider [65] a redirect', {
        //   rootPath,
        //   hostname: location.hostname,
        //   location,
        // })
        return <Redirect {...{ from, to }} />
      })()
    })

  const getError404Route: Function = (): JSX.Element => {
    return (
      <Route
        component={() => {
          // console.info('RouterProvider [86] Error 404', { location })
          return <Error404Screen />
        }}
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {getRoutes()}
        {getRedirects()}
        {getError404Route()}
      </Switch>
    </BrowserRouter>
  )
}

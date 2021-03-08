import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { PlayAndSubscribeScreen } from '../Screens/PlayAndSubscribe.screen'
import { Error404Screen } from '../Screens/Error404.screen'

export const RouterProvider = () => {
  const PAGES = {
    PlayAndSubscribeScreen,
    Error404Screen,
  }

  const demoPath = '/demo-youtube-learn.html'
  const demoHostName = 'r1.userto.com'
  const rootPath = location.hostname === demoHostName ? demoPath : ''

  const isRedirectRoot = location.pathname === '' || location.pathname === '/'
  const isRedirectUrl = location.pathname === demoPath
  const slash = isRedirectRoot ? '' : isRedirectUrl ? '/' : ''

  const { router } = {
    router: {
      routes: [
        { path: '/', exact: true, page: 'PlayAndSubscribeScreen' },
        { path: '/home', exact: true, page: 'PlayAndSubscribeScreen' },
      ],
      redirects: [{ from: `/home2`, to: `/home`, exact: true }],
    },
  }

  const { routes, redirects } = router
  if (location.hostname === demoHostName) {
    routes.push({ path: '', exact: true, page: 'PlayAndSubscribeScreen' })
    redirects.push({ from: '', to: `/home`, exact: true })
  }

  const getRedirects: Function = (): JSX.Element[] =>
    redirects.map(redirect => {
      const { from: fromPath, to: toPath, exact } = redirect
      const from = `${rootPath}${slash}${fromPath}`
      const to = `${rootPath}${slash}${toPath}`
      return (() => {
        // console.info('RouterProvider [41] a redirect', { from, to })
        return <Redirect {...{ from, to }} />
      })()
    })

  const getRoutes = () =>
    routes.map((route, i) => {
      const { path: fromPath, exact, page } = route
      const Page = PAGES[page]
      const path = `${rootPath}${slash}${fromPath}`
      return (
        <Route
          exact={exact}
          path={path}
          render={routeProps => {
            // console.info('RouterProvider [63] a route', { path })
            const pageProps = { rootPath, routeProps }
            return <Page {...pageProps} />
          }}
        />
      )
    })

  return (
    <BrowserRouter>
      <Switch>
        {getRoutes()}
        {getRedirects()}
        <Route
          component={() => {
            // console.info('RouterProvider [84] Error 404', { location })
            return <Error404Screen />
          }}
        />
      </Switch>
    </BrowserRouter>
  )
}

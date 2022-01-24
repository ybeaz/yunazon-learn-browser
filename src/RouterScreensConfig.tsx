import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { routes } from './Constants/routes.const'
import { Profile } from './ViewLayer/Screens/Profile'
import { StubForUserResearch } from './ViewLayer/Screens/StubForUserResearch'
import { SkillsExchangeSearch } from './ViewLayer/Screens/SkillsExchangeSearch'
import { SkillsExchangeSearchChRP } from './ViewLayer/Screens/SkillsExchangeSearchChRP'
import { AcademyMatrix } from './ViewLayer/Screens/AcademyMatrix'
import { AcademyPresent } from './ViewLayer/Screens/AcademyPresent'
import { Error404 } from './ViewLayer/Screens/Error404'
import { Certificate } from './ViewLayer/Screens/Certificate'

const PAGES = {
  Profile,
  StubForUserResearch,
  SkillsExchangeSearch,
  SkillsExchangeSearchChRP,
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

  const getRoutes: IGetRoutes = routesArg =>
    routesArg.map(route => {
      const { path, exact, page, themeDafault } = route
      const Page = PAGES[page]
      return (
        <Route
          exact={exact}
          path={path}
          render={routeProps => {
            const pageProps = { rootPath, routeProps, themeDafault }
            // console.info('RouterScreensConfig [52]', {
            //   pageProps,
            //   rootPath,
            //   routeProps,
            //   hostname: location.hostname,
            //   location,
            // })
            return <Page {...pageProps} />
          }}
        />
      )
    })

  const redirects = [
    { from: `${demoPath}`, to: `${demoPath}/home`, exact: true },
    { from: `/home2`, to: `home`, exact: true },
  ]
  interface IGetRedirects {
    (
      redirectsArg: {
        from: string
        to: string
        strict?: boolean
        exact?: boolean
      }[]
    ): ReactElement[]
  }

  const getRedirects: IGetRedirects = redirectsArg =>
    redirectsArg.map(redirect => {
      const { from: fromPath, to: toPath } = redirect
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

  const getError404Route: Function = (): ReactElement => {
    return (
      <Route
        component={() => {
          //  console.info('RouterProvider [86] Error 404', { location })
          return <Error404 />
        }}
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        {getRoutes(routes)}
        {getRedirects(redirects)}
        {getError404Route()}
      </Switch>
    </BrowserRouter>
  )
}

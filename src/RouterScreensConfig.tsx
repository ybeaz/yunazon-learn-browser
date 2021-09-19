import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { IRootStore } from './Interfaces/IRootStore'
import { SkillsExchangePresent } from './ViewLayer/Screens/SkillsExchangePresent'
import { AcademyMatrix } from './ViewLayer/Screens/AcademyMatrix'
import { AcademyPresent } from './ViewLayer/Screens/AcademyPresent'
import { Error404 } from './ViewLayer/Screens/Error404'
import { Certificate } from './ViewLayer/Screens/Certificate'

const PAGES = {
  SkillsExchangePresent,
  AcademyMatrix,
  Certificate,
  AcademyPresent,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const demoHostName = 'r1.userto.com'
  const demoPath = '/demo-youtube-learn.html'
  const rootPath = location.hostname === demoHostName ? demoPath : ''

  const { router } = {
    router: {
      routes: [
        {
          path: `/d/:documentID`,
          strict: true,
          page: 'Certificate',
        },
        {
          path: `/Certificate-styled`,
          exact: true,
          page: 'CertificateStyled',
        },
        {
          path: `/certificate`,
          exact: true,
          page: 'Certificate',
        },
        {
          path: `/c/:courseID`,
          strict: true,
          page: 'AcademyPresent',
        },
        {
          path: `/academy`,
          exact: true,
          page: 'AcademyMatrix',
        },
        {
          path: `/home`,
          exact: true,
          page: 'SkillsExchangePresent',
        },
        {
          path: `${demoPath}/home`,
          exact: true,
          page: 'SkillsExchangePresent',
        },
        { path: `/`, exact: true, page: 'AcademyMatrix' },
      ],
      redirects: [
        { from: `${demoPath}`, to: `${demoPath}/home`, exact: true },
        { from: `/home2`, to: `home`, exact: true },
      ],
    },
  }

  const { routes, redirects } = router

  interface GetRoutesArg {
    path: string
    exact: boolean
    page: string
  }

  const getRoutes = routesArg =>
    routesArg.map(route => {
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

  const getRedirects: Function = (redirectsArg): JSX.Element[] =>
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

  const getError404Route: Function = (): JSX.Element => {
    return (
      <Route
        component={() => {
          //  console.info('RouterProvider [86] Error 404', { location })
          return <Error404 />
        }}
      />
    )
  }

  const getThemeRemotely: Function = () => {
    try {
      document.getElementsByTagName('body')[0].style.display = 'none'
      const { globalVars } = useSelector((store2: IRootStore) => store2)
      const { theme } = globalVars
      if (theme) {
        require(`./ViewLayer/Styles/theme${theme}.less`)
        document.getElementsByTagName('body')[0].style.display = 'flex'
      }
    } catch (error) {
      console.info('RouterScreensConfig [115]', { msg: error.message })
    }
  }

  getThemeRemotely()

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

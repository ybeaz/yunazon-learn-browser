import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useHistory,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { handleEvents } from './ViewLayer/Hooks/handleEvents'
import { IRootStore } from './Interfaces/IRootStore'
import * as action from './DataLayer/index.action'
import { MatrixHome } from './ViewLayer/Screens/MatrixHome'
import { PresentAndSubscribe } from './ViewLayer/Screens/PresentAndSubscribe'
import { Error404 } from './ViewLayer/Screens/Error404'
import { Certificate } from './ViewLayer/Screens/Certificate'

const PAGES = {
  MatrixHome,
  Certificate,
  PresentAndSubscribe,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getLoadedPlayerScript = () => {
      var tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const parent = document.getElementsByTagName('head')[0]
      parent.prepend(tag)
    }

    const makeDispatchAsyncWrappered = async () => {
      await getLoadedPlayerScript()

      await dispatch(action.GET_GLOBAL_VARS.REQUEST())
      await dispatch(action.GET_CONTENT_DATA.REQUEST())
      await handleEvents({}, { typeEvent: 'SAVE_ANALYTICS_INIT_DATA' })
      await handleEvents({}, { typeEvent: 'GET_INITIAL_QUERY_SETTING' })
    }

    makeDispatchAsyncWrappered()
  }, [])

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
          page: 'PresentAndSubscribe',
        },
        {
          path: `/home`,
          exact: true,
          page: 'MatrixHome',
        },
        {
          path: `${demoPath}/home`,
          exact: true,
          page: 'MatrixHome',
        },
        { path: `/`, exact: true, page: 'MatrixHome' },
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
          //  console.info('RouterProvider [86] Error 404', { location })
          return <Error404 />
        }}
      />
    )
  }

  const getThemeRemotely: Function = () => {
    try {
      document.getElementsByTagName('body')[0].style.display = 'none'
      const { globalVars } = useSelector((store: IRootStore) => store)
      const { theme } = globalVars
      if (theme) {
        // require('./ViewLayer/Styles/config.style.less')
        require(`./ViewLayer/Styles/theme${theme}.less`)
        document.getElementsByTagName('body')[0].style.display = 'flex'
        // require('./ViewLayer/Styles/index.style.less')
      }
    } catch (error) {
      console.info('RouterScreensConfig [115]', { msg: error.message })
    }
  }

  return (
    <BrowserRouter>
      {getThemeRemotely()}

      <Switch>
        {getRoutes()}
        {getRedirects()}
        {getError404Route()}
      </Switch>
    </BrowserRouter>
  )
}

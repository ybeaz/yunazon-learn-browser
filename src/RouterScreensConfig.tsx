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

  // const getRoutes: IGetRoutes = (routesArg) =>
  //   routesArg.map((route) => {
  //     const { path, exact, page, themeDafault } = route;
  //     const Page = PAGES[page];
  //     return (
  //       <Route
  //         // exact={exact}
  //         path={path}
  //         element={(routeProps: any) => {
  //           const pageProps = { rootPath, routeProps, themeDafault };
  //           // console.info('RouterScreensConfig [52]', {
  //           //   pageProps,
  //           //   rootPath,
  //           //   routeProps,
  //           //   hostname: location.hostname,
  //           //   location,
  //           // })
  //           return <Page {...pageProps} />;
  //         }}
  //       />
  //     );
  //   });

  const routesDict = ROUTES.map((route: RouteType) => {
    const { page, path, themeDafault, children, errorElement } = route
    const Element = PAGES[route.page]
    const elementProps = { rootPath, routeProps: {}, themeDafault }
    const element = <Element {...elementProps} />
    return { element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  // const redirects = [
  //   { from: `${demoPath}`, to: `${demoPath}/home`, exact: true },
  //   { from: `/home2`, to: `home`, exact: true },
  // ];
  // interface IGetRedirects {
  //   (
  //     redirectsArg: {
  //       from: string;
  //       to: string;
  //       strict?: boolean;
  //       exact?: boolean;
  //     }[]
  //   ): ReactElement[];
  // }

  // const getRedirects: IGetRedirects = (redirectsArg) =>
  //   redirectsArg.map((redirect) => {
  //     const { from: fromPath, to: toPath } = redirect;
  //     const from = `${fromPath}`;
  //     const to = `${toPath}`;
  //     return (() => {
  //       // console.info('RouterProvider [65] a redirect', {
  //       //   rootPath,
  //       //   hostname: location.hostname,
  //       //   location,
  //       // })
  //       return <Route path={from} element={<Navigate replace {...{ to }} />} />;
  //       // <Navigate {...{ from, to }} />;
  //     })();
  //   });

  // const getError404Route: Function = (): ReactElement => {
  //   return (
  //     <Route
  //       component={() => {
  //         //  console.info('RouterProvider [86] Error 404', { location })
  //         return <Error404 />;
  //       }}
  //     />
  //   );
  // };

  // const RouterCreated = () => {
  //   let routesCreated = useRoutes(routes);
  //   return routesCreated;
  // };

  return <RouterProvider router={routes} />
}

/*

<BrowserRouter>
      <Routes>
        { router}
        {getRedirects(redirects)}}
        {getError404Route()}
      </Routes>
    </BrowserRouter>
 */

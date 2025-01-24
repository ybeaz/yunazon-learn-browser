import { FunctionComponent, lazy } from 'react'

const TagsCloud = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/TagsCloud/TagsCloud')
)
const MyModules = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/MyModules/MyModules')
)
const ArticlePresent = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/ArticlePresent/ArticlePresent')
)
const AcademyAbout = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/AcademyAbout/AcademyAbout')
)
const AcademyMatrix = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/AcademyMatrix/AcademyMatrix')
)
const ModulesPresent = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/ModulesPresent/ModulesPresent')
)
const AcademyPresent = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/AcademyPresent/AcademyPresent')
)
const MyDocuments = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/MyDocuments/MyDocuments')
)
const Profiles = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/Profiles/Profiles')
)
const Certificate = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/Certificate/Certificate')
)
const Certificate2 = lazy(
  () => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/Certificate2/Certificate2')
)
const Error404 = lazy(() => import(/* webpackPrefetch: true */ '../ViewLayer/Screens/Error404'))

export const SCREENS: Record<string, FunctionComponent<any>> = {
  AcademyAbout,
  AcademyMatrix,
  AcademyPresent,
  ArticlePresent,
  Certificate,
  Certificate2,
  Error404,
  ModulesPresent,
  MyDocuments,
  MyModules,
  Profiles,
  TagsCloud,
}

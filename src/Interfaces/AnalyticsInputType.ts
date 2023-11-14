interface InitDataAnalyticsType {
  width: number
  height: number
  search: string
  pathname: string
  hostname: string
  href: string
  referrer: string
}

interface EventAnalyticsType {
  type: string
  name: string
  value: string
  level: number
  pathname: string
}

export interface AnalyticsInputType {
  analyticsID?: string
  hash256?: string
  type?: string
  initData?: InitDataAnalyticsType
  event?: EventAnalyticsType
}

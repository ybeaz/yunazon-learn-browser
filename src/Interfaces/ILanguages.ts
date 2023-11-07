export interface ILanguage {
  '639-1'?: string
  '639-2'?: string
  '639-2/B'?: string
  de: string[]
  en: string[]
  fr: string[]
  ru: string[]
  svgFile: string
  wikiUrl: string
}

export type ILanguages = Record<string, ILanguage>

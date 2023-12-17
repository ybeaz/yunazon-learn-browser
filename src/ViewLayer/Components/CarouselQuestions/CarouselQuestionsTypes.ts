import { RootStoreType } from '../../../Interfaces/RootStoreType'

import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type CarouselQuestionsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    moduleIDActive: RootStoreType['scorm']['moduleIDActive']
    numberQuestionsInSlide: RootStoreType['scorm']['numberQuestionsInSlide']
    questionsSlideNumber: RootStoreType['componentsState']['questionsSlideNumber']
    isCourseStarted: RootStoreType['componentsState']['isCourseStarted']
    courses: RootStoreType['courses']
    language: RootStoreType['language']
  }
}

export type CarouselQuestionsPropsType = Omit<
  CarouselQuestionsComponentPropsType,
  'storeStateSlice'
>

export type CarouselQuestionsPropsOutType = {
  buttonStartProps: ButtonYrlPropsType
  buttonSlideBackwardProps: ButtonYrlPropsType
  buttonSlideForwardProps: ButtonYrlPropsType
  buttonToCertificateProps: ButtonYrlPropsType
  buttonBlockProps: ButtonYrlPropsType
}

/**
 * @import import { CarouselQuestionsType } from './CarouselQuestionsType'
 */
export interface CarouselQuestionsComponentType
  extends React.FunctionComponent<CarouselQuestionsComponentPropsType> {
  (props: CarouselQuestionsComponentPropsType): React.ReactElement
}

export type CarouselQuestionsType =
  React.FunctionComponent<CarouselQuestionsPropsType>

import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type CarouselQuestionsPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

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
  extends React.FunctionComponent<CarouselQuestionsPropsType> {
  (props: CarouselQuestionsPropsType): React.ReactElement
}

export type CarouselQuestionsType =
  React.FunctionComponent<CarouselQuestionsPropsType>

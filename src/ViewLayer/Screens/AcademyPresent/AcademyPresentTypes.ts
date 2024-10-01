import { RootStoreType } from '../../../Interfaces/RootStoreType'

import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { ContentSectionPropsType } from '../../Components/ContentSection/ContentSection'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { HandleEventType } from '../../../DataLayer/index.handleEvents'

export type AcademyPresentComponentPropsType = {
  storeStateSlice: {
    language: RootStoreType['language']
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    moduleIDActive: RootStoreType['scorm']['courseIDActive']
    modules: RootStoreType['modules']
    mediaLoaded: RootStoreType['isLoaded']['mediaLoaded']
  }
  handleEvents: HandleEventType
}

export type AcademyPresentPropsType = Omit<
  AcademyPresentComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type AcademyPresentPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  contentSectionProps: ContentSectionPropsType
  buttonPlayerUpProps: ButtonYrlPropsType
  buttonArticleUpProps: ButtonYrlPropsType
  buttonSummaryUpProps: ButtonYrlPropsType
  buttonObjectionsUpProps: ButtonYrlPropsType
}

/**
 * @import import { AcademyPresentType } from './AcademyPresentType'
 */
export interface AcademyPresentComponentType
  extends React.FunctionComponent<AcademyPresentComponentPropsType> {
  (props: AcademyPresentComponentPropsType): React.ReactElement
}

export type AcademyPresentType = React.FunctionComponent<AcademyPresentPropsType>

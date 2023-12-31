import { Maybe, Scalars, ProfilePropsType } from '../@types/GraphqlTypes.d'

export type ArticleType = {
  /** articleID */
  articleID: Scalars['ID']['output']
  /** course capture */
  capture: Scalars['String']['output']
  /** courses created date */
  dateCreated: Scalars['Float']['output']
  /** courses deleted date */
  dateDeleted?: Maybe<Scalars['Float']['output']>
  /** courses updated date */
  dateUpdated: Scalars['Float']['output']
  /** course description */
  description: Maybe<Scalars['String']['output']>
  /** ipClient profile/ user */
  ipClient?: Maybe<Scalars['String']['output']>
  /** isActive */
  isActive: Scalars['Boolean']['output']
  /** language code */
  language: Scalars['String']['output']
  /** profileID */
  profileID: Scalars['ID']['output']
  /** userName */
  authors: Maybe<Scalars['String']['output'][]>
  sections: {
    capture: Maybe<Scalars['String']['output']>
    divs: Scalars['String']['output'][]
  }[]
}

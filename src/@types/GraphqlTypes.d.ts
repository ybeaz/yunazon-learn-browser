export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    /** Date custom scalar type */
    Date: {
        input: any;
        output: any;
    };
};
export type AiRequestOptionsType = {
    __typename?: 'AiRequestOptionsType';
    /** response_format */
    response_format?: Maybe<Scalars['String']['output']>;
};
export type ArticleIItemOptionsInputType = {
    /** module Article item options type */
    style: StyleInputEnumType;
};
export type ArticleIItemOptionsType = {
    __typename?: 'ArticleIItemOptionsType';
    /** module Article item options type */
    style: StyleEnumType;
};
export type ArticleItemInputType = {
    /** module Article item ID */
    articleItemID?: InputMaybe<Scalars['ID']['input']>;
    /** module Article item capture */
    capture?: InputMaybe<Scalars['String']['input']>;
    /** module Article item divs */
    divs?: InputMaybe<Array<Scalars['String']['input']>>;
    /** module Article item options for divs */
    options?: InputMaybe<ArticleIItemOptionsInputType>;
};
export type ArticleItemType = {
    __typename?: 'ArticleItemType';
    /** module Article ID */
    articleItemID: Scalars['ID']['output'];
    /** module Article item capture */
    capture?: Maybe<Scalars['String']['output']>;
    /** module Article item divs */
    divs?: Maybe<Array<Scalars['String']['output']>>;
    /** module Article item options for divs */
    options?: Maybe<ArticleIItemOptionsType>;
};
export type AvatarSizeInputType = {
    /** height */
    height?: InputMaybe<Scalars['Float']['input']>;
    /** width */
    width?: InputMaybe<Scalars['Float']['input']>;
};
export type AvatarSizeType = {
    __typename?: 'AvatarSizeType';
    /** height */
    height?: Maybe<Scalars['Float']['output']>;
    /** width */
    width?: Maybe<Scalars['Float']['output']>;
};
export type BotType = {
    __typename?: 'BotType';
    /** aiRequestOptions */
    aiRequestOptions: AiRequestOptionsType;
    /** aiServiceMethod */
    aiServiceMethod: Scalars['String']['output'];
    /** aiServiceName */
    aiServiceName: Scalars['String']['output'];
    /** bots ID */
    botID?: Maybe<Scalars['ID']['output']>;
    /** comments */
    comments: Scalars['String']['output'];
    /** bots created date */
    dateCreated?: Maybe<Scalars['Float']['output']>;
    /** bots deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** bots updated date */
    dateUpdated?: Maybe<Scalars['Float']['output']>;
    /** disclaimerRef */
    disclaimerRef: Scalars['String']['output'];
    /** isActive */
    isActive?: Maybe<Scalars['Boolean']['output']>;
    /** profile ID */
    profileID?: Maybe<Scalars['ID']['output']>;
    /** profileName */
    profileName: Scalars['String']['output'];
    /** prompt */
    prompt: PromptType;
    /** transformFunctionName */
    transformFunctionName: Scalars['String']['output'];
    /** user ID */
    userID?: Maybe<Scalars['ID']['output']>;
};
export type BotsConnectionType = {
    __typename?: 'BotsConnectionType';
    /** [BotsEdgeType] */
    edges?: Maybe<Array<BotsEdgeType>>;
    /** BotsPageInfoType */
    pageInfo?: Maybe<BotsPageInfoType>;
};
export type BotsDropIndexesType = {
    __typename?: 'BotsDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type BotsEdgeType = {
    __typename?: 'BotsEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** BotsEdgeType */
    node?: Maybe<BotType>;
};
export type BotsPageInfoType = {
    __typename?: 'BotsPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type ChoiceType = {
    __typename?: 'ChoiceType';
    finish_reason: Scalars['String']['output'];
    index: Scalars['Int']['output'];
    message: MessageChoiceType;
};
export type CollectionUpdateStatusType = {
    __typename?: 'CollectionUpdateStatusType';
    /** templates ID */
    collectionName?: Maybe<Scalars['ID']['output']>;
    /** collection updated date */
    dateUpdated?: Maybe<Scalars['Float']['output']>;
    /** status > whether the collection is updated successfully */
    statusUpdated: Scalars['Boolean']['output'];
};
export type ComparisonFields = {
    /** user ID */
    userIdAuth?: InputMaybe<Scalars['ID']['input']>;
    /** user ID */
    userIdProfile?: InputMaybe<Scalars['ID']['input']>;
};
export declare enum CompetencyContentType {
    CompetencyTagType = "CompetencyTagType",
    ProfileType = "ProfileType",
    ProjectType = "ProjectType"
}
export type CompetencyTagType = {
    __typename?: 'CompetencyTagType';
    /** competency ID */
    competencyID: Scalars['ID']['output'];
    /** contentType */
    contentType: CompetencyContentType;
    /** iconLibrary */
    iconLibrary?: Maybe<Scalars['String']['output']>;
    /** iconName */
    iconName?: Maybe<Scalars['String']['output']>;
    /** linkHref */
    linkHref?: Maybe<Scalars['String']['output']>;
    /** profile ID */
    profileID: Scalars['ID']['output'];
    /** section */
    section?: Maybe<Scalars['String']['output']>;
    /** title */
    title?: Maybe<Scalars['String']['output']>;
    /** tooltips */
    tooltips?: Maybe<Scalars['String']['output']>;
};
export type CompetencyTagsDropIndexesType = {
    __typename?: 'CompetencyTagsDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type CompetencyTagsInputType = {
    /** competencyTags created date */
    competencyTagsDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags updated date */
    competencyTagsDateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags deleted date */
    competencyTagsdateDeactivated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags ID */
    idCompetencyTags?: InputMaybe<Scalars['ID']['input']>;
};
export type CompetencyTagsParamsReadType = {
    /** first item */
    profileID?: InputMaybe<Scalars['String']['input']>;
};
export type CountDocumentInputType = {
    /** MongoDB query */
    queryAll?: InputMaybe<CountQueryParamsDocumentInputType>;
    /** queryFuncName */
    queryFuncName?: InputMaybe<Scalars['String']['input']>;
    /** MongoDB query */
    queryIsActive?: InputMaybe<CountQueryIsActiveDocumentInputType>;
    /** MongoDB query */
    queryParams?: CountQueryParamsDocumentInputType;
};
export type CountQueryIsActiveDocumentInputType = {
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
};
export type CountQueryParamsDocumentInputType = {
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** learner.userID > learnerUserID */
    learnerID?: InputMaybe<Scalars['String']['input']>;
    /** learner.userID > learnerUserID */
    learnerUserID?: InputMaybe<Scalars['String']['input']>;
    /** module.moduleID > moduleModuleIDs */
    moduleModuleIDs?: InputMaybe<Array<Scalars['String']['input']>>;
    /** module.tags > tag */
    tag?: InputMaybe<Scalars['String']['input']>;
};
export type CountQueryTemplatesInputType = {
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
};
export type CountTemplatesInputType = {
    /** MongoDB query */
    query?: CountQueryTemplatesInputType;
};
export type CourseEdgeType = {
    __typename?: 'CourseEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** Course */
    node?: Maybe<CourseType>;
};
export type CourseType = {
    __typename?: 'CourseType';
    /** course capture */
    capture: Scalars['String']['output'];
    /** courses ID */
    courseID: Scalars['ID']['output'];
    /** courses created date */
    dateCreated: Scalars['Float']['output'];
    /** courses deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** courses updated date */
    dateUpdated: Scalars['Float']['output'];
    /** course description */
    description: Scalars['String']['output'];
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** language code */
    language: Scalars['String']['output'];
    /** courses meta information */
    meta?: Maybe<MetaCourseType>;
    /** courses modules */
    modules?: Maybe<Array<ModuleCourseType>>;
    /** profile ID */
    profileID: Scalars['ID']['output'];
};
export type CoursesConnectionType = {
    __typename?: 'CoursesConnectionType';
    /** [CoursesEdgeType] */
    edges?: Maybe<Array<CourseEdgeType>>;
    /** CoursesPageInfoType */
    pageInfo?: Maybe<CoursesPageInfoType>;
};
export type CoursesCountType = {
    __typename?: 'CoursesCountType';
    /** module count all */
    countAll?: Maybe<Scalars['Int']['output']>;
    /** module count isActive */
    countIsActive?: Maybe<Scalars['Int']['output']>;
};
export type CoursesDropIndexesType = {
    __typename?: 'CoursesDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type CoursesPageInfoType = {
    __typename?: 'CoursesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type CreateBotInputType = {
    /** bots ID */
    botsID?: InputMaybe<Scalars['ID']['input']>;
};
export type CreateBotResponseInputType = {
    /** botID */
    botID?: InputMaybe<Scalars['ID']['input']>;
    /** profileID */
    profileID?: InputMaybe<Scalars['ID']['input']>;
    /** profileName */
    profileName?: InputMaybe<Scalars['String']['input']>;
    /** userText */
    userText: Scalars['String']['input'];
};
export type CreateBotResponseType = {
    __typename?: 'CreateBotResponseType';
    /** botID */
    botID?: Maybe<Scalars['ID']['output']>;
    /** isBotResponse */
    isBotResponse?: Maybe<Scalars['Boolean']['output']>;
    /** length */
    length?: Maybe<Scalars['Float']['output']>;
    /** profileID */
    profileID?: Maybe<Scalars['ID']['output']>;
    /** profileName */
    profileName?: Maybe<Scalars['String']['output']>;
    /** textObj */
    textObj?: Maybe<TextObjType>;
};
export type CreateContentMetaDataType = {
    __typename?: 'CreateContentMetaDataType';
    /** capture */
    capture?: Maybe<Scalars['String']['output']>;
    /** course module contentID */
    contentID?: Maybe<Scalars['ID']['output']>;
    /** description */
    description?: Maybe<Scalars['String']['output']>;
    /** duration */
    duration?: Maybe<Scalars['String']['output']>;
    /** isContentMetaData */
    isContentMetaData?: Maybe<Scalars['Boolean']['output']>;
    /** language code */
    language?: Maybe<Scalars['String']['output']>;
    /** length */
    length?: Maybe<Scalars['Float']['output']>;
    /** courses meta tags: tags that characterises the course content */
    tags?: Maybe<Array<Scalars['String']['output']>>;
    /** thumbnail image data */
    thumbnails?: Maybe<ThumbnailsBotType>;
};
export type CreateCourseInputType = {
    /** course capture */
    capture: Scalars['String']['input'];
    /** courses ID */
    courseID?: InputMaybe<Scalars['ID']['input']>;
    /** course description */
    description: Scalars['String']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** courses meta information */
    meta?: InputMaybe<MetaCourseInputType>;
    /** courses modules */
    modules?: InputMaybe<Array<ModuleCourseInputType>>;
    /** profile ID */
    profileID: Scalars['ID']['input'];
};
export type CreateDocumentInputType = {
    /** creator of the module */
    creator: UpdateProfileInputType;
    /** ipClient profile/ user */
    ipClient?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** learner, user, student */
    learner: UpdateProfileInputType;
    /** module */
    module: UpdateModuleForDocumentInputType;
};
export type CreateModuleInputType = {
    /** module article */
    article?: InputMaybe<Array<Array<ArticleItemInputType>>>;
    /** capture */
    capture: Scalars['String']['input'];
    /** capture channel */
    captureChannel?: InputMaybe<Scalars['String']['input']>;
    /** capture playlist */
    capturePlaylist?: InputMaybe<Scalars['String']['input']>;
    /** module channelID */
    channelID?: InputMaybe<Scalars['ID']['input']>;
    /** module contentID */
    contentID: Scalars['ID']['input'];
    /** module content type */
    contentType: Scalars['String']['input'];
    /** creatorID */
    creatorID: Scalars['ID']['input'];
    /** description */
    description: Scalars['String']['input'];
    /** module duration */
    duration: Scalars['String']['input'];
    /** module index */
    index?: InputMaybe<Scalars['Int']['input']>;
    /** ipClient profile/ user */
    ipClient?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** isCompleted */
    isCompleted?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** module objection */
    objections?: InputMaybe<Array<ObjectionInputType>>;
    /** organizationID */
    organizationID: Scalars['ID']['input'];
    /** module passRate */
    passRate?: InputMaybe<Scalars['Float']['input']>;
    /** module playlistID */
    playlistID?: InputMaybe<Scalars['ID']['input']>;
    /** module questionNumber */
    questionNumber?: Scalars['Int']['input'];
    /** module questions */
    questions?: Array<QuestionInputType>;
    /** meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** module summary */
    summary?: InputMaybe<Array<SummaryItemInputType>>;
    /** meta tags: tags that characterises the content */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
    /** thumbnail image data */
    thumbnails?: InputMaybe<ThumbnailsInputType>;
    /** module transcriptList */
    transcriptList?: InputMaybe<Array<TranscriptObjectInputType>>;
};
export type CreateOriginInputType = {
    /** youtubeID */
    originID?: InputMaybe<Scalars['String']['input']>;
    /** youtubeUrl */
    originUrl?: InputMaybe<Scalars['String']['input']>;
};
export type CreateProfileInputType = {
    /** affiliation. An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
    affiliation?: InputMaybe<Scalars['String']['input']>;
    /** avatarSrc */
    avatarSize?: InputMaybe<AvatarSizeInputType>;
    /** avatarSrc */
    avatarSrc?: InputMaybe<Scalars['String']['input']>;
    /** award. An award won by or for this item. Supersedes awards. */
    awards?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user ID */
    botID?: InputMaybe<Scalars['ID']['input']>;
    /** contacts */
    contacts?: InputMaybe<Array<Scalars['String']['input']>>;
    /** description */
    description?: InputMaybe<Scalars['String']['input']>;
    /** disclaimer */
    disclaimer?: InputMaybe<Scalars['String']['input']>;
    /** emails */
    emails?: InputMaybe<Array<Scalars['String']['input']>>;
    /** help */
    help?: InputMaybe<Scalars['String']['input']>;
    /** socket ID */
    idSocket?: InputMaybe<Scalars['ID']['input']>;
    /** imagePendingSrc */
    imagePendingSrc?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** jobTitle. The job title of the person (for example, Financial Manager). */
    jobTitle?: InputMaybe<Scalars['String']['input']>;
    /** locations */
    locations?: InputMaybe<Array<Scalars['String']['input']>>;
    /** messengers */
    messengers?: InputMaybe<Array<MessengerInputType>>;
    /** nameFirst */
    nameFirst?: InputMaybe<Scalars['String']['input']>;
    /** nameLast */
    nameLast?: InputMaybe<Scalars['String']['input']>;
    /** nameMiddle */
    nameMiddle?: InputMaybe<Scalars['String']['input']>;
    /** pendingText */
    pendingText?: InputMaybe<Scalars['String']['input']>;
    /** phones */
    phones?: InputMaybe<Array<Scalars['String']['input']>>;
    /** default position profile in the list */
    position?: InputMaybe<Scalars['Float']['input']>;
    /** profile ID */
    profileName: Scalars['String']['input'];
    /** profileNature */
    profileNature: ProfileNatureType;
    /** promptExamples */
    promptExamples?: InputMaybe<Array<Scalars['String']['input']>>;
    /** serviceSections */
    serviceSections?: InputMaybe<Array<Scalars['String']['input']>>;
    /** serviceSpecs */
    serviceSpecs?: InputMaybe<Array<Scalars['String']['input']>>;
    /** url. URLs of the item. */
    urls?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user ID */
    userID: Scalars['ID']['input'];
};
export type CreateTagInputType = {
    /** tags completed */
    completed: Scalars['Int']['input'];
    /** tags count */
    count: Scalars['Int']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** module IDs */
    moduleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** tags ID */
    tagID?: InputMaybe<Scalars['ID']['input']>;
    /** tags value */
    value: Scalars['String']['input'];
};
export type CreateTemplatesInputType = {
    /** templates ID */
    templatesID?: InputMaybe<Scalars['ID']['input']>;
};
export type CreateYoutubeTranscriptType = {
    __typename?: 'CreateYoutubeTranscriptType';
    /** isTranscript */
    isTranscript?: Maybe<Scalars['Boolean']['output']>;
    /** length */
    length?: Maybe<Scalars['Float']['output']>;
    /** transcriptList */
    transcriptList?: Maybe<Array<TranscriptObjectBotType>>;
};
export type DocumentEdgeType = {
    __typename?: 'DocumentEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** Document */
    node?: Maybe<DocumentType>;
};
export type DocumentType = {
    __typename?: 'DocumentType';
    /** creator of the module */
    creator: ProfileType;
    /** documents created date */
    dateCreated: Scalars['Float']['output'];
    /** documents deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** documents updated date */
    dateUpdated: Scalars['Float']['output'];
    /** documentID */
    documentID: Scalars['ID']['output'];
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** learner, user, student */
    learner: ProfileType;
    /** module */
    module: ModuleForDocumentType;
};
export type DocumentsConnectionType = {
    __typename?: 'DocumentsConnectionType';
    /** [DocumentsEdgeType] */
    edges?: Maybe<Array<DocumentEdgeType>>;
    /** DocumentsPageInfoType */
    pageInfo?: Maybe<DocumentsPageInfoType>;
};
export type DocumentsCountType = {
    __typename?: 'DocumentsCountType';
    /** module count all */
    countAll?: Maybe<Scalars['Int']['output']>;
    /** module count isActive */
    countIsActive?: Maybe<Scalars['Int']['output']>;
};
export type DocumentsDropIndexesType = {
    __typename?: 'DocumentsDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type DocumentsPageInfoType = {
    __typename?: 'DocumentsPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type ImageDataOpenAiType = {
    __typename?: 'ImageDataOpenAiType';
    b64_json?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type ImageOpenAiInputType = {
    n: Scalars['Int']['input'];
    prompt: Scalars['String']['input'];
    response_format?: InputMaybe<Scalars['String']['input']>;
    size: Scalars['String']['input'];
};
export type ImagesOpenAiType = {
    __typename?: 'ImagesOpenAiType';
    created: Scalars['Int']['output'];
    data: Array<ImageDataOpenAiType>;
};
export type MessageAssistantInputType = {
    messages: Array<MessageChoiceInputType>;
    model: Scalars['String']['input'];
    temperature: Scalars['Float']['input'];
};
export type MessageAssistantType = {
    __typename?: 'MessageAssistantType';
    choices: Array<ChoiceType>;
};
export type MessageChoiceInputType = {
    content?: InputMaybe<Scalars['String']['input']>;
    role: Scalars['String']['input'];
};
export type MessageChoiceType = {
    __typename?: 'MessageChoiceType';
    content?: Maybe<Scalars['String']['output']>;
    role: Scalars['String']['output'];
};
export type MessengerInputType = {
    /** name */
    name?: InputMaybe<Scalars['String']['input']>;
    /** profileName */
    profileName?: InputMaybe<Scalars['String']['input']>;
};
export type MessengerType = {
    __typename?: 'MessengerType';
    /** name */
    name?: Maybe<Scalars['String']['output']>;
    /** profileName */
    profileName?: Maybe<Scalars['String']['output']>;
};
export type MetaCourseInputType = {
    /** course meta email */
    email: Scalars['String']['input'];
    /** course meta institution */
    institution: Scalars['String']['input'];
    /** course meta isSendingBcc */
    isSendingBcc?: Scalars['Boolean']['input'];
    /** course meta specName */
    specName: Scalars['String']['input'];
    /** course meta specTitle */
    specTitle: Scalars['String']['input'];
    /** courses meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content, its marketing features */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type MetaCoursePartialInputType = {
    /** course meta email */
    email?: InputMaybe<Scalars['String']['input']>;
    /** course meta institution */
    institution?: InputMaybe<Scalars['String']['input']>;
    /** course meta isSendingBcc */
    isSendingBcc?: InputMaybe<Scalars['Boolean']['input']>;
    /** course meta specName */
    specName?: InputMaybe<Scalars['String']['input']>;
    /** course meta specTitle */
    specTitle?: InputMaybe<Scalars['String']['input']>;
    /** courses meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content, its marketing features */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type MetaCoursePartialType = {
    __typename?: 'MetaCoursePartialType';
    /** course meta email */
    email?: Maybe<Scalars['String']['output']>;
    /** course meta institution */
    institution?: Maybe<Scalars['String']['output']>;
    /** course meta isSendingBcc */
    isSendingBcc?: Maybe<Scalars['Boolean']['output']>;
    /** course meta specName */
    specName?: Maybe<Scalars['String']['output']>;
    /** course meta specTitle */
    specTitle?: Maybe<Scalars['String']['output']>;
    /** courses meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** courses meta tags: tags that characterises the course content, its marketing features */
    tags?: Maybe<Array<Scalars['String']['output']>>;
};
export type MetaCourseType = {
    __typename?: 'MetaCourseType';
    /** course meta email */
    email: Scalars['String']['output'];
    /** course meta institution */
    institution: Scalars['String']['output'];
    /** course meta isSendingBcc */
    isSendingBcc: Scalars['Boolean']['output'];
    /** course meta specName */
    specName: Scalars['String']['output'];
    /** course meta specTitle */
    specTitle: Scalars['String']['output'];
    /** courses meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** courses meta tags: tags that characterises the course content */
    tags?: Maybe<Array<Scalars['String']['output']>>;
};
export type MetaPartialInputType = {
    /** meta email */
    email?: InputMaybe<Scalars['String']['input']>;
    /** meta institution */
    institution?: InputMaybe<Scalars['String']['input']>;
    /** meta isSendingBcc */
    isSendingBcc?: InputMaybe<Scalars['Boolean']['input']>;
    /** meta specName */
    specName?: InputMaybe<Scalars['String']['input']>;
    /** meta specTitle */
    specTitle?: InputMaybe<Scalars['String']['input']>;
    /** meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** meta tags: tags that characterises the content, its marketing features */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type MetaPartialType = {
    __typename?: 'MetaPartialType';
    /** meta email */
    email?: Maybe<Scalars['String']['output']>;
    /** meta institution */
    institution?: Maybe<Scalars['String']['output']>;
    /** meta isSendingBcc */
    isSendingBcc?: Maybe<Scalars['Boolean']['output']>;
    /** meta specName */
    specName?: Maybe<Scalars['String']['output']>;
    /** meta specTitle */
    specTitle?: Maybe<Scalars['String']['output']>;
    /** meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** meta tags: tags that characterises the content, its marketing features */
    tags?: Maybe<Array<Scalars['String']['output']>>;
};
export type ModuleCourseInputType = {
    /** course module capture */
    capture: Scalars['String']['input'];
    /** course module contentID */
    contentID: Scalars['ID']['input'];
    /** course module content type */
    contentType: Scalars['String']['input'];
    /** course module capture */
    description?: InputMaybe<Scalars['String']['input']>;
    /** course module duration */
    duration: Scalars['String']['input'];
    /** course module index */
    index: Scalars['Int']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** course module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
    /** course module objection */
    objections?: InputMaybe<Array<ObjectionCourseInputType>>;
    /** module passRate */
    passRate?: InputMaybe<Scalars['Float']['input']>;
    /** module questionNumber */
    questionNumber: Scalars['Int']['input'];
    /** course module questions */
    questions: Array<QuestionCourseInputType>;
    /** course module summary */
    summary?: InputMaybe<Array<SummaryItemCourseInputType>>;
    /** thumbnail image data */
    thumbnails?: InputMaybe<ThumbnailsCourseInputType>;
};
export type ModuleCourseType = {
    __typename?: 'ModuleCourseType';
    /** course module capture */
    capture: Scalars['String']['output'];
    /** course module contentID */
    contentID: Scalars['ID']['output'];
    /** course module content type */
    contentType: Scalars['String']['output'];
    /** course module capture */
    description?: Maybe<Scalars['String']['output']>;
    /** course module duration */
    duration: Scalars['String']['output'];
    /** course module index */
    index: Scalars['Int']['output'];
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** course module ID */
    moduleID: Scalars['ID']['output'];
    /** course module objection */
    objections?: Maybe<Array<ObjectionCourseType>>;
    /** module passRate */
    passRate?: Maybe<Scalars['Float']['output']>;
    /** module questionNumber */
    questionNumber: Scalars['Int']['output'];
    /** course module questions */
    questions: Array<QuestionCourseType>;
    /** course module summary */
    summary?: Maybe<Array<SummaryItemCourseType>>;
    /** thumbnail image data */
    thumbnails?: Maybe<ThumbnailsCourseType>;
};
export type ModuleEdgeType = {
    __typename?: 'ModuleEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** module */
    node?: Maybe<ModuleType>;
};
export type ModuleForDocumentType = {
    __typename?: 'ModuleForDocumentType';
    /** capture */
    capture: Scalars['String']['output'];
    /** capture channel */
    captureChannel?: Maybe<Scalars['String']['output']>;
    /** capture playlist */
    capturePlaylist?: Maybe<Scalars['String']['output']>;
    /** module channelID */
    channelID?: Maybe<Scalars['ID']['output']>;
    /** module contentID */
    contentID: Scalars['ID']['output'];
    /** module content type */
    contentType: Scalars['String']['output'];
    /** creatorID */
    creatorID: Scalars['ID']['output'];
    /** created date */
    dateCreated: Scalars['Float']['output'];
    /** deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** updated date */
    dateUpdated: Scalars['Float']['output'];
    /** description */
    description: Scalars['String']['output'];
    /** module duration */
    duration: Scalars['String']['output'];
    /** module index */
    index?: Maybe<Scalars['Int']['output']>;
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** isCompleted */
    isCompleted: Scalars['Boolean']['output'];
    /** language code */
    language: Scalars['String']['output'];
    /** module ID */
    moduleID: Scalars['ID']['output'];
    /** organizationID */
    organizationID: Scalars['ID']['output'];
    /** module passRate */
    passRate?: Maybe<Scalars['Float']['output']>;
    /** module playlistID */
    playlistID?: Maybe<Scalars['ID']['output']>;
    /** module questionNumber */
    questionNumber: Scalars['Int']['output'];
    /** meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** module summary */
    summary?: Maybe<Array<SummaryItemType>>;
    /** meta tags: tags that characterises the content */
    tags?: Maybe<Array<Scalars['String']['output']>>;
    /** thumbnail image data */
    thumbnails?: Maybe<ThumbnailsType>;
};
export type ModuleType = {
    __typename?: 'ModuleType';
    /** module article */
    article?: Maybe<Array<Array<ArticleItemType>>>;
    /** capture */
    capture: Scalars['String']['output'];
    /** capture channel */
    captureChannel?: Maybe<Scalars['String']['output']>;
    /** capture playlist */
    capturePlaylist?: Maybe<Scalars['String']['output']>;
    /** module channelID */
    channelID?: Maybe<Scalars['ID']['output']>;
    /** module contentID */
    contentID: Scalars['ID']['output'];
    /** module content type */
    contentType: Scalars['String']['output'];
    /** creatorID */
    creatorID: Scalars['ID']['output'];
    /** created date */
    dateCreated: Scalars['Float']['output'];
    /** deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** updated date */
    dateUpdated: Scalars['Float']['output'];
    /** description */
    description: Scalars['String']['output'];
    /** module duration */
    duration: Scalars['String']['output'];
    /** module index */
    index?: Maybe<Scalars['Int']['output']>;
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** isCompleted */
    isCompleted: Scalars['Boolean']['output'];
    /** language code */
    language: Scalars['String']['output'];
    /** module ID */
    moduleID: Scalars['ID']['output'];
    /** module objections */
    objections?: Maybe<Array<ObjectionType>>;
    /** organizationID */
    organizationID: Scalars['ID']['output'];
    /** module passRate */
    passRate?: Maybe<Scalars['Float']['output']>;
    /** module playlistID */
    playlistID?: Maybe<Scalars['ID']['output']>;
    /** module questionNumber */
    questionNumber: Scalars['Int']['output'];
    /** module questions */
    questions: Array<QuestionType>;
    /** meta stages: stages/ statuses/ envs */
    stages?: Maybe<Array<Scalars['String']['output']>>;
    /** module summary */
    summary?: Maybe<Array<SummaryItemType>>;
    /** meta tags: tags that characterises the content */
    tags?: Maybe<Array<Scalars['String']['output']>>;
    /** thumbnail image data */
    thumbnails?: Maybe<ThumbnailsType>;
    /** transcriptList */
    transcriptList?: Maybe<Array<TranscriptObjectType>>;
};
export type ModulesConnectionType = {
    __typename?: 'ModulesConnectionType';
    /** [ModuleEdgeType] */
    edges?: Maybe<Array<ModuleEdgeType>>;
    /** ModulesPageInfoType */
    pageInfo?: Maybe<ModulesPageInfoType>;
};
export type ModulesCountType = {
    __typename?: 'ModulesCountType';
    /** module count all */
    countAll?: Maybe<Scalars['Int']['output']>;
    /** module count isActive */
    countIsActive?: Maybe<Scalars['Int']['output']>;
};
export type ModulesDropIndexesType = {
    __typename?: 'ModulesDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type ModulesPageInfoType = {
    __typename?: 'ModulesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type Mutation = {
    __typename?: 'Mutation';
    addRecipe: RecipeType;
    createBotResponse: CreateBotResponseType;
    createBots: Array<BotType>;
    createCompetencyTags: Array<CompetencyTagType>;
    createContentMetaData: CreateContentMetaDataType;
    createCourses: Array<CourseType>;
    createDocuments: Array<DocumentType>;
    createModules: Array<ModuleType>;
    createProfiles: Array<ProfileType>;
    createSiteMap: SiteMapReportType;
    createTags: Array<TagType>;
    createTemplates: Array<TemplatesType>;
    createUser: UserModelExtendedType;
    createYoutubeTranscript: CreateYoutubeTranscriptType;
    deactivateBots: Array<Scalars['String']['output']>;
    deactivateCourses: Array<Scalars['String']['output']>;
    deactivateDocuments: Array<Scalars['String']['output']>;
    deactivateModules: Array<Scalars['String']['output']>;
    deactivateProfiles: Array<Scalars['String']['output']>;
    deactivateTags: Array<Scalars['String']['output']>;
    deactivateTemplates: Array<Scalars['String']['output']>;
    deleteBots: Array<Scalars['String']['output']>;
    deleteCompetencyTags: Array<CompetencyTagType>;
    deleteCourses: Array<Scalars['String']['output']>;
    deleteDocuments: Array<Scalars['String']['output']>;
    deleteModules: Array<Scalars['String']['output']>;
    deleteProfiles: Array<Scalars['String']['output']>;
    deleteTags: Array<Scalars['String']['output']>;
    deleteTemplates: Array<Scalars['String']['output']>;
    deleteUser: UserModelExtendedType;
    removeRecipe: Scalars['Boolean']['output'];
    updateBots: Array<BotType>;
    updateCollections: Array<CollectionUpdateStatusType>;
    updateCompetencyTags: Array<CompetencyTagType>;
    updateCourses: Array<CourseType>;
    updateCoursesMeta: Array<UpdateCourseMetaType>;
    updateDocuments: Array<DocumentType>;
    updateModules: Array<ModuleType>;
    updateModulesMeta: Array<UpdateMetaType>;
    updateProfiles: Array<ProfileType>;
    updateTags: Array<TagType>;
    updateTemplates: Array<TemplatesType>;
    updateUser: UserModelExtendedType;
    upsertTagsAll: Array<TagType>;
};
export type MutationAddRecipeArgs = {
    newRecipeData: NewRecipeInputType;
};
export type MutationCreateBotResponseArgs = {
    createBotResponseInput: CreateBotResponseInputType;
};
export type MutationCreateBotsArgs = {
    createBotsInput: Array<CreateBotInputType>;
};
export type MutationCreateCompetencyTagsArgs = {
    competencyTagsInput: CompetencyTagsInputType;
};
export type MutationCreateContentMetaDataArgs = {
    createContentMetaDataInput: CreateOriginInputType;
};
export type MutationCreateCoursesArgs = {
    createCoursesInput: Array<CreateCourseInputType>;
};
export type MutationCreateDocumentsArgs = {
    createDocumentsInput: Array<CreateDocumentInputType>;
};
export type MutationCreateModulesArgs = {
    createModulesInput: Array<CreateModuleInputType>;
};
export type MutationCreateProfilesArgs = {
    createProfilesInput: Array<CreateProfileInputType>;
};
export type MutationCreateTagsArgs = {
    createTagsInput: Array<CreateTagInputType>;
};
export type MutationCreateTemplatesArgs = {
    createTemplatesInput: Array<CreateTemplatesInputType>;
};
export type MutationCreateUserArgs = {
    userInputType: UserInputType;
};
export type MutationCreateYoutubeTranscriptArgs = {
    createYoutubeTranscriptInput: CreateOriginInputType;
};
export type MutationDeactivateBotsArgs = {
    deactivateBotsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateCoursesArgs = {
    deactivateCoursesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateDocumentsArgs = {
    deactivateDocumentsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateModulesArgs = {
    deactivateModulesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateProfilesArgs = {
    deactivateProfilesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateTagsArgs = {
    deactivateTagsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeactivateTemplatesArgs = {
    deactivateTemplatesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteBotsArgs = {
    deleteBotsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteCompetencyTagsArgs = {
    idCompetencyTags: Scalars['String']['input'];
};
export type MutationDeleteCoursesArgs = {
    deleteCoursesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteDocumentsArgs = {
    deleteDocumentsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteModulesArgs = {
    deleteModulesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteProfilesArgs = {
    deleteProfilesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteTagsArgs = {
    deleteTagsIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteTemplatesArgs = {
    deleteTemplatesIdsInput: Array<Scalars['String']['input']>;
};
export type MutationDeleteUserArgs = {
    userIdAuth: Scalars['String']['input'];
    userIdProfile: Scalars['String']['input'];
};
export type MutationRemoveRecipeArgs = {
    id: Scalars['String']['input'];
};
export type MutationUpdateBotsArgs = {
    updateBotsInput: Array<UpdateBotsInputType>;
};
export type MutationUpdateCollectionsArgs = {
    collections: Array<Scalars['String']['input']>;
};
export type MutationUpdateCompetencyTagsArgs = {
    competencyTagsInput: CompetencyTagsInputType;
};
export type MutationUpdateCoursesArgs = {
    updateCoursesInput: Array<UpdateCourseInputType>;
};
export type MutationUpdateCoursesMetaArgs = {
    updateCoursesMetaInput: Array<UpdateCourseMetaInputType>;
};
export type MutationUpdateDocumentsArgs = {
    updateDocumentsInput: Array<UpdateDocumentInputType>;
};
export type MutationUpdateModulesArgs = {
    updateModulesInput: Array<UpdateModuleInputType>;
};
export type MutationUpdateModulesMetaArgs = {
    updateModulesMetaInput: Array<UpdateMetaInputType>;
};
export type MutationUpdateProfilesArgs = {
    updateProfilesInput: Array<UpdateProfileInputType>;
};
export type MutationUpdateTagsArgs = {
    updateTagsInput: Array<UpdateTagInputType>;
};
export type MutationUpdateTemplatesArgs = {
    updateTemplatesInput: Array<UpdateTemplatesInputType>;
};
export type MutationUpdateUserArgs = {
    userInputType2: UserInputType;
};
export type NewRecipeInputType = {
    description?: InputMaybe<Scalars['String']['input']>;
    ingredients: Array<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};
export type ObjectionCourseInputType = {
    /** course module Objection capture */
    capture?: InputMaybe<Scalars['String']['input']>;
    /** courses module Objection ID */
    objectionID?: InputMaybe<Scalars['ID']['input']>;
    /** course module Objection text */
    text?: InputMaybe<Scalars['String']['input']>;
};
export type ObjectionCourseType = {
    __typename?: 'ObjectionCourseType';
    /** course module Objection capture */
    capture?: Maybe<Scalars['String']['output']>;
    /** course module Objection ID */
    objectionID: Scalars['ID']['output'];
    /** course module Objection text */
    text?: Maybe<Scalars['String']['output']>;
};
export type ObjectionInputType = {
    /** module Objection capture */
    capture?: InputMaybe<Scalars['String']['input']>;
    /** module Objection ID */
    objectionID?: InputMaybe<Scalars['ID']['input']>;
    /** module Objection text */
    text?: InputMaybe<Scalars['String']['input']>;
};
export type ObjectionType = {
    __typename?: 'ObjectionType';
    /** module Objection capture */
    capture?: Maybe<Scalars['String']['output']>;
    /** module Objection ID */
    objectionID: Scalars['ID']['output'];
    /** module Objection text */
    text?: Maybe<Scalars['String']['output']>;
};
export type OperatorsDocumentsInputType = {
    /** operator for contentIDs */
    contentID?: InputMaybe<Scalars['String']['input']>;
    /** operator for course ID */
    courseID?: InputMaybe<Scalars['String']['input']>;
    /** operator for creator IDs */
    creatorID?: InputMaybe<Scalars['String']['input']>;
    /** operator for creator IDs */
    creatorProfileID?: InputMaybe<Scalars['String']['input']>;
    /** operator for document ID */
    documentID?: InputMaybe<Scalars['String']['input']>;
    /** operator for language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** operator for learner IDs */
    learnerProfileID?: InputMaybe<Scalars['String']['input']>;
    /** operator for learner User IDs */
    learnerUserID?: InputMaybe<Scalars['String']['input']>;
    /** operator for contentIDs */
    moduleContentID?: InputMaybe<Scalars['String']['input']>;
    /** operator for creator IDs */
    moduleCreatorID?: InputMaybe<Scalars['String']['input']>;
    /** operator for module IDs */
    moduleID?: InputMaybe<Scalars['String']['input']>;
    /** operator for module IDs */
    moduleModuleID?: InputMaybe<Scalars['String']['input']>;
    /** operator for documents tags: tags that characterises the content to omit with that selection of the documents */
    moduleTagOmit?: InputMaybe<Scalars['String']['input']>;
    /** operator for tags: tags that characterises the content to pick from the set of documents */
    moduleTagPick?: InputMaybe<Scalars['String']['input']>;
    /** operator for searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** operator for documents tags: tags that characterises the content to omit with that selection of the documents */
    tagOmit?: InputMaybe<Scalars['String']['input']>;
    /** operator for tags: tags that characterises the content to pick from the set of documents */
    tagPick?: InputMaybe<Scalars['String']['input']>;
};
export type OperatorsModulesInputType = {
    /** operator for contentIDs */
    contentID?: InputMaybe<Scalars['String']['input']>;
    /** operator for courses ID */
    courseID?: InputMaybe<Scalars['String']['input']>;
    /** operator for creator IDs */
    creatorID?: InputMaybe<Scalars['String']['input']>;
    /** operator for language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** operator for module IDs */
    moduleID?: InputMaybe<Scalars['String']['input']>;
    /** operator for searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** operator for documents tags: tags that characterises the content to omit with that selection of the documents */
    tagOmit?: InputMaybe<Scalars['String']['input']>;
    /** operator for tags: tags that characterises the content to pick from the set of documents */
    tagPick?: InputMaybe<Scalars['String']['input']>;
};
export type OperatorsProfilesInputType = {
    /** operator for courses ID */
    profileID?: InputMaybe<Scalars['String']['input']>;
    /** operator for module IDs */
    userID?: InputMaybe<Scalars['String']['input']>;
};
export type OperatorsTagsInputType = {
    /** operator for contentIDs */
    contentID?: InputMaybe<Scalars['String']['input']>;
    /** operator for courses ID */
    courseID?: InputMaybe<Scalars['String']['input']>;
    /** operator for creator IDs */
    creatorID?: InputMaybe<Scalars['String']['input']>;
    /** operator for language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** operator for module IDs */
    moduleID?: InputMaybe<Scalars['String']['input']>;
    /** operator for searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** operator for documents tags: tags that characterises the content to omit with that selection of the documents */
    tagOmit?: InputMaybe<Scalars['String']['input']>;
    /** operator for tags: tags that characterises the content to pick from the set of documents */
    tagPick?: InputMaybe<Scalars['String']['input']>;
};
export type OptionCourseInputType = {
    /** course module question option label */
    label: Scalars['String']['input'];
    /** courses module question option ID */
    optionID?: InputMaybe<Scalars['ID']['input']>;
    /** course module question option status: true or false */
    status: Scalars['Boolean']['input'];
};
export type OptionCourseType = {
    __typename?: 'OptionCourseType';
    /** course module question option label */
    label: Scalars['String']['output'];
    /** courses module question option ID */
    optionID?: Maybe<Scalars['ID']['output']>;
    /** course module question option status: true or false */
    status: Scalars['Boolean']['output'];
};
export type OptionInputType = {
    /** module question option answer: true or false */
    answer?: InputMaybe<Scalars['Boolean']['input']>;
    /** module question option label */
    label: Scalars['String']['input'];
    /** module question option ID */
    optionID?: InputMaybe<Scalars['ID']['input']>;
    /** module question option status: true or false */
    status: Scalars['Boolean']['input'];
};
export type OptionType = {
    __typename?: 'OptionType';
    /** module question option answer: true or false */
    answer?: Maybe<Scalars['Boolean']['output']>;
    /** module question option label */
    label: Scalars['String']['output'];
    /** module question option ID */
    optionID?: Maybe<Scalars['ID']['output']>;
    /** module question option status: true or false */
    status: Scalars['Boolean']['output'];
};
export type ProfileEdgeType = {
    __typename?: 'ProfileEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** ProfileEdgeType */
    node?: Maybe<ProfileType>;
};
export declare enum ProfileNatureType {
    Bot = "bot",
    Company = "company",
    Human = "human"
}
export type ProfileType = {
    __typename?: 'ProfileType';
    /** affiliation. An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
    affiliation?: Maybe<Scalars['String']['output']>;
    /** avatarSrc */
    avatarSize?: Maybe<AvatarSizeType>;
    /** avatarSrc */
    avatarSrc?: Maybe<Scalars['String']['output']>;
    /** award. An award won by or for this item. Supersedes awards. */
    awards?: Maybe<Array<Scalars['String']['output']>>;
    /** user ID */
    botID?: Maybe<Scalars['ID']['output']>;
    /** contacts */
    contacts?: Maybe<Array<Scalars['String']['output']>>;
    /** created date */
    dateCreated: Scalars['Float']['output'];
    /** deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** updated date */
    dateUpdated: Scalars['Float']['output'];
    /** description */
    description?: Maybe<Scalars['String']['output']>;
    /** disclaimer */
    disclaimer?: Maybe<Scalars['String']['output']>;
    /** emails */
    emails?: Maybe<Array<Scalars['String']['output']>>;
    /** help */
    help?: Maybe<Scalars['String']['output']>;
    /** socket ID */
    idSocket?: Maybe<Scalars['ID']['output']>;
    /** imagePendingSrc */
    imagePendingSrc?: Maybe<Scalars['String']['output']>;
    /** ipClient profile/ user */
    ipClient?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** jobTitle. The job title of the person (for example, Financial Manager). */
    jobTitle?: Maybe<Scalars['String']['output']>;
    /** locations */
    locations?: Maybe<Array<Scalars['String']['output']>>;
    /** messengers */
    messengers?: Maybe<Array<MessengerType>>;
    /** nameFirst */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** nameLast */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** nameMiddle */
    nameMiddle?: Maybe<Scalars['String']['output']>;
    /** pendingText */
    pendingText?: Maybe<Scalars['String']['output']>;
    /** phones */
    phones?: Maybe<Array<Scalars['String']['output']>>;
    /** default position profile in the list */
    position?: Maybe<Scalars['Float']['output']>;
    /** profile ID */
    profileID: Scalars['ID']['output'];
    /** profile ID */
    profileName: Scalars['String']['output'];
    /** profileNature */
    profileNature: ProfileNatureType;
    /** promptExamples */
    promptExamples?: Maybe<Array<Scalars['String']['output']>>;
    /** serviceSections */
    serviceSections?: Maybe<Array<Scalars['String']['output']>>;
    /** serviceSpecs */
    serviceSpecs?: Maybe<Array<Scalars['String']['output']>>;
    /** url. URLs of the item. */
    urls?: Maybe<Array<Scalars['String']['output']>>;
    /** user ID */
    userID: Scalars['ID']['output'];
};
export type ProfilesConnectionType = {
    __typename?: 'ProfilesConnectionType';
    /** [ProfileEdgeType] */
    edges?: Maybe<Array<ProfileEdgeType>>;
    /** ProfilesPageInfoType */
    pageInfo?: Maybe<ProfilesPageInfoType>;
};
export type ProfilesCountType = {
    __typename?: 'ProfilesCountType';
    /** module count all */
    countAll?: Maybe<Scalars['Int']['output']>;
    /** module count isActive */
    countIsActive?: Maybe<Scalars['Int']['output']>;
};
export type ProfilesDropIndexesType = {
    __typename?: 'ProfilesDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type ProfilesPageInfoType = {
    __typename?: 'ProfilesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type PromptMessageType = {
    __typename?: 'PromptMessageType';
    /** content */
    content: Scalars['String']['output'];
    /** role */
    role: Scalars['String']['output'];
};
export type PromptType = {
    __typename?: 'PromptType';
    /** messages */
    messages: Array<PromptMessageType>;
    /** model */
    model?: Maybe<Scalars['String']['output']>;
    /** n for images */
    n?: Maybe<Scalars['Int']['output']>;
    /** prompt for images */
    prompt?: Maybe<Scalars['String']['output']>;
    /** response_format for images */
    response_format?: Maybe<Scalars['String']['output']>;
    /** size for images */
    size?: Maybe<Scalars['String']['output']>;
    /** temperature */
    temperature: Scalars['Float']['output'];
};
export type Query = {
    __typename?: 'Query';
    countBots: Scalars['Int']['output'];
    countCourses: CoursesCountType;
    countDocuments: DocumentsCountType;
    countModules: ModulesCountType;
    countProfiles: ProfilesCountType;
    countTags: TagsCountType;
    countTemplates: TemplatesCountType;
    dropIndexesBots: BotsDropIndexesType;
    dropIndexesCompetencyTags: CompetencyTagsDropIndexesType;
    dropIndexesCourses: CoursesDropIndexesType;
    dropIndexesDocuments: DocumentsDropIndexesType;
    dropIndexesModules: ModulesDropIndexesType;
    dropIndexesProfiles: ProfilesDropIndexesType;
    dropIndexesTags: TagsDropIndexesType;
    dropIndexesTemplates: TemplatesDropIndexesType;
    getAuthAwsCognitoUserData: UserIdDataAwsCognitoType;
    getAuthAwsCognitoUserRefreshed: UserIdDataAwsCognitoType;
    getAuthAwsCognitoUserRevoked: UserIdDataAwsCognitoType;
    getImagesOpenAi: ImagesOpenAiType;
    getMessageAssistant: MessageAssistantType;
    readBots: Array<BotType>;
    readBotsAll: Array<BotType>;
    readBotsConnection: BotsConnectionType;
    readCompetencyTags: Array<CompetencyTagType>;
    readCourses: Array<CourseType>;
    readCoursesAll: Array<CourseType>;
    readCoursesConnection: CoursesConnectionType;
    readDocuments: Array<DocumentType>;
    readDocumentsAll: Array<DocumentType>;
    readDocumentsConnection: DocumentsConnectionType;
    readModules: Array<ModuleType>;
    readModulesAll: Array<ModuleType>;
    readModulesConnection: ModulesConnectionType;
    readProfiles: Array<ProfileType>;
    readProfilesAll: Array<ProfileType>;
    readProfilesConnection: ProfilesConnectionType;
    readRecipe: RecipeType;
    readRecipes: Array<RecipeType>;
    readTags: Array<TagType>;
    readTagsAll: Array<TagType>;
    readTagsConnection: TagsConnectionType;
    readTagsModulesAll: Array<TagType>;
    readTemplates: Array<TemplatesType>;
    readTemplatesAll: Array<TemplatesType>;
    readTemplatesConnection: TemplatesConnectionType;
    readUserAuth: UserModelExtendedType;
    readUserProfile: UserModelExtendedType;
    readUsers: UsersType;
    sendEmailDocument: DocumentType;
};
export type QueryCountDocumentsArgs = {
    countDocumentInput?: InputMaybe<CountDocumentInputType>;
};
export type QueryCountTemplatesArgs = {
    countTemplatesInput: CountTemplatesInputType;
};
export type QueryGetAuthAwsCognitoUserDataArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType;
};
export type QueryGetAuthAwsCognitoUserRefreshedArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType;
};
export type QueryGetAuthAwsCognitoUserRevokedArgs = {
    userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType;
};
export type QueryGetImagesOpenAiArgs = {
    imageOpenAiInput: ImageOpenAiInputType;
};
export type QueryGetMessageAssistantArgs = {
    messageAssistantInput: MessageAssistantInputType;
};
export type QueryReadBotsArgs = {
    readBotsInput: Array<Scalars['String']['input']>;
};
export type QueryReadBotsConnectionArgs = {
    readBotsConnectionInput: ReadBotsConnectionInputType;
};
export type QueryReadCompetencyTagsArgs = {
    params: CompetencyTagsParamsReadType;
};
export type QueryReadCoursesArgs = {
    readCoursesInput: Array<ReadCourseInputType>;
};
export type QueryReadCoursesConnectionArgs = {
    readCoursesConnectionInput: ReadCoursesConnectionInputType;
};
export type QueryReadDocumentsArgs = {
    readDocumentsIdsInput: Array<Scalars['String']['input']>;
};
export type QueryReadDocumentsConnectionArgs = {
    readDocumentsConnectionInput: ReadDocumentsConnectionInputType;
};
export type QueryReadModulesArgs = {
    readModulesInput: Array<ReadModuleInputType>;
};
export type QueryReadModulesConnectionArgs = {
    readModulesConnectionInput: ReadModulesConnectionInputType;
};
export type QueryReadProfilesArgs = {
    readProfilesInput: Array<ReadProfileInputType>;
};
export type QueryReadProfilesConnectionArgs = {
    readProfilesConnectionInput: ReadProfilesConnectionInputType;
};
export type QueryReadRecipeArgs = {
    id: Scalars['String']['input'];
};
export type QueryReadRecipesArgs = {
    skip?: Scalars['Int']['input'];
    take?: Scalars['Int']['input'];
};
export type QueryReadTagsArgs = {
    readTagsInput: Array<ReadTagInputType>;
};
export type QueryReadTagsConnectionArgs = {
    readTagsConnectionInput: ReadTagsConnectionInputType;
};
export type QueryReadTagsModulesAllArgs = {
    readTagsModulesAllInput: ReadTagsModulesAllInputType;
};
export type QueryReadTemplatesArgs = {
    readTemplatesInput: Array<Scalars['String']['input']>;
};
export type QueryReadTemplatesConnectionArgs = {
    readTemplatesConnectionInput: ReadTemplatesConnectionInputType;
};
export type QueryReadUserAuthArgs = {
    userIdAuth: Scalars['String']['input'];
};
export type QueryReadUserProfileArgs = {
    userIdProfile: Scalars['String']['input'];
};
export type QueryReadUsersArgs = {
    options: ReadUsersOptions;
};
export type QuerySendEmailDocumentArgs = {
    documentID: Scalars['String']['input'];
    sendBcc: Scalars['String']['input'];
    sendCc: Scalars['String']['input'];
    sendTo: Scalars['String']['input'];
};
export type QuestionCourseInputType = {
    /** course module question capture */
    capture: Scalars['String']['input'];
    /** course module question designType */
    designType?: InputMaybe<Scalars['String']['input']>;
    /** course module question isActive */
    isActive?: Scalars['Boolean']['input'];
    /** designType > multi */
    multi?: InputMaybe<Scalars['Boolean']['input']>;
    /** course module question options */
    options: Array<OptionCourseInputType>;
    /** courses module question ID */
    questionID?: InputMaybe<Scalars['ID']['input']>;
    /** course module question topic */
    topic?: InputMaybe<Scalars['String']['input']>;
};
export type QuestionCourseType = {
    __typename?: 'QuestionCourseType';
    /** course module question capture */
    capture: Scalars['String']['output'];
    /** course module question designType */
    designType?: Maybe<Scalars['String']['output']>;
    /** course module question isActive */
    isActive: Scalars['Boolean']['output'];
    /** designType > multi */
    multi?: Maybe<Scalars['Boolean']['output']>;
    /** course module question options */
    options: Array<OptionCourseType>;
    /** courses module question ID */
    questionID?: Maybe<Scalars['ID']['output']>;
    /** course module question topic */
    topic?: Maybe<Scalars['String']['output']>;
};
export type QuestionInputType = {
    /** module question capture */
    capture: Scalars['String']['input'];
    /** module question designType */
    designType?: InputMaybe<Scalars['String']['input']>;
    /** module question isActive */
    isActive?: Scalars['Boolean']['input'];
    /** designType > multi */
    multi?: InputMaybe<Scalars['Boolean']['input']>;
    /** module question options */
    options: Array<OptionInputType>;
    /** module question ID */
    questionID?: InputMaybe<Scalars['ID']['input']>;
    /** module question topic */
    topic?: InputMaybe<Scalars['String']['input']>;
};
export type QuestionType = {
    __typename?: 'QuestionType';
    /** module question capture */
    capture: Scalars['String']['output'];
    /** module question designType */
    designType?: Maybe<Scalars['String']['output']>;
    /** module question isActive */
    isActive: Scalars['Boolean']['output'];
    /** designType > multi */
    multi?: Maybe<Scalars['Boolean']['output']>;
    /** module question options */
    options: Array<OptionType>;
    /** module question ID */
    questionID?: Maybe<Scalars['ID']['output']>;
    /** module question topic */
    topic?: Maybe<Scalars['String']['output']>;
};
export type ReadBotsConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type ReadCourseInputType = {
    /** course ID */
    courseID?: InputMaybe<Scalars['ID']['input']>;
    /** module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
};
export type ReadCoursesConnectionInputType = {
    /** after: Specifies a cursor that indicates the starting point for the next set of data to retrieve. */
    after?: InputMaybe<Scalars['String']['input']>;
    /** course module contentIDs */
    contentIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** courses ID */
    courseIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** first: Specifies the number of items to return from the beginning of the dataset. */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** course module IDs */
    moduleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** offset: Similar to "First," it specifies the maximum number of items to return. if offset === 0 then the function returns ALL docs after the first number */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** profile IDs */
    profileIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** search in - array of fields to search in, see the list in src/constants/seachInFieldsMax.ts */
    searchIn?: InputMaybe<Array<Scalars['String']['input']>>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortCoursesInputType>;
    /** courses meta tags: tags that characterises the course content to omit with that selection of the documents */
    tagsOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** courses meta tags: tags that characterises the course content to pick from the set of documents */
    tagsPick?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type ReadDocumentsConnectionInputType = {
    /** after: Specifies a cursor that indicates the starting point for the next set of data to retrieve. */
    after?: InputMaybe<Scalars['String']['input']>;
    /** contentIDs */
    contentIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** courses ID */
    courseIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** creator IDs */
    creatorIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** document IDs */
    documentIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** first: Specifies the number of items to return from the beginning of the dataset. */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** learner IDs */
    learnerIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** learner user IDs */
    learnerUserIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** module IDs */
    moduleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** offset: Similar to "First," it specifies the maximum number of items to return. if offset === 0 then the function returns ALL docs after the first number */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to setup operator for arguments */
    operators?: InputMaybe<OperatorsDocumentsInputType>;
    /** search in - array of fields to search in, see the list in src/constants/seachInFieldsMax.ts */
    searchIn?: InputMaybe<Array<Scalars['String']['input']>>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortDocumentsInputType>;
    /** documents tags: tags that characterises the content to omit with that selection of the documents */
    tagsOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** documents tags: tags that characterises the content to pick from the set of documents */
    tagsPick?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type ReadModuleInputType = {
    /** contnent ID */
    contentID?: InputMaybe<Scalars['ID']['input']>;
    /** module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
};
export type ReadModulesConnectionInputType = {
    /** after: Specifies a cursor that indicates the starting point for the next set of data to retrieve. */
    after?: InputMaybe<Scalars['String']['input']>;
    /** module contentIDs */
    contentIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** creator IDs */
    creatorIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** first: Specifies the number of items to return from the beginning of the dataset. */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** isArticle query modules with or without article */
    isArticle?: InputMaybe<Scalars['Boolean']['input']>;
    /** isObjectionsList query modules with or without objections */
    isObjectionsList?: InputMaybe<Scalars['Boolean']['input']>;
    /** isQuestionsList query modules with or without questions */
    isQuestionsList?: InputMaybe<Scalars['Boolean']['input']>;
    /** isSummary query modules with or without summary */
    isSummary?: InputMaybe<Scalars['Boolean']['input']>;
    /** isTagsList query modules with or without tags */
    isTagsList?: InputMaybe<Scalars['Boolean']['input']>;
    /** isTranscriptList query modules with or without transcriptList */
    isTranscriptList?: InputMaybe<Scalars['Boolean']['input']>;
    /** language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** learner ID */
    learnerID?: InputMaybe<Scalars['ID']['input']>;
    /** learner user ID */
    learnerUserID?: InputMaybe<Scalars['ID']['input']>;
    /** module IDs */
    moduleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** offset: Similar to "First," it specifies the maximum number of items to return. if offset === 0 then the function returns ALL docs after the first number */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to setup operator for arguments */
    operators?: InputMaybe<OperatorsModulesInputType>;
    /** search in - array of fields to search in, see the list in src/constants/seachInFieldsMax.ts */
    searchIn?: InputMaybe<Array<Scalars['String']['input']>>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortModulesInputType>;
    /** tags: tags that characterises the content to omit with that selection of the documents */
    tagsOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** tags: tags that characterises the content to pick from the set of documents */
    tagsPick?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type ReadProfileInputType = {
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** profile ID */
    profileID?: InputMaybe<Scalars['ID']['input']>;
    /** user ID */
    userID?: InputMaybe<Scalars['ID']['input']>;
};
export type ReadProfilesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** bot IDs */
    botIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** emails */
    email?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to setup operator for arguments */
    operators?: InputMaybe<OperatorsProfilesInputType>;
    /** profile IDs */
    profileIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** search in - array of fields to search in, see the list in src/constants/seachInFieldsMax.ts */
    searchIn?: InputMaybe<Array<Scalars['String']['input']>>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortProfilesInputType>;
    /** user IDs */
    userIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
};
export type ReadTagInputType = {
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** isCompleted */
    isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
    /** isNotCompleted */
    isNotCompleted?: InputMaybe<Scalars['Boolean']['input']>;
    /** learner ID */
    learnerID?: InputMaybe<Scalars['ID']['input']>;
    /** learner user ID */
    learnerUserID?: InputMaybe<Scalars['ID']['input']>;
    /** limit value limits the output by the threshold of the count value. if limit === 0 || undefined || null then the function returns ALL docs */
    limit?: InputMaybe<Scalars['Int']['input']>;
    /** min count value limits the output by the threshold of the count value. if minCount === 0 || undefined || nullthen the function returns ALL docs */
    minCount?: InputMaybe<Scalars['Int']['input']>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** tag ID */
    tagID?: InputMaybe<Scalars['ID']['input']>;
    /** value */
    value?: InputMaybe<Scalars['ID']['input']>;
};
export type ReadTagsConnectionInputType = {
    /** after: Specifies a cursor that indicates the starting point for the next set of data to retrieve. */
    after?: InputMaybe<Scalars['String']['input']>;
    /** module contentIDs */
    contentIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** creator IDs */
    creatorIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** first: Specifies the number of items to return from the beginning of the dataset. */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** isActive */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** language code */
    language?: InputMaybe<Scalars['String']['input']>;
    /** learner ID */
    learnerID?: InputMaybe<Scalars['ID']['input']>;
    /** learner user ID */
    learnerUserID?: InputMaybe<Scalars['ID']['input']>;
    /** min minCompleted value limits the output by the threshold of the minCompleted value. if minCompleted === 0 || undefined || nullthen the function returns ALL docs */
    minCompleted?: InputMaybe<Scalars['Int']['input']>;
    /** min count value limits the output by the threshold of the count value. if minCount === 0 || undefined || nullthen the function returns ALL docs */
    minCount?: InputMaybe<Scalars['Int']['input']>;
    /** module IDs */
    moduleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** offset: Similar to "First," it specifies the maximum number of items to return. if offset === 0 then the function returns ALL docs after the first number */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to setup operator for arguments */
    operators?: InputMaybe<OperatorsTagsInputType>;
    /** search in - array of fields to search in, see the list in src/constants/seachInFieldsMax.ts */
    searchIn?: InputMaybe<Array<Scalars['String']['input']>>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortTagsInputType>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sortGraphQl?: InputMaybe<SortGraphQlTagsInputType>;
    /** tag IDs */
    tagIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** tags: tags that characterises the content to omit with that selection of the documents */
    tagsOmit?: InputMaybe<Array<Scalars['String']['input']>>;
    /** tags: tags that characterises the content to pick from the set of documents */
    tagsPick?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type ReadTagsModulesAllInputType = {
    /** isCompleted */
    isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
    /** isNotCompleted */
    isNotCompleted?: InputMaybe<Scalars['Boolean']['input']>;
    /** learner ID */
    learnerID?: InputMaybe<Scalars['ID']['input']>;
    /** learner user ID */
    learnerUserID?: InputMaybe<Scalars['ID']['input']>;
    /** limit value limits the output by the threshold of the count value. if limit === 0 || undefined || null then the function returns ALL docs */
    limit?: InputMaybe<Scalars['Int']['input']>;
    /** min count value limits the output by the threshold of the count value. if minCount === 0 || undefined || nullthen the function returns ALL docs */
    minCount?: InputMaybe<Scalars['Int']['input']>;
    /** search in - array of fields to search in, see the list in src/constants/seachInFieldsMax.ts */
    searchIn?: InputMaybe<Array<Scalars['String']['input']>>;
    /** searchPhrase */
    searchPhrase?: InputMaybe<Scalars['String']['input']>;
};
export type ReadTemplatesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sort?: InputMaybe<SortTemplatesInputType>;
    /** option to sort by a field: 1 ascending, -1 descending */
    sortGraphQl?: InputMaybe<SortGraphQlTemplatesInputType>;
};
export type ReadUsersOptions = {
    /** user fields equal to, see https://docs.mongodb.com/manual/reference/operator/query/eq/ */
    eq?: InputMaybe<Array<ComparisonFields>>;
    /** The option to search for active or not recods in user document */
    isActive?: InputMaybe<Scalars['Boolean']['input']>;
    /** user fields equal to, see https://docs.mongodb.com/manual/reference/operator/query/ne/ */
    ne?: InputMaybe<Array<ComparisonFields>>;
};
export type RecipeType = {
    __typename?: 'RecipeType';
    creationDate: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    ingredients: Array<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};
export type ResponseMessageType = {
    __typename?: 'ResponseMessageType';
    /** description message */
    message?: Maybe<Scalars['String']['output']>;
    /** status: success or failure */
    status?: Maybe<Scalars['String']['output']>;
};
export type SiteMapReportType = {
    __typename?: 'SiteMapReportType';
    /** articlesUrls */
    articlesUrls?: Maybe<Scalars['Int']['output']>;
    /** rootUrl */
    collectionsUrls?: Maybe<Scalars['Int']['output']>;
    /** modulesUrls */
    modulesUrls?: Maybe<Scalars['Int']['output']>;
};
export type SortCoursesInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortDocumentsInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortGraphQlTagsInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortGraphQlTemplatesInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortModulesInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortProfilesInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortTagsInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export type SortTemplatesInputType = {
    /** sorting direction: 1 ascending, -1 descending */
    direction?: InputMaybe<Scalars['Float']['input']>;
    /** property name to sort by */
    prop?: InputMaybe<Scalars['String']['input']>;
};
export declare enum StyleEnumType {
    Ol = "ol",
    P = "p",
    Ul = "ul"
}
export declare enum StyleInputEnumType {
    Ol = "ol",
    P = "p",
    Ul = "ul"
}
export type Subscription = {
    __typename?: 'Subscription';
    documentAdded: DocumentType;
    recipeAdded: RecipeType;
};
export type SummaryItemCourseInputType = {
    /** course module Summary item capture */
    capture?: InputMaybe<Scalars['String']['input']>;
    /** courses module Summary item ID */
    summaryItemID?: InputMaybe<Scalars['ID']['input']>;
    /** course module Summary item text */
    text?: InputMaybe<Scalars['String']['input']>;
};
export type SummaryItemCourseType = {
    __typename?: 'SummaryItemCourseType';
    /** course module Summary item capture */
    capture?: Maybe<Scalars['String']['output']>;
    /** course module summary ID */
    summaryItemID: Scalars['ID']['output'];
    /** course module Summary item text */
    text?: Maybe<Scalars['String']['output']>;
};
export type SummaryItemInputType = {
    /** module Summary item capture */
    capture?: InputMaybe<Scalars['String']['input']>;
    /** module Summary item ID */
    summaryItemID?: InputMaybe<Scalars['ID']['input']>;
    /** module Summary item text */
    text?: InputMaybe<Scalars['String']['input']>;
};
export type SummaryItemType = {
    __typename?: 'SummaryItemType';
    /** module Summary item capture */
    capture?: Maybe<Scalars['String']['output']>;
    /** module summary ID */
    summaryItemID: Scalars['ID']['output'];
    /** module Summary item text */
    text?: Maybe<Scalars['String']['output']>;
};
export type TagType = {
    __typename?: 'TagType';
    /** tags completed */
    completed: Scalars['Int']['output'];
    /** tags count */
    count: Scalars['Int']['output'];
    /** tags created date */
    dateCreated: Scalars['Float']['output'];
    /** tags deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** tags updated date */
    dateUpdated: Scalars['Float']['output'];
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** module IDs */
    moduleIDs?: Maybe<Array<Scalars['ID']['output']>>;
    /** tags ID */
    tagID?: Maybe<Scalars['ID']['output']>;
    /** tags value */
    value: Scalars['String']['output'];
};
export type TagsConnectionType = {
    __typename?: 'TagsConnectionType';
    /** [TagsEdgeType] */
    edges?: Maybe<Array<TagsEdgeType>>;
    /** TagsPageInfoType */
    pageInfo?: Maybe<TagsPageInfoType>;
};
export type TagsCountType = {
    __typename?: 'TagsCountType';
    /** module count all */
    countAll?: Maybe<Scalars['Int']['output']>;
    /** module count isActive */
    countIsActive?: Maybe<Scalars['Int']['output']>;
};
export type TagsDropIndexesType = {
    __typename?: 'TagsDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type TagsEdgeType = {
    __typename?: 'TagsEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** TagsEdgeType */
    node?: Maybe<TagType>;
};
export type TagsPageInfoType = {
    __typename?: 'TagsPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type TemplatesConnectionType = {
    __typename?: 'TemplatesConnectionType';
    /** [TemplatesEdgeType] */
    edges?: Maybe<Array<TemplatesEdgeType>>;
    /** TemplatesPageInfoType */
    pageInfo?: Maybe<TemplatesPageInfoType>;
};
export type TemplatesCountType = {
    __typename?: 'TemplatesCountType';
    /** module count all */
    countAll?: Maybe<Scalars['Int']['output']>;
    /** module count isActive */
    countIsActive?: Maybe<Scalars['Int']['output']>;
};
export type TemplatesDropIndexesType = {
    __typename?: 'TemplatesDropIndexesType';
    /** drop indexes status */
    status?: Maybe<Scalars['Boolean']['output']>;
};
export type TemplatesEdgeType = {
    __typename?: 'TemplatesEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** TemplatesEdgeType */
    node?: Maybe<TemplatesType>;
};
export type TemplatesPageInfoType = {
    __typename?: 'TemplatesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type TemplatesType = {
    __typename?: 'TemplatesType';
    /** templates created date */
    dateCreated: Scalars['Float']['output'];
    /** templates deleted date */
    dateDeactivated?: Maybe<Scalars['Float']['output']>;
    /** templates updated date */
    dateUpdated: Scalars['Float']['output'];
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** templates ID */
    templatesID?: Maybe<Scalars['ID']['output']>;
};
export type TextObjType = {
    __typename?: 'TextObjType';
    /** contentArray */
    contentArray: Array<Scalars['String']['output']>;
    /** contentType */
    contentType?: Maybe<Scalars['String']['output']>;
};
export type ThumbnailsBotType = {
    __typename?: 'ThumbnailsBotType';
    /** thumbnail image default */
    default?: Maybe<ThumbnailsImageDataBotType>;
    /** thumbnail image high */
    high?: Maybe<ThumbnailsImageDataBotType>;
    /** thumbnail image maxres */
    maxres?: Maybe<ThumbnailsImageDataBotType>;
    /** thumbnail image medium */
    medium?: Maybe<ThumbnailsImageDataBotType>;
    /** thumbnail image standard */
    standard?: Maybe<ThumbnailsImageDataBotType>;
};
export type ThumbnailsCourseImageDataInputType = {
    /** height */
    height: Scalars['Int']['input'];
    /** url */
    url?: InputMaybe<Scalars['String']['input']>;
    /** width */
    width: Scalars['Int']['input'];
};
export type ThumbnailsCourseImageDataType = {
    __typename?: 'ThumbnailsCourseImageDataType';
    /** height */
    height: Scalars['Int']['output'];
    /** url */
    url?: Maybe<Scalars['String']['output']>;
    /** width */
    width: Scalars['Int']['output'];
};
export type ThumbnailsCourseInputType = {
    /** thumbnail image default */
    default?: InputMaybe<ThumbnailsCourseImageDataInputType>;
    /** thumbnail image high */
    high?: InputMaybe<ThumbnailsCourseImageDataInputType>;
    /** thumbnail image maxres */
    maxres?: InputMaybe<ThumbnailsCourseImageDataInputType>;
    /** thumbnail image medium */
    medium?: InputMaybe<ThumbnailsCourseImageDataInputType>;
    /** thumbnail image standard */
    standard?: InputMaybe<ThumbnailsCourseImageDataInputType>;
};
export type ThumbnailsCourseType = {
    __typename?: 'ThumbnailsCourseType';
    /** thumbnail image default */
    default?: Maybe<ThumbnailsCourseImageDataType>;
    /** thumbnail image high */
    high?: Maybe<ThumbnailsCourseImageDataType>;
    /** thumbnail image maxres */
    maxres?: Maybe<ThumbnailsCourseImageDataType>;
    /** thumbnail image medium */
    medium?: Maybe<ThumbnailsCourseImageDataType>;
    /** thumbnail image standard */
    standard?: Maybe<ThumbnailsCourseImageDataType>;
};
export type ThumbnailsImageDataBotType = {
    __typename?: 'ThumbnailsImageDataBotType';
    /** height */
    height: Scalars['Int']['output'];
    /** url */
    url?: Maybe<Scalars['String']['output']>;
    /** width */
    width: Scalars['Int']['output'];
};
export type ThumbnailsImageDataInputType = {
    /** height */
    height: Scalars['Int']['input'];
    /** rel */
    rel?: InputMaybe<Scalars['String']['input']>;
    /** type */
    type?: InputMaybe<Scalars['String']['input']>;
    /** url */
    url?: InputMaybe<Scalars['String']['input']>;
    /** width */
    width: Scalars['Int']['input'];
};
export type ThumbnailsImageDataType = {
    __typename?: 'ThumbnailsImageDataType';
    /** height */
    height: Scalars['Int']['output'];
    /** rel */
    rel?: Maybe<Scalars['String']['output']>;
    /** type */
    type?: Maybe<Scalars['String']['output']>;
    /** url */
    url?: Maybe<Scalars['String']['output']>;
    /** width */
    width: Scalars['Int']['output'];
};
export type ThumbnailsInputType = {
    /** thumbnail image default */
    default?: InputMaybe<ThumbnailsImageDataInputType>;
    /** favicon */
    favicon?: InputMaybe<ThumbnailsImageDataInputType>;
    /** thumbnail image high */
    high?: InputMaybe<ThumbnailsImageDataInputType>;
    /** image16x16 */
    image16x16?: InputMaybe<ThumbnailsImageDataInputType>;
    /** image32x32 */
    image32x32?: InputMaybe<ThumbnailsImageDataInputType>;
    /** image192x192 */
    image192x192?: InputMaybe<ThumbnailsImageDataInputType>;
    /** image512x512 */
    image512x512?: InputMaybe<ThumbnailsImageDataInputType>;
    /** thumbnail image maxres */
    maxres?: InputMaybe<ThumbnailsImageDataInputType>;
    /** thumbnail image medium */
    medium?: InputMaybe<ThumbnailsImageDataInputType>;
    /** thumbnail image standard */
    standard?: InputMaybe<ThumbnailsImageDataInputType>;
};
export type ThumbnailsType = {
    __typename?: 'ThumbnailsType';
    /** thumbnail image default */
    default?: Maybe<ThumbnailsImageDataType>;
    /** favicon */
    favicon?: Maybe<ThumbnailsImageDataType>;
    /** thumbnail image high */
    high?: Maybe<ThumbnailsImageDataType>;
    /** image16x16 */
    image16x16?: Maybe<ThumbnailsImageDataType>;
    /** image32x32 */
    image32x32?: Maybe<ThumbnailsImageDataType>;
    /** image192x192 */
    image192x192?: Maybe<ThumbnailsImageDataType>;
    /** image512x512 */
    image512x512?: Maybe<ThumbnailsImageDataType>;
    /** thumbnail image maxres */
    maxres?: Maybe<ThumbnailsImageDataType>;
    /** thumbnail image medium */
    medium?: Maybe<ThumbnailsImageDataType>;
    /** thumbnail image standard */
    standard?: Maybe<ThumbnailsImageDataType>;
};
export type TranscriptObjectBotType = {
    __typename?: 'TranscriptObjectBotType';
    /** duration */
    duration?: Maybe<Scalars['Float']['output']>;
    /** end ms */
    end?: Maybe<Scalars['Float']['output']>;
    /** start ms */
    start?: Maybe<Scalars['Float']['output']>;
    /** text */
    text?: Maybe<Scalars['String']['output']>;
};
export type TranscriptObjectInputType = {
    /** duration */
    duration?: InputMaybe<Scalars['Float']['input']>;
    /** end ms */
    end?: InputMaybe<Scalars['Float']['input']>;
    /** start ms */
    start?: InputMaybe<Scalars['Float']['input']>;
    /** text */
    text?: InputMaybe<Scalars['String']['input']>;
    /** transcriptItem ID */
    transcriptItemID?: InputMaybe<Scalars['ID']['input']>;
};
export type TranscriptObjectType = {
    __typename?: 'TranscriptObjectType';
    /** duration */
    duration?: Maybe<Scalars['Float']['output']>;
    /** end ms */
    end?: Maybe<Scalars['Float']['output']>;
    /** start ms */
    start?: Maybe<Scalars['Float']['output']>;
    /** text */
    text?: Maybe<Scalars['String']['output']>;
    /** transcriptItem ID */
    transcriptItemID?: Maybe<Scalars['ID']['output']>;
};
export type UpdateBotsInputType = {
    /** bots ID */
    botsID?: InputMaybe<Scalars['ID']['input']>;
    /** bots created date */
    dateCreated: Scalars['Float']['input'];
    /** bots deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** bots updated date */
    dateUpdated: Scalars['Float']['input'];
};
export type UpdateCourseInputType = {
    /** course capture */
    capture: Scalars['String']['input'];
    /** courses ID */
    courseID: Scalars['ID']['input'];
    /** courses created date */
    dateCreated: Scalars['Float']['input'];
    /** courses deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** courses updated date */
    dateUpdated: Scalars['Float']['input'];
    /** course description */
    description: Scalars['String']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** courses meta information */
    meta?: InputMaybe<MetaCourseInputType>;
    /** courses modules */
    modules?: InputMaybe<Array<ModuleCourseInputType>>;
    /** profile ID */
    profileID: Scalars['ID']['input'];
};
export type UpdateCourseMetaInputType = {
    /** courses ID */
    courseID?: InputMaybe<Scalars['ID']['input']>;
    /** courses meta information */
    meta?: InputMaybe<MetaCoursePartialInputType>;
    /** module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
    /** profile ID */
    profileID: Scalars['ID']['input'];
};
export type UpdateCourseMetaType = {
    __typename?: 'UpdateCourseMetaType';
    /** courses ID */
    courseID?: Maybe<Scalars['ID']['output']>;
    /** courses meta information */
    meta?: Maybe<MetaCoursePartialType>;
    /** module ID */
    moduleID?: Maybe<Scalars['ID']['output']>;
    /** profile ID */
    profileID: Scalars['ID']['output'];
    /** updateInfo */
    updateInfo?: Maybe<UpdateInfoCourseType>;
};
export type UpdateDocumentInputType = {
    /** creator of the module */
    creator: UpdateProfileInputType;
    /** documents created date */
    dateCreated: Scalars['Float']['input'];
    /** documents deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** documents updated date */
    dateUpdated: Scalars['Float']['input'];
    /** documentID */
    documentID: Scalars['ID']['input'];
    /** ipClient profile/ user */
    ipClient?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** learner, user, student */
    learner: UpdateProfileInputType;
    /** module */
    module: UpdateModuleForDocumentInputType;
};
export type UpdateInfoCourseType = {
    __typename?: 'UpdateInfoCourseType';
    /** acknowledged */
    acknowledged?: Maybe<Scalars['Boolean']['output']>;
    /** matchedCount */
    matchedCount?: Maybe<Scalars['Int']['output']>;
    /** modifiedCount */
    modifiedCount?: Maybe<Scalars['Int']['output']>;
    /** upsertedCount */
    upsertedCount?: Maybe<Scalars['Int']['output']>;
    /** upsertedId */
    upsertedId?: Maybe<Scalars['String']['output']>;
};
export type UpdateInfoType = {
    __typename?: 'UpdateInfoType';
    /** acknowledged */
    acknowledged?: Maybe<Scalars['Boolean']['output']>;
    /** matchedCount */
    matchedCount?: Maybe<Scalars['Int']['output']>;
    /** modifiedCount */
    modifiedCount?: Maybe<Scalars['Int']['output']>;
    /** upsertedCount */
    upsertedCount?: Maybe<Scalars['Int']['output']>;
    /** upsertedId */
    upsertedId?: Maybe<Scalars['String']['output']>;
};
export type UpdateMetaInputType = {
    /** creatorID */
    creatorID: Scalars['ID']['input'];
    /** meta information */
    meta?: InputMaybe<MetaPartialInputType>;
    /** module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
    /** organizationID */
    organizationID: Scalars['ID']['input'];
};
export type UpdateMetaType = {
    __typename?: 'UpdateMetaType';
    /** creatorID */
    creatorID: Scalars['ID']['output'];
    /** meta information */
    meta?: Maybe<MetaPartialType>;
    /** module ID */
    moduleID?: Maybe<Scalars['ID']['output']>;
    /** organizationID */
    organizationID: Scalars['ID']['output'];
    /** updateInfo */
    updateInfo?: Maybe<UpdateInfoType>;
};
export type UpdateModuleForDocumentInputType = {
    /** capture */
    capture: Scalars['String']['input'];
    /** capture channel */
    captureChannel?: InputMaybe<Scalars['String']['input']>;
    /** capture playlist */
    capturePlaylist?: InputMaybe<Scalars['String']['input']>;
    /** module channelID */
    channelID?: InputMaybe<Scalars['ID']['input']>;
    /** module contentID */
    contentID: Scalars['ID']['input'];
    /** module content type */
    contentType: Scalars['String']['input'];
    /** creatorID */
    creatorID: Scalars['ID']['input'];
    /** created date */
    dateCreated: Scalars['Float']['input'];
    /** deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** updated date */
    dateUpdated: Scalars['Float']['input'];
    /** description */
    description: Scalars['String']['input'];
    /** module duration */
    duration: Scalars['String']['input'];
    /** module index */
    index?: InputMaybe<Scalars['Int']['input']>;
    /** ipClient profile/ user */
    ipClient?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** isCompleted */
    isCompleted?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** module ID */
    moduleID: Scalars['ID']['input'];
    /** organizationID */
    organizationID: Scalars['ID']['input'];
    /** module passRate */
    passRate?: InputMaybe<Scalars['Float']['input']>;
    /** module playlistID */
    playlistID?: InputMaybe<Scalars['ID']['input']>;
    /** module questionNumber */
    questionNumber?: Scalars['Int']['input'];
    /** meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** module summary */
    summary?: InputMaybe<Array<SummaryItemInputType>>;
    /** meta tags: tags that characterises the content */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
    /** thumbnail image data */
    thumbnails?: InputMaybe<ThumbnailsInputType>;
};
export type UpdateModuleInputType = {
    /** module article */
    article?: InputMaybe<Array<Array<ArticleItemInputType>>>;
    /** capture */
    capture: Scalars['String']['input'];
    /** capture channel */
    captureChannel?: InputMaybe<Scalars['String']['input']>;
    /** capture playlist */
    capturePlaylist?: InputMaybe<Scalars['String']['input']>;
    /** module channelID */
    channelID?: InputMaybe<Scalars['ID']['input']>;
    /** module contentID */
    contentID: Scalars['ID']['input'];
    /** module content type */
    contentType: Scalars['String']['input'];
    /** creatorID */
    creatorID: Scalars['ID']['input'];
    /** created date */
    dateCreated: Scalars['Float']['input'];
    /** deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** updated date */
    dateUpdated: Scalars['Float']['input'];
    /** description */
    description: Scalars['String']['input'];
    /** module duration */
    duration: Scalars['String']['input'];
    /** module index */
    index?: InputMaybe<Scalars['Int']['input']>;
    /** ipClient profile/ user */
    ipClient?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** isCompleted */
    isCompleted?: Scalars['Boolean']['input'];
    /** language code */
    language: Scalars['String']['input'];
    /** module ID */
    moduleID: Scalars['ID']['input'];
    /** module objection */
    objections?: InputMaybe<Array<ObjectionInputType>>;
    /** organizationID */
    organizationID: Scalars['ID']['input'];
    /** module passRate */
    passRate?: InputMaybe<Scalars['Float']['input']>;
    /** module playlistID */
    playlistID?: InputMaybe<Scalars['ID']['input']>;
    /** module questionNumber */
    questionNumber?: Scalars['Int']['input'];
    /** module questions */
    questions?: Array<QuestionInputType>;
    /** meta stages: stages/ statuses/ envs */
    stages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** module summary */
    summary?: InputMaybe<Array<SummaryItemInputType>>;
    /** meta tags: tags that characterises the content */
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
    /** thumbnail image data */
    thumbnails?: InputMaybe<ThumbnailsInputType>;
    /** module transcriptList */
    transcriptList?: InputMaybe<Array<TranscriptObjectInputType>>;
};
export type UpdateProfileInputType = {
    /** affiliation. An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
    affiliation?: InputMaybe<Scalars['String']['input']>;
    /** avatarSrc */
    avatarSize?: InputMaybe<AvatarSizeInputType>;
    /** avatarSrc */
    avatarSrc?: InputMaybe<Scalars['String']['input']>;
    /** award. An award won by or for this item. Supersedes awards. */
    awards?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user ID */
    botID?: InputMaybe<Scalars['ID']['input']>;
    /** contacts */
    contacts?: InputMaybe<Array<Scalars['String']['input']>>;
    /** created date */
    dateCreated: Scalars['Float']['input'];
    /** deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** updated date */
    dateUpdated: Scalars['Float']['input'];
    /** description */
    description?: InputMaybe<Scalars['String']['input']>;
    /** disclaimer */
    disclaimer?: InputMaybe<Scalars['String']['input']>;
    /** emails */
    emails?: InputMaybe<Array<Scalars['String']['input']>>;
    /** help */
    help?: InputMaybe<Scalars['String']['input']>;
    /** socket ID */
    idSocket?: InputMaybe<Scalars['ID']['input']>;
    /** imagePendingSrc */
    imagePendingSrc?: InputMaybe<Scalars['String']['input']>;
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** jobTitle. The job title of the person (for example, Financial Manager). */
    jobTitle?: InputMaybe<Scalars['String']['input']>;
    /** locations */
    locations?: InputMaybe<Array<Scalars['String']['input']>>;
    /** messengers */
    messengers?: InputMaybe<Array<MessengerInputType>>;
    /** nameFirst */
    nameFirst?: InputMaybe<Scalars['String']['input']>;
    /** nameLast */
    nameLast?: InputMaybe<Scalars['String']['input']>;
    /** nameMiddle */
    nameMiddle?: InputMaybe<Scalars['String']['input']>;
    /** pendingText */
    pendingText?: InputMaybe<Scalars['String']['input']>;
    /** phones */
    phones?: InputMaybe<Array<Scalars['String']['input']>>;
    /** default position profile in the list */
    position?: InputMaybe<Scalars['Float']['input']>;
    /** profile ID */
    profileID: Scalars['ID']['input'];
    /** profile ID */
    profileName: Scalars['String']['input'];
    /** profileNature */
    profileNature: ProfileNatureType;
    /** promptExamples */
    promptExamples?: InputMaybe<Array<Scalars['String']['input']>>;
    /** serviceSections */
    serviceSections?: InputMaybe<Array<Scalars['String']['input']>>;
    /** serviceSpecs */
    serviceSpecs?: InputMaybe<Array<Scalars['String']['input']>>;
    /** url. URLs of the item. */
    urls?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user ID */
    userID: Scalars['ID']['input'];
};
export type UpdateTagInputType = {
    /** tags completed */
    completed: Scalars['Int']['input'];
    /** tags count */
    count: Scalars['Int']['input'];
    /** tags created date */
    dateCreated: Scalars['Float']['input'];
    /** tags deleted date */
    dateDeactivated?: InputMaybe<Scalars['Float']['input']>;
    /** tags updated date */
    dateUpdated: Scalars['Float']['input'];
    /** isActive */
    isActive?: Scalars['Boolean']['input'];
    /** module IDs */
    moduleIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
    /** tags ID */
    tagID?: InputMaybe<Scalars['ID']['input']>;
    /** tags value */
    value: Scalars['String']['input'];
};
export type UpdateTemplatesInputType = {
    /** templates created date */
    dateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** templates deleted date */
    dateDeactivated?: InputMaybe<Scalars['Date']['input']>;
    /** templates updated date */
    dateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** templates ID */
    templatesID?: InputMaybe<Scalars['ID']['input']>;
};
export type UserIdDataAwsCognitoInputType = {
    /** AWS enum client_app */
    client_app: Scalars['String']['input'];
    /** AWS code from authorisation workflow */
    code?: InputMaybe<Scalars['String']['input']>;
    /** AWS redirect_uri */
    redirect_uri: Scalars['String']['input'];
    /** AWS refresh token from post-authorization workflow */
    refresh_token?: InputMaybe<Scalars['String']['input']>;
};
export type UserIdDataAwsCognitoType = {
    __typename?: 'UserIdDataAwsCognitoType';
    /** at hash */
    at_hash?: Maybe<Scalars['String']['output']>;
    /** The user pool app client that authenticated your user. Amazon Cognito renders the same value in the access token client_id claim */
    aud?: Maybe<Scalars['String']['output']>;
    /** The authentication time, in Unix time format, that your user completed authentication */
    auth_time?: Maybe<Scalars['Float']['output']>;
    /** An array of the names of user pool groups that have your user as a member */
    cognito_groups?: Maybe<Array<Scalars['String']['output']>>;
    /** The username of your user in your user pool */
    cognito_username?: Maybe<Scalars['String']['output']>;
    /** user's email */
    email?: Maybe<Scalars['String']['output']>;
    /** is email verified */
    email_verified?: Maybe<Scalars['Boolean']['output']>;
    /** The expiration time, in Unix time format, that your user's token expires */
    exp?: Maybe<Scalars['Float']['output']>;
    /** The issued-at time, in Unix time format, that Amazon Cognito issued your user's token */
    iat?: Maybe<Scalars['Float']['output']>;
    /** The identity provider that issued the token. The claim has the following format */
    iss?: Maybe<Scalars['String']['output']>;
    /** The unique identifier of the JWT */
    jti?: Maybe<Scalars['String']['output']>;
    /** message along with data */
    message: Scalars['String']['output'];
    /** A token-revocation identifier associated with your user's refresh token. Amazon Cognito references the origin_jti claim when it checks if you revoked your user's token with the Revoke endpoint or the RevokeToken API operation. When you revoke a token, Amazon Cognito invalidates all access and ID tokens with the same origin_jti value */
    origin_jti?: Maybe<Scalars['String']['output']>;
    /** preferred username */
    preferred_username?: Maybe<Scalars['String']['output']>;
    /** AWS refresh token from post-authorization workflow */
    refresh_token?: Maybe<Scalars['String']['output']>;
    /** A unique identifier (UUID), or subject, for the authenticated user. The username might not be unique in your user pool. The sub claim is the best way to identify a given user */
    sub?: Maybe<Scalars['ID']['output']>;
    /** The intended purpose of the token. In an ID token, its value is id */
    token_use?: Maybe<Scalars['String']['output']>;
};
export type UserInputType = {
    /** user first name */
    nameFirst?: InputMaybe<Scalars['String']['input']>;
    /** user last name */
    nameLast?: InputMaybe<Scalars['String']['input']>;
    /** user middle name */
    nameMiddle?: InputMaybe<Scalars['String']['input']>;
    /** user avatar */
    userAvatar?: InputMaybe<Scalars['String']['input']>;
    /** user year of birthday */
    userBirthYear?: InputMaybe<Scalars['Float']['input']>;
    /** user email */
    userEmail?: InputMaybe<Scalars['String']['input']>;
    /** user gender */
    userGender?: InputMaybe<Scalars['String']['input']>;
    /** user ID */
    userIdAuth?: InputMaybe<Scalars['ID']['input']>;
    /** user short information */
    userInfoAbout?: InputMaybe<Scalars['String']['input']>;
    /** user speaking languages */
    userLanguages?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user city location */
    userLocaleCity?: InputMaybe<Scalars['String']['input']>;
    /** user country location */
    userLocaleCountry?: InputMaybe<Scalars['String']['input']>;
    /** user login source */
    userLoginSource?: InputMaybe<Scalars['String']['input']>;
    /** user media */
    userMedia?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user accepted/ visible name as a result of registration */
    userName?: InputMaybe<Scalars['String']['input']>;
    /** user accepted/ visible name to display other people */
    userNameNick: Scalars['String']['input'];
    /** user telephone number */
    userPhone?: InputMaybe<Scalars['Float']['input']>;
    /** user roles to perform actions */
    userRoles?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user set of skills, expertises */
    userSkillsExpertise?: InputMaybe<Array<Scalars['String']['input']>>;
    /** user timezone */
    userTimeZone?: InputMaybe<Scalars['String']['input']>;
    /** user web site */
    userWebLink?: InputMaybe<Scalars['String']['input']>;
};
export type UserModelExtendedType = {
    __typename?: 'UserModelExtendedType';
    /** user first name */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    nameMiddle?: Maybe<Scalars['String']['output']>;
    responseMessage: ResponseMessageType;
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user updated date */
    userDateUpdated?: Maybe<Scalars['Date']['output']>;
    /** user email */
    userEmail?: Maybe<Scalars['String']['output']>;
    /** user gender */
    userGender?: Maybe<Scalars['String']['output']>;
    /** user ID */
    userIdAuth?: Maybe<Scalars['ID']['output']>;
    /** user ID */
    userIdProfile?: Maybe<Scalars['ID']['output']>;
    /** user short information */
    userInfoAbout?: Maybe<Scalars['String']['output']>;
    /** user speaking languages */
    userLanguages?: Maybe<Array<Scalars['String']['output']>>;
    /** user city location */
    userLocaleCity?: Maybe<Scalars['String']['output']>;
    /** user country location */
    userLocaleCountry?: Maybe<Scalars['String']['output']>;
    /** user timezone */
    userLoginSource?: Maybe<Scalars['String']['output']>;
    /** user media */
    userMedia?: Maybe<Array<Scalars['String']['output']>>;
    /** user accepted/ visible name as a result of registration */
    userName?: Maybe<Scalars['String']['output']>;
    /** user accepted/ visible name to display other people */
    userNameNick: Scalars['String']['output'];
    /** user telephone number */
    userPhone?: Maybe<Scalars['Float']['output']>;
    /** user roles to perform actions */
    userRoles?: Maybe<Array<Scalars['String']['output']>>;
    /** user set of skills, expertises */
    userSkillsExpertise?: Maybe<Array<Scalars['String']['output']>>;
    /** user timezone */
    userTimeZone?: Maybe<Scalars['String']['output']>;
    /** user web site */
    userWebLink?: Maybe<Scalars['String']['output']>;
    /** user deleted date */
    userdateDeactivated?: Maybe<Scalars['Date']['output']>;
};
export type UserType = {
    __typename?: 'UserType';
    /** user first name */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    nameMiddle?: Maybe<Scalars['String']['output']>;
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user updated date */
    userDateUpdated?: Maybe<Scalars['Date']['output']>;
    /** user email */
    userEmail?: Maybe<Scalars['String']['output']>;
    /** user gender */
    userGender?: Maybe<Scalars['String']['output']>;
    /** user ID */
    userIdAuth?: Maybe<Scalars['ID']['output']>;
    /** user ID */
    userIdProfile?: Maybe<Scalars['ID']['output']>;
    /** user short information */
    userInfoAbout?: Maybe<Scalars['String']['output']>;
    /** user speaking languages */
    userLanguages?: Maybe<Array<Scalars['String']['output']>>;
    /** user city location */
    userLocaleCity?: Maybe<Scalars['String']['output']>;
    /** user country location */
    userLocaleCountry?: Maybe<Scalars['String']['output']>;
    /** user timezone */
    userLoginSource?: Maybe<Scalars['String']['output']>;
    /** user media */
    userMedia?: Maybe<Array<Scalars['String']['output']>>;
    /** user accepted/ visible name as a result of registration */
    userName?: Maybe<Scalars['String']['output']>;
    /** user accepted/ visible name to display other people */
    userNameNick: Scalars['String']['output'];
    /** user telephone number */
    userPhone?: Maybe<Scalars['Float']['output']>;
    /** user roles to perform actions */
    userRoles?: Maybe<Array<Scalars['String']['output']>>;
    /** user set of skills, expertises */
    userSkillsExpertise?: Maybe<Array<Scalars['String']['output']>>;
    /** user timezone */
    userTimeZone?: Maybe<Scalars['String']['output']>;
    /** user web site */
    userWebLink?: Maybe<Scalars['String']['output']>;
    /** user deleted date */
    userdateDeactivated?: Maybe<Scalars['Date']['output']>;
};
export type UsersType = {
    __typename?: 'UsersType';
    responseMessage: ResponseMessageType;
    users: Array<UserType>;
};

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
export type AvatarSizeType = {
    __typename?: 'AvatarSizeType';
    /** height */
    height?: Maybe<Scalars['Float']['output']>;
    /** width */
    width?: Maybe<Scalars['Float']['output']>;
};
export type ChoiceType = {
    __typename?: 'ChoiceType';
    finish_reason: Scalars['String']['output'];
    index: Scalars['Int']['output'];
    message: MessageChoiceType;
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
    /** contentType */
    contentType: CompetencyContentType;
    /** iconLibrary */
    iconLibrary?: Maybe<Scalars['String']['output']>;
    /** iconName */
    iconName?: Maybe<Scalars['String']['output']>;
    /** competency ID */
    idCompetency: Scalars['ID']['output'];
    /** profile ID */
    idProfile: Scalars['ID']['output'];
    /** linkHref */
    linkHref?: Maybe<Scalars['String']['output']>;
    /** section */
    section?: Maybe<Scalars['String']['output']>;
    /** title */
    title?: Maybe<Scalars['String']['output']>;
    /** tooltips */
    tooltips?: Maybe<Scalars['String']['output']>;
};
export type CompetencyTagsInputType = {
    /** competencyTags created date */
    competencyTagsDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags deleted date */
    competencyTagsDateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags updated date */
    competencyTagsDateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** competencyTags ID */
    idCompetencyTags?: InputMaybe<Scalars['ID']['input']>;
};
export type CompetencyTagsParamsReadType = {
    /** first item */
    idProfile?: InputMaybe<Scalars['String']['input']>;
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
    dateDeleted?: Maybe<Scalars['Float']['output']>;
    /** courses updated date */
    dateUpdated: Scalars['Float']['output'];
    /** course description */
    description: Scalars['String']['output'];
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** language code */
    language: Scalars['String']['output'];
    /** courses meta information */
    meta?: Maybe<MetaType>;
    /** courses modules */
    modules?: Maybe<Array<ModuleType>>;
    /** courses passRate */
    passRate?: Maybe<Scalars['Float']['output']>;
    /** courses questionNumber */
    questionNumber: Scalars['Int']['output'];
};
export type CoursesConnectionType = {
    __typename?: 'CoursesConnectionType';
    /** [CoursesEdgeType] */
    edges?: Maybe<Array<CourseEdgeType>>;
    /** CoursesPageInfoType */
    pageInfo?: Maybe<CoursesPageInfoType>;
};
export type CoursesInputType = {
    /** courses created date */
    coursesDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** courses deleted date */
    coursesDateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** courses updated date */
    coursesDateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** courses ID */
    idCourses?: InputMaybe<Scalars['ID']['input']>;
};
export type CoursesPageInfoType = {
    __typename?: 'CoursesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type CreateDocumentInputType = {
    capture: Scalars['String']['input'];
    contentIDs: Array<Scalars['String']['input']>;
    courseID: Scalars['ID']['input'];
    description?: InputMaybe<Scalars['String']['input']>;
    lang: Scalars['String']['input'];
    meta: MetaInputType;
    moduleIDs: Array<Scalars['String']['input']>;
    userName: UserNameInputType;
};
export type DocumentType = {
    __typename?: 'DocumentType';
    capture: Scalars['String']['output'];
    contentIDs: Array<Scalars['String']['output']>;
    courseID: Scalars['ID']['output'];
    creationDate: Scalars['Date']['output'];
    description?: Maybe<Scalars['String']['output']>;
    documentID: Scalars['ID']['output'];
    ip: Scalars['String']['output'];
    lang: Scalars['String']['output'];
    meta: MetaObjectType;
    moduleIDs: Array<Scalars['String']['output']>;
    pathName: Scalars['String']['output'];
    userName: UserNameObjectType;
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
export type MessengerType = {
    __typename?: 'MessengerType';
    /** name */
    name?: Maybe<Scalars['String']['output']>;
    /** profileName */
    profileName?: Maybe<Scalars['String']['output']>;
};
export type MetaInputType = {
    email: Scalars['String']['input'];
    institution: Scalars['String']['input'];
    isSendingBcc: Scalars['Boolean']['input'];
    specName: Scalars['String']['input'];
    specTitle: Scalars['String']['input'];
};
export type MetaObjectType = {
    __typename?: 'MetaObjectType';
    email: Scalars['String']['output'];
    institution: Scalars['String']['output'];
    isSendingBcc: Scalars['Boolean']['output'];
    specName: Scalars['String']['output'];
    specTitle: Scalars['String']['output'];
};
export type MetaType = {
    __typename?: 'MetaType';
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
};
export type ModuleType = {
    __typename?: 'ModuleType';
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
    /** course module questions */
    questions: Array<QuestionType>;
};
export type Mutation = {
    __typename?: 'Mutation';
    addRecipe: RecipeType;
    createCompetencyTags: Array<CompetencyTagType>;
    createCourses: Array<CourseType>;
    createDocument: DocumentType;
    createProfiles: Array<ProfileType>;
    createTemplates: Array<TemplatesType>;
    createUser: UserModelExtendedType;
    deleteCompetencyTags: Array<CompetencyTagType>;
    deleteCourses: Array<CourseType>;
    deleteProfiles: Array<ProfileType>;
    deleteTemplates: Array<TemplatesType>;
    deleteUser: UserModelExtendedType;
    removeDocument: Scalars['Boolean']['output'];
    removeRecipe: Scalars['Boolean']['output'];
    updateCompetencyTags: Array<CompetencyTagType>;
    updateCourses: Array<CourseType>;
    updateProfiles: Array<ProfileType>;
    updateTemplates: Array<TemplatesType>;
    updateUser: UserModelExtendedType;
};
export type MutationAddRecipeArgs = {
    newRecipeData: NewRecipeInputType;
};
export type MutationCreateCompetencyTagsArgs = {
    competencyTagsInput: CompetencyTagsInputType;
};
export type MutationCreateCoursesArgs = {
    coursesInput: CoursesInputType;
};
export type MutationCreateDocumentArgs = {
    createDocumentInput: CreateDocumentInputType;
};
export type MutationCreateProfilesArgs = {
    profilesInput: ProfilesInputType;
};
export type MutationCreateTemplatesArgs = {
    templatesInput: TemplatesInputType;
};
export type MutationCreateUserArgs = {
    userInputType: UserInputType;
};
export type MutationDeleteCompetencyTagsArgs = {
    idCompetencyTags: Scalars['String']['input'];
};
export type MutationDeleteCoursesArgs = {
    courseID: Scalars['String']['input'];
};
export type MutationDeleteProfilesArgs = {
    idProfiles: Scalars['String']['input'];
};
export type MutationDeleteTemplatesArgs = {
    idTemplates: Scalars['String']['input'];
};
export type MutationDeleteUserArgs = {
    userIdAuth: Scalars['String']['input'];
    userIdProfile: Scalars['String']['input'];
};
export type MutationRemoveDocumentArgs = {
    id: Scalars['String']['input'];
};
export type MutationRemoveRecipeArgs = {
    id: Scalars['String']['input'];
};
export type MutationUpdateCompetencyTagsArgs = {
    competencyTagsInput: CompetencyTagsInputType;
};
export type MutationUpdateCoursesArgs = {
    coursesInput: CoursesInputType;
};
export type MutationUpdateProfilesArgs = {
    profilesInput: ProfilesInputType;
};
export type MutationUpdateTemplatesArgs = {
    templatesInput: TemplatesInputType;
};
export type MutationUpdateUserArgs = {
    userInputType2: UserInputType;
};
export type NewRecipeInputType = {
    description?: InputMaybe<Scalars['String']['input']>;
    ingredients: Array<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};
export type OptionType = {
    __typename?: 'OptionType';
    /** course module question option label */
    label: Scalars['String']['output'];
    /** courses module question option ID */
    optionID?: Maybe<Scalars['ID']['output']>;
    /** course module question option status: true or false */
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
    /** avatarSrc */
    avatarSize?: Maybe<AvatarSizeType>;
    /** avatarSrc */
    avatarSrc?: Maybe<Scalars['String']['output']>;
    /** contacts */
    contacts?: Maybe<Array<Scalars['String']['output']>>;
    /** disclaimer */
    disclaimer?: Maybe<Scalars['String']['output']>;
    /** emails */
    emails?: Maybe<Array<Scalars['String']['output']>>;
    /** help */
    help?: Maybe<Scalars['String']['output']>;
    /** profile ID */
    idProfile: Scalars['ID']['output'];
    /** socket ID */
    idSocket?: Maybe<Scalars['ID']['output']>;
    /** user ID */
    idUser: Scalars['ID']['output'];
    /** imagePendingSrc */
    imagePendingSrc?: Maybe<Scalars['String']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
    /** locations */
    locations?: Maybe<Array<Scalars['String']['output']>>;
    /** messengers */
    messengers?: Maybe<Array<MessengerType>>;
    /** nameFirst */
    nameFirst?: Maybe<Scalars['String']['output']>;
    /** nameLast */
    nameLast?: Maybe<Scalars['String']['output']>;
    /** pendingText */
    pendingText?: Maybe<Scalars['String']['output']>;
    /** phones */
    phones?: Maybe<Array<Scalars['String']['output']>>;
    /** default position profile in the list */
    position?: Maybe<Scalars['Float']['output']>;
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
    /** summary */
    summary?: Maybe<Scalars['String']['output']>;
};
export type ProfilesConnectionType = {
    __typename?: 'ProfilesConnectionType';
    /** [ProfileEdgeType] */
    edges?: Maybe<Array<ProfileEdgeType>>;
    /** ProfilesPageInfoType */
    pageInfo?: Maybe<ProfilesPageInfoType>;
};
export type ProfilesInputType = {
    /** profiles ID */
    idProfiles?: InputMaybe<Scalars['ID']['input']>;
    /** profiles created date */
    profilesDateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** profiles deleted date */
    profilesDateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** profiles updated date */
    profilesDateUpdated?: InputMaybe<Scalars['Date']['input']>;
};
export type ProfilesPageInfoType = {
    __typename?: 'ProfilesPageInfoType';
    /** endCursor */
    endCursor?: Maybe<Scalars['String']['output']>;
    /** hasNextPage */
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};
export type Query = {
    __typename?: 'Query';
    findAllDocuments: Array<DocumentType>;
    findDocument: DocumentType;
    getAuthAwsCognitoUserData: UserIdDataAwsCognitoType;
    getAuthAwsCognitoUserRefreshed: UserIdDataAwsCognitoType;
    getAuthAwsCognitoUserRevoked: UserIdDataAwsCognitoType;
    getImagesOpenAi: ImagesOpenAiType;
    getMessageAssistant: MessageAssistantType;
    readCompetencyTags: Array<CompetencyTagType>;
    readCourse: CourseType;
    readCourses: Array<CourseType>;
    readCoursesConnection: CoursesConnectionType;
    readModule: ModuleType;
    readProfiles: Array<ProfileType>;
    readProfilesConnection: ProfilesConnectionType;
    readTemplate: TemplatesType;
    readTemplates: Array<TemplatesType>;
    readTemplatesConnection: TemplatesConnectionType;
    readUserAuth: UserModelExtendedType;
    readUserProfile: UserModelExtendedType;
    readUsers: UsersType;
    recipe: RecipeType;
    recipes: Array<RecipeType>;
    sendEmailDocument: DocumentType;
};
export type QueryFindAllDocumentsArgs = {
    skip?: Scalars['Int']['input'];
    take?: Scalars['Int']['input'];
};
export type QueryFindDocumentArgs = {
    documentID: Scalars['String']['input'];
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
export type QueryReadCompetencyTagsArgs = {
    params: CompetencyTagsParamsReadType;
};
export type QueryReadCourseArgs = {
    readCourseInput: ReadCourseInputType;
};
export type QueryReadCoursesConnectionArgs = {
    readCoursesConnectionInput: ReadCoursesConnectionInputType;
};
export type QueryReadModuleArgs = {
    moduleID: Scalars['String']['input'];
};
export type QueryReadProfilesConnectionArgs = {
    readProfilesConnectionInput: ReadProfilesConnectionInputType;
};
export type QueryReadTemplateArgs = {
    idTemplates: Scalars['String']['input'];
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
export type QueryRecipeArgs = {
    id: Scalars['String']['input'];
};
export type QueryRecipesArgs = {
    skip?: Scalars['Int']['input'];
    take?: Scalars['Int']['input'];
};
export type QuerySendEmailDocumentArgs = {
    documentID: Scalars['String']['input'];
    sendBcc: Scalars['String']['input'];
    sendCc: Scalars['String']['input'];
    sendTo: Scalars['String']['input'];
};
export type QuestionType = {
    __typename?: 'QuestionType';
    /** course module question capture */
    capture: Scalars['String']['output'];
    /** course module question designType */
    designType?: Maybe<Scalars['String']['output']>;
    /** course module question isActive */
    isActive: Scalars['Boolean']['output'];
    /** designType > multi */
    multi?: Maybe<Scalars['Boolean']['output']>;
    /** course module question options */
    options: Array<OptionType>;
    /** courses module question ID */
    questionID?: Maybe<Scalars['ID']['output']>;
    /** course module question topic */
    topic?: Maybe<Scalars['String']['output']>;
};
export type ReadCourseInputType = {
    /** course ID */
    courseID?: InputMaybe<Scalars['ID']['input']>;
    /** module ID */
    moduleID?: InputMaybe<Scalars['ID']['input']>;
};
export type ReadCoursesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type ReadProfilesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type ReadTemplatesConnectionInputType = {
    /** after */
    after?: InputMaybe<Scalars['String']['input']>;
    /** first */
    first?: InputMaybe<Scalars['Int']['input']>;
    /** offset */
    offset?: InputMaybe<Scalars['Int']['input']>;
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
export type Subscription = {
    __typename?: 'Subscription';
    documentAdded: DocumentType;
    recipeAdded: RecipeType;
};
export type TemplatesConnectionType = {
    __typename?: 'TemplatesConnectionType';
    /** [TemplatesEdgeType] */
    edges?: Maybe<Array<TemplatesEdgeType>>;
    /** TemplatesPageInfoType */
    pageInfo?: Maybe<TemplatesPageInfoType>;
};
export type TemplatesEdgeType = {
    __typename?: 'TemplatesEdgeType';
    /** cursor */
    cursor?: Maybe<Scalars['String']['output']>;
    /** TemplatesEdgeType */
    node?: Maybe<TemplatesType>;
};
export type TemplatesInputType = {
    /** templates created date */
    dateCreated?: InputMaybe<Scalars['Date']['input']>;
    /** templates deleted date */
    dateDeleted?: InputMaybe<Scalars['Date']['input']>;
    /** templates updated date */
    dateUpdated?: InputMaybe<Scalars['Date']['input']>;
    /** templates ID */
    idTemplates?: InputMaybe<Scalars['ID']['input']>;
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
    dateCreated?: Maybe<Scalars['Date']['output']>;
    /** templates deleted date */
    dateDeleted?: Maybe<Scalars['Date']['output']>;
    /** templates updated date */
    dateUpdated?: Maybe<Scalars['Date']['output']>;
    /** templates ID */
    idTemplates?: Maybe<Scalars['ID']['output']>;
    /** isActive */
    isActive: Scalars['Boolean']['output'];
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
    /** user first name */
    userNameFirst?: InputMaybe<Scalars['String']['input']>;
    /** user last name */
    userNameLast?: InputMaybe<Scalars['String']['input']>;
    /** user middle name */
    userNameMiddle?: InputMaybe<Scalars['String']['input']>;
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
    responseMessage: ResponseMessageType;
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user deleted date */
    userDateDeleted?: Maybe<Scalars['Date']['output']>;
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
    /** user first name */
    userNameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    userNameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    userNameMiddle?: Maybe<Scalars['String']['output']>;
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
};
export type UserNameInputType = {
    firstName: Scalars['String']['input'];
    lastName: Scalars['String']['input'];
    middleName: Scalars['String']['input'];
};
export type UserNameObjectType = {
    __typename?: 'UserNameObjectType';
    firstName: Scalars['String']['output'];
    lastName: Scalars['String']['output'];
    middleName: Scalars['String']['output'];
};
export type UserType = {
    __typename?: 'UserType';
    /** user avatar */
    userAvatar?: Maybe<Scalars['String']['output']>;
    /** user year of birthday */
    userBirthYear?: Maybe<Scalars['Float']['output']>;
    /** user created date */
    userDateCreated?: Maybe<Scalars['Date']['output']>;
    /** user deleted date */
    userDateDeleted?: Maybe<Scalars['Date']['output']>;
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
    /** user first name */
    userNameFirst?: Maybe<Scalars['String']['output']>;
    /** user last name */
    userNameLast?: Maybe<Scalars['String']['output']>;
    /** user middle name */
    userNameMiddle?: Maybe<Scalars['String']['output']>;
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
};
export type UsersType = {
    __typename?: 'UsersType';
    responseMessage: ResponseMessageType;
    users: Array<UserType>;
};

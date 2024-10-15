import { ScreensEnumType } from 'yourails_common'

export const SCREENS_DICT: Record<ScreensEnumType, { placeholder: string; storeFormProp: string }> =
  {
    AcademyMatrix: { placeholder: 'Search modules...', storeFormProp: 'modulesSearch' },
    AcademyPresent: { placeholder: '', storeFormProp: '' },
    ArticlePresent: { placeholder: '', storeFormProp: '' },
    ModulesPresent: { placeholder: 'Search modules...', storeFormProp: 'modulesSearch' },
    MyDocuments: { placeholder: 'Search documents...', storeFormProp: 'documentsSearch' },
    MyModules: { placeholder: 'Search my modules...', storeFormProp: 'modulesSearch' },
    Profiles: { placeholder: '', storeFormProp: '' },
    TagsCloud: { placeholder: 'Search tags...', storeFormProp: 'tagsSearch' },
    Certificate: { placeholder: '', storeFormProp: '' },
    Certificate2: { placeholder: '', storeFormProp: '' },
    Error404: { placeholder: '', storeFormProp: '' },
  }

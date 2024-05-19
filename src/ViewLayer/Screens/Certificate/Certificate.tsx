import { useParams } from 'react-router-dom'
import React, { useEffect, ReactElement } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { getDateString } from '../../../Shared/getDateString'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { DocumentType } from '../../../@types/index'
import { getSlug } from '../../../Shared/getSlug'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { LoaderOverlayYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import {
  CertificateBodyComponentProps,
  CertificateComponentPropsType,
  CertificateComponentType,
  CertificatePropsOutType,
  CertificateType,
} from './CertificateTypes'

const CertificateBodyComponent: React.FC<CertificateBodyComponentProps> = ({
  documentFound,
  language,
}: CertificateBodyComponentProps) => {
  const {
    documentID,
    dateCreated,
    module: { moduleID, capture: moduleCapture, language: languageDoc },
    creator: {
      affiliation,
      jobTitle,
      nameFirst: nameFirstCreator,
      nameLast: nameLastCreator,
      nameMiddle: nameMiddleCreator,
    },
    learner: {
      nameFirst: nameFirstLearner,
      nameLast: nameLastLearner,
      nameMiddle: nameMiddleLearner,
    },
  } = documentFound

  const screenType = ScreensEnumType['Certificate']
  const documentSlug = getSlug(moduleCapture)
  const documentPathName = `/d/${documentID}/${documentSlug}`

  useEffect(() => {
    handleEvents({}, { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } })
  }, [])

  const dateStyle = language === 'en' ? 'US' : language === 'ru' ? 'EU' : 'EU'

  const dateCreatedReadable = getDateString({
    timestamp: dateCreated,
    style: dateStyle,
    hours: false,
    minutes: false,
    seconds: false,
  })

  const dateMilitaty = getDateString({
    timestamp: dateCreated,
    style: 'military',
    hours: false,
    minutes: false,
    seconds: false,
  })

  const userNameCreator = nameMiddleCreator
    ? `${nameFirstCreator} ${nameMiddleCreator} ${nameLastCreator}`
    : `${nameFirstCreator} ${nameLastCreator}`

  const userNameLearner = nameMiddleLearner
    ? `${nameFirstLearner} ${nameMiddleLearner} ${nameLastLearner}`
    : `${nameFirstLearner} ${nameLastLearner}`

  const moduleSlug = getSlug(moduleCapture)
  const modulePathName = `/m/${moduleID}/${moduleSlug}`
  const titlePage = `${dateMilitaty}-certificate-${moduleID}-${moduleSlug}`

  const propsOut: CertificatePropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      moduleCapture: moduleCapture,
      documentID,
      moduleID,
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: false,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: true,
      isPageActionsGroup: true,
      isButtonsShare: true,
    },
  }

  return (
    <div className='Certificate' id={documentID}>
      <Helmet>
        <html lang={languageDoc} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>{titlePage}</title>
        <link rel='canonical' href={location.href} />
        <meta name='description' content={moduleCapture} />
      </Helmet>
      <div className='_buttons Certificate_noPrint'>
        <HeaderFrame {...propsOut.headerFrameProps} />
      </div>

      <div className='container pm-certificate-container'>
        <div className='outer-border'></div>
        <div className='inner-border'></div>

        <div className='pm-certificate-border'>
          <div className='pm-certificate-header'>
            <div className='pm-certificate-title cursive'>
              <h4>{affiliation}</h4>
              <h2>Certificate of Completion</h2>
            </div>
          </div>

          <div className='pm-certificate-body'>
            <div className='pm-certificate-block'>
              <div className=''>
                <div className=''>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='pm-certificate-name underline margin-0'>
                    <span className='pm-name-text bold'>{userNameLearner}</span>
                  </div>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                </div>
              </div>

              <div className=''>
                <div className=''>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='pm-earned'>
                    <span className='pm-earned-text padding-0 block cursive'>has earned</span>
                    <span className='pm-credits-text block bold sans'>1.0 Credit Hours</span>
                  </div>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className=''></div>
                </div>
              </div>

              <div className=''>
                <div className=''>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='pm-course-title'>
                    <span className='pm-earned-text block cursive'>
                      while completing the training module entitled
                    </span>
                  </div>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                </div>
              </div>

              <div className=''>
                <div className=''>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='pm-course-title underline'>
                    <span className='pm-credits-text block bold sans'>{moduleCapture}</span>
                  </div>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='_code'>
                    <span className='_module'>
                      Module link/ No
                      <a className='_moduleLink' href={modulePathName} target='_blank'>
                        {moduleID}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <div className='pm-certificate-footer'>
                  <div className='pm-certified'>
                    <div className='pm-stamp'></div>
                    <span className='pm-credits-text block sans'>"Open Internet Academy"</span>
                    <span className='pm-credits-text block sans'>
                      in partnership with "YouRails.com"
                    </span>
                    <span className='pm-empty-space block underline'></span>
                    <span className='pm-credits-text bold block sans'>
                      {userNameCreator}, {jobTitle}
                    </span>
                  </div>
                  <div className=''>{/* <!-- LEAVE EMPTY --> */}</div>
                  <div className='pm-certified'>
                    <div className='_documentData'>
                      <span className='_completed'>Completed {dateCreatedReadable}</span>
                      <span className='_certificate'>
                        Certificate link/ No
                        <a className='_documentLink' href={documentPathName} target='_blank'>
                          {documentID}
                        </a>
                      </span>
                    </div>
                    {/* <div className='_documentLink'>
                      <span className='_link'>Link {documentLink}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoaderOverlayYrl />
    </div>
  )
}

export const CertificateComponent: CertificateComponentType = (
  props: CertificateComponentPropsType
): ReactElement => {
  const {
    storeStateSlice: { documents, language },
  } = props

  const params = useParams()
  const documentID = params?.documentID

  const documentFound = documents.find(
    (document: DocumentType) => document.documentID === documentID
  )

  useEffect(() => {
    handleEvents({}, { type: 'SET_SCREEN_ACTIVE', data: { screenActive: 'Certificate' } })
    handleEvents({}, { typeEvent: 'CLOSE_MODAL_GET_SCORES' })
    if (Array.isArray(documents) && !documentFound) {
      handleEvents({}, { typeEvent: 'FIND_DOCUMENT', data: documentID })
    }
  }, [])

  const propsOut: Record<string, any> = {
    certificateBodyComponentProps: {
      documentFound,
      language,
    },
  }

  // TODO: to refactor using MainFrame
  return (
    <div className='Certificate' id={documentID}>
      {documentFound ? (
        <CertificateBodyComponent {...propsOut.certificateBodyComponentProps} />
      ) : null}
      <LoaderOverlayYrl />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'documents', 'language']
export const Certificate: CertificateType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(CertificateComponent)
)

// export const Certificate: React.ComponentClass<any> = withRouter(
//   CertificateOrigin
// )

// Basic example how styled-componemts work
const StyledSection = styled.section`
  .Certificate {
    text-align: center;

    .cursive {
      font-family: 'Pinyon Script', cursive;
    }

    .sans {
      font-family: 'Open Sans', sans-serif;
    }

    .bold {
      font-weight: bold;
    }

    .block {
      display: block;
    }

    .underline {
      border-bottom: 1px solid #777;
      padding: 5px;
      margin-bottom: 15px;
    }

    .margin-0 {
      margin: 0;
    }

    .padding-0 {
      padding: 0;
    }

    .pm-empty-space {
      height: 40px;
      width: 100%;
    }

    body {
      padding: 20px 0;
      background: #ccc;
    }

    .pm-certificate-container {
      position: relative;
      width: 800px;
      height: 600px;
      background-color: #618597;
      padding: 30px;
      color: #333;
      font-family: 'Open Sans', sans-serif;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      background: -webkit-repeating-linear-gradient(
        45deg,
        #618597,
        #618597 1px,
        #b2cad6 1px,
        #b2cad6 2px
      );
      background: repeating-linear-gradient(90deg, #618597, #618597 1px, #b2cad6 1px, #b2cad6 2px);

      .outer-border {
        width: 794px;
        height: 594px;
        position: absolute;
        left: 50%;
        margin-left: -397px;
        top: 50%;
        margin-top: -297px;
        border: 2px solid #fff;
      }

      .inner-border {
        width: 730px;
        height: 530px;
        position: absolute;
        left: 50%;
        margin-left: -365px;
        top: 50%;
        margin-top: -265px;
        border: 2px solid #fff;
      }

      .pm-certificate-border {
        position: relative;
        width: 720px;
        height: 520px;
        padding: 0;
        border: 1px solid #e1e5f0;
        background-color: rgba(255, 255, 255, 1);
        background-image: none;
        left: 50%;
        margin-left: -360px;
        top: 50%;
        margin-top: -260px;

        .pm-certificate-block {
          width: 650px;
          height: 200px;
          position: relative;
          left: 50%;
          margin-left: -325px;
          top: 70px;
          margin-top: 0;
        }

        .pm-certificate-header {
          margin-bottom: 10px;
        }

        .pm-certificate-title {
          position: relative;
          top: 40px;

          h2 {
            font-family: 'Pinyon Script', cursive;
            font-size: 34px !important;
          }
        }

        .pm-certificate-body {
          padding: 20px;

          .pm-name-text {
            font-size: 20px;
          }
        }

        .pm-earned {
          margin: 15px 0 20px;
          .pm-earned-text {
            font-size: 20px;
          }
          .pm-credits-text {
            font-size: 15px;
          }
        }

        .pm-course-title {
          .pm-earned-text {
            font-size: 20px;
          }
          .pm-credits-text {
            font-size: 15px;
          }
        }

        .pm-certified {
          font-size: 12px;

          .underline {
            margin-bottom: 5px;
          }
        }

        .pm-certificate-footer {
          width: 650px;
          height: 100px;
          position: relative;
          left: 50%;
          margin-left: -325px;
          bottom: -105px;
        }
      }
    }
  }
`

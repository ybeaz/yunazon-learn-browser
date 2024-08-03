import React from 'react'
import { Collapse } from 'antd'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/'
import {
  MyDocumentsBodyComponentPropsType,
  MyDocumentsBodyPropsType,
  MyDocumentsBodyPropsOutType,
  MyDocumentsBodyComponentType,
  MyDocumentsBodyType,
} from './MyDocumentsBodyTypes'
import { CreditsTable } from '../CreditsTable/CreditsTable'

/**
 * @description Component to render MyDocumentsBody
 * @import import { MyDocumentsBody, MyDocumentsBodyPropsType, MyDocumentsBodyPropsOutType, MyDocumentsBodyType } 
             from '../Components/MyDocumentsBody/MyDocumentsBody'
 */
const MyDocumentsBodyComponent: MyDocumentsBodyComponentType = (
  props: MyDocumentsBodyComponentPropsType
) => {
  const { classAdded, documents, tagsCloud, pageDocuments, pageTags, language } = props

  const propsOut = {
    creditsTableProps: {
      documents,
      pageDocuments,
      language,
    },
  }

  console.info('MyDocumentsBody [152]', { tagsCloud, pageDocuments, pageTags })

  return (
    <div className={getClasses('MyDocumentsBody', classAdded)}>
      {!!tagsCloud.length && (
        <Collapse
          className='_credits'
          collapsible='icon'
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: <h2 className='_h2'>{DICTIONARY.Certificates_and_diplomas[language]}</h2>,
              children: <CreditsTable {...propsOut.creditsTableProps} />,
            },
          ]}
        />
      )}
      {!!documents.length && (
        <Collapse
          className='_credits'
          collapsible='icon'
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: <h2 className='_h2'>{DICTIONARY.Credits[language]}</h2>,
              children: <CreditsTable {...propsOut.creditsTableProps} />,
            },
          ]}
        />
      )}
    </div>
  )
}

export const MyDocumentsBody = React.memo(MyDocumentsBodyComponent)

export type {
  MyDocumentsBodyPropsType,
  MyDocumentsBodyPropsOutType,
  MyDocumentsBodyComponentType,
  MyDocumentsBodyType,
}

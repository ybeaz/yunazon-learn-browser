import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import {
  ButtonYrl,
  IButtonArgs,
} from '../ComponentsLibrary/ButtonYrl/ButtonYrl'

interface InstallMobileAppGroupArgs {}

export const InstallMobileAppGroup: React.FunctionComponent<
  InstallMobileAppGroupArgs
> = (props: InstallMobileAppGroupArgs): ReactElement => {
  const navigate = useNavigate()

  const { language } = useSelector((store2: RootStoreType) => store2)

  const buttonSiAppstoreProps: IButtonArgs = {
    icon: 'SiAppstore',
    icon2: null,
    classAdded: 'Button_SiAppstore',
    tooltipText: 'Install ...',
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
      data: { history: navigate, path: '/see-you', source: 'installAppStore' },
    } as ActionReduxType,
  }

  const buttonSiGoogleplayProps: IButtonArgs = {
    icon: 'SiGoogleplay',
    icon2: null,
    classAdded: 'Button_SiGoogleplay',
    tooltipText: 'Install ...',
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
      data: {
        history: navigate,
        path: '/see-you',
        source: 'installGooglePlay',
      },
    } as ActionReduxType,
  }

  return (
    <div className='InstallMobileAppGroup'>
      <ButtonYrl {...buttonSiAppstoreProps} />
      <ButtonYrl {...buttonSiGoogleplayProps} />
    </div>
  )
}

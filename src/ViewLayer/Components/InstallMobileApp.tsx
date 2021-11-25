import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { IAction } from '../../Interfaces/IAction'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Button, ButtonArgs } from './Button'

interface InstallMobileAppArgs {}

export const InstallMobileApp: React.FunctionComponent<InstallMobileAppArgs> = (
  props: InstallMobileAppArgs
): ReactElement => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const buttonSiAppstoreProps: ButtonArgs = {
    icon: 'SiAppstore',
    icon2: null,
    classAdded: 'Button_SiAppstore',
    tooltipText: 'Install ...',
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
      data: { history, path: '/goodbye' },
    } as IAction,
  }

  const buttonSiGoogleplayProps: ButtonArgs = {
    icon: 'SiGoogleplay',
    icon2: null,
    classAdded: 'Button_SiGoogleplay',
    tooltipText: 'Install ...',
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
      data: { history, path: '/goodbye' },
    } as IAction,
  }

  return (
    <div className='InstallMobileApp'>
      <Button {...buttonSiAppstoreProps} />
      <Button {...buttonSiGoogleplayProps} />
    </div>
  )
}

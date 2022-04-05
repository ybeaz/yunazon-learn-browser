import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { IAction } from '../../Interfaces/IAction'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Button, IButtonArgs } from '../ComponentsLibrary/Button'

interface InstallMobileAppGroupArgs {}

export const InstallMobileAppGroup: React.FunctionComponent<
  InstallMobileAppGroupArgs
> = (props: InstallMobileAppGroupArgs): ReactElement => {
  const history = useHistory()

  const { language } = useSelector((store2: IRootStore) => store2)

  const buttonSiAppstoreProps: IButtonArgs = {
    icon: 'SiAppstore',
    icon2: null,
    classAdded: 'Button_SiAppstore',
    tooltipText: 'Install ...',
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
      data: { history, path: '/see-you', source: 'installAppStore' },
    } as IAction,
  }

  const buttonSiGoogleplayProps: IButtonArgs = {
    icon: 'SiGoogleplay',
    icon2: null,
    classAdded: 'Button_SiGoogleplay',
    tooltipText: 'Install ...',
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
      data: { history, path: '/see-you', source: 'installGooglePlay' },
    } as IAction,
  }

  return (
    <div className='InstallMobileAppGroup'>
      <Button {...buttonSiAppstoreProps} />
      <Button {...buttonSiGoogleplayProps} />
    </div>
  )
}

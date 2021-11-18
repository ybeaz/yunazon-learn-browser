import React from 'react'

interface BackgroundImageArgs {
  classAdded: string
  children: React.ReactElement
}

export const BackgroundImage: React.FunctionComponent<BackgroundImageArgs> = (
  props: BackgroundImageArgs
): JSX.Element => {
  const { classAdded } = props

  return <div className={`BackgroundImage ${classAdded}`}>{props.children}</div>
}

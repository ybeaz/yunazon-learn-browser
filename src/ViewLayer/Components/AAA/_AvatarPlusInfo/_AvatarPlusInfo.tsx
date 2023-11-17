// @ts-nocheck

import React from 'react'
import { View } from 'react-native'

import { AvatarPlusInfoType } from './AvatarPlusInfoType'
import { style } from './AvatarPlusInfoStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary'
import { ButtonYrl } from '../../../YrlNativeViewLibrary'
import { AbInCircle } from '../AbInCircle/AbInCircle'

/**
 * @import import { AvatarPlusInfo } from '../Components/AvatarPlusInfo/AvatarPlusInfo'
 * @propsOut
    avatarPlusInfoProps: {
      profile,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
      onPress: () => {}
      testID: 'testID'
    },
 */
const AvatarPlusInfoComponent: AvatarPlusInfoType = props => {
  const {
    styleProps = { AvatarPlusInfo: {}, viewStyle: {}, avatar: {} },
    onPress = () => {},
    profile,
    isImageAvatar = true,
    children,
    testID,
  } = props
  const { avatarSrc = '', avatarSize, nameFirst, nameLast } = profile

  const initials = `${(nameFirst && nameFirst[0]) || 'A'}${
    (nameLast && nameLast[0]) || 'Z'
  }`

  let width = undefined
  let height = undefined
  if (avatarSize) {
    width = avatarSize?.width ? avatarSize?.width : 45
    height = avatarSize?.height ? avatarSize?.height : 45
  }

  const propsOut: Record<string, any> = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: { ...style.image, width, height },
      },
      resizeMode: 'cover',
      testID: 'ChatCard_imageYrl',
      uri: avatarSrc,
    },
    ButtonYrl: {
      // titleText: nameStatus,
      styleProps: { ButtonYrl: {} },
      disabled: false,
      onPress,
      iconProps: undefined,
      testID: 'avatarPlusInfoButtonYrl',
    },
    abInCircleProps: {
      styleProps: {
        AbInCircle: {},
        text: style.image,
      },
      text: initials,
      testID: 'AvatarPlusInfoAbInCircle',
    },
  }

  return (
    <View
      style={[style.AvatarPlusInfo, styleProps.AvatarPlusInfo]}
      testID='AvatarPlusInfo'
    >
      <ButtonYrl {...propsOut.ButtonYrl}>
        <>
          {isImageAvatar && (
            <View style={[style.avatar, styleProps.avatar]} testID='avatar'>
              {avatarSrc ? (
                <ImageYrl {...propsOut.imageYrlProps} />
              ) : (
                <AbInCircle {...propsOut.abInCircleProps} />
              )}
            </View>
          )}
          {children}
        </>
      </ButtonYrl>
    </View>
  )
}

export const AvatarPlusInfo = React.memo(AvatarPlusInfoComponent)

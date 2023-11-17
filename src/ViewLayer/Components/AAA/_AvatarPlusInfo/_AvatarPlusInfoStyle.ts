import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const style = StyleSheet.create({
  AvatarPlusInfo: {
    ...styleGlobal.typography,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    paddingLeft: '1rem'.getPx(),
  },
  ImageYrl: {},
  image: {
    borderRadius: 50,
  },
  nameStatus: {
    paddingLeft: '1rem'.getPx(),
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
})

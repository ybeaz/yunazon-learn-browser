import React, { useContext, FunctionComponent } from 'react'

export interface WithUseContextYrl2Type {
  (Component: FunctionComponent<any>): FunctionComponent
}

export interface WithUseContextYrlType {
  (contextCreated: any): WithUseContextYrl2Type
}

/**
 * @description Function decorator for React Functional Component
 *    to provide a component with context data from the parent component
 *    This implementation works only for chilren, not necessarily direct ones
 *    This solution presents a declarative approach and you define a new component behavior
 *    based on its props and state.
 *    In contrast, an imperative approach useContext() approach involves
 *    directly instructing the component to perform a specific action or behavior.
 * @import import { withUseContextYrl } from './YrlNativeViewLibrary'
 */
export const withUseContextYrl: WithUseContextYrlType =
  contextCreated => Component => {
    return function WrappedComponent(props: any) {
      const contextData: any = useContext(contextCreated)
      const propsNext = { ...props, ...contextData }
      return <Component {...propsNext} />
    }
  }

/**
 * Example of usage:

import React, { createContext } from 'react'

import { Message } from '../../Components/Message/Message'
export const DataContext = createContext({
  idUserHost2: '',
  profiles2: [{}],
  messages2: [{}],
})

export const MessageWithData = withUseContextYrl(DataContext)(Message)

 * In the top parent component (not nececarily imediate parent component)


const MyParentComponent = () => {
    return (
      <DataContext.Provider
        value={{
          idUserHost2: idUserHost,
          profiles2: profiles,
          messages2: messages,
        }}
      >
          <View style={[style.chatSpace]} testID='chatSpace'>
            <ChatSpace {...propsOut.chatSpaceProps} />
          </View>
       </DataContext.Provider>)
}

 * In the child component we import and use <MessageWithData /> instead of <Message />
 */

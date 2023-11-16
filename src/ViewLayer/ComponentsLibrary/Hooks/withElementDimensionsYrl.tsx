import React, { useState, useLayoutEffect, FunctionComponent } from 'react'

export type ElementDimensionsType = {
  elementWidth: number
  elementHeight: number
}

export type withElementDimensionsYrlPropsType = FunctionComponent<any>

export interface withElementDimensionsYrlType {
  (Component: withElementDimensionsYrlPropsType): FunctionComponent
}

/**
 * @description Function decorator for React Functional Component
 *    to add dimensions of the element
 *    const { elementWidth, elementHight } = elementDimensions
 * @import import { withElementDimensionsYrl, ElementDimensionsType } from './YrlNativeViewLibrary'
 * @use export const Portfolio = withElementDimensionsYrle(React.memo(PortfolioComponent))
 */

export const withElementDimensionsYrl: withElementDimensionsYrlType = function (
  Component
) {
  return function WrappedComponent(props: any) {
    const [elementWidth, setElementWidth] = useState(0)
    const [elementHeight, setElementHeight] = useState(0)

    const handleLayout = (event: any) => {
      const { width: elementWidth, height: elementHeight } =
        event.nativeEvent.layout
      setElementWidth(elementWidth)
      setElementHeight(elementHeight)
    }

    useLayoutEffect(() => {
      handleLayout(event)
    }, [])

    const elementDimensions: ElementDimensionsType = {
      elementWidth,
      elementHeight,
    }

    const propsNext = { ...props, elementDimensions }
    return (
      <div className='withElementDimensionsYrl'>
        <Component {...propsNext} />
      </div>
    )
  }
}

/*

const MyComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  };

  return (
    <View onLayout={handleLayout}>
      <Text>Width: {width}, Height: {height}</Text>
    </View>
  );
};

export default MyComponent;

*/

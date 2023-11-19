import React, { useEffect, useState, FunctionComponent } from 'react'

export type withDelayYrlPropsType = FunctionComponent<any>

interface withDelayInnerYrlType {
  (Component: withDelayYrlPropsType): FunctionComponent
}

type withDelayPropsYrlType = {
  delay: number
}

export interface WithDelayYrlType {
  (props: withDelayPropsYrlType): withDelayInnerYrlType
}

/**
 * @description Function decorator for React Functional Component
 *    to render the component with delay
 * @import import { withDelayYrl } from './YrlNativeViewLibrary'
 * @use export const Portfolio = withDeviceType(React.memo(PortfolioComponent))
 */

export const withDelayYrl: WithDelayYrlType = ({ delay }) =>
  function (Component) {
    return function WrappedComponent(props: any) {
      const [isReady, setIsReady] = useState(false)

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsReady(true)
        }, delay)

        return () => {
          clearTimeout(timer)
        }
      }, [delay])

      return isReady ? <Component {...props} /> : null
    }
  }

/*

import React, { useState, useEffect } from 'react';

function DelayedRender({ children, delay = 1000 }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return isReady ? children : null;
}

export default DelayedRender;
*/

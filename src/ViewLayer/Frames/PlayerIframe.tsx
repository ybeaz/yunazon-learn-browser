import React from 'react'

interface PlayerComponentArgs {
  contentID: string
  isVisible: boolean
  children: React.ReactChildren
}

export const PlayerIframe: React.FunctionComponent<PlayerComponentArgs> =
  props => {
    const { contentID, isVisible } = props

    let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

    return (
      <div className='PlayerIframe'>
        <div className={`__wrapper ${isVisibleClass}`}>
          <div className='_player' id={contentID}></div>
          {props.children[0]}
        </div>

        <div className='__panel'>{props.children[1]}</div>
      </div>
    )
  }

// const URL = 'https://www.youtube.com/iframe_api'
// const globalYouTubeVar = 'YT'
// export const PlayerIframe = makeAsyncScriptLoader(URL, {
//   // callbackName: onYouTubeIframeAPIReady,
//   globalYouTubeVar,
// })(PlayerComponent)

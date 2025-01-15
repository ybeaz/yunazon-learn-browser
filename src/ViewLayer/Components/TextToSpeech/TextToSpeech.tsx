import React, { useState, useRef } from 'react'

import { ButtonYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'

import {
  TextToSpeechComponentPropsType,
  TextToSpeechPropsType,
  TextToSpeechPropsOutType,
  TextToSpeechComponentType,
  TextToSpeechType,
} from './TextToSpeechTypes'

/**
 * @description Component to render TextToSpeech
 * @import import { TextToSpeech, TextToSpeechPropsType, TextToSpeechPropsOutType, TextToSpeechType } 
             from '../Components/TextToSpeech/TextToSpeech'
 */
const TextToSpeechComponent: TextToSpeechComponentType = (
  props: TextToSpeechComponentPropsType
) => {
  const { classAdded, children } = props

  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const utteranceRef = useRef(null)
  const textAreaRef = useRef(null)

  const speak = () => {
    const synth = window.speechSynthesis
    const text = textAreaRef.current.innerText

    if (isPaused) {
      synth.resume()
    } else {
      utteranceRef.current = new SpeechSynthesisUtterance(text)
      utteranceRef.current.onend = () => {
        setIsSpeaking(false)
        setIsPaused(false)
      }
      synth.speak(utteranceRef.current)
    }

    setIsSpeaking(true)
    setIsPaused(false)
  }

  const pause = () => {
    const synth = window.speechSynthesis
    synth.pause()
    setIsSpeaking(false)
    setIsPaused(true)
  }

  const stop = () => {
    const synth = window.speechSynthesis
    synth.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
  }

  const propsOut: TextToSpeechPropsOutType = {
    buttonSpeakProps: {
      icon: isPaused ? 'MdOutlinePlayArrow' : 'MdOutlineVolumeUp',
      classAdded: 'Button_',
      handleEvents: speak,
      action: {},
      isDisplaying: !isSpeaking || isPaused,
    },
    buttonPauseProps: {
      icon: 'MdOutlinePause',
      classAdded: 'Button_',
      handleEvents: pause,
      action: {},
      isDisplaying: isSpeaking && !isPaused,
    },
    buttonStopProps: {
      icon: 'MdOutlineStop',
      classAdded: 'Button_',
      handleEvents: stop,
      action: {},
      isDisplaying: isSpeaking || isPaused,
    },
  }

  return (
    <div className={getClasses('TextToSpeech', classAdded)}>
      <div className='_buttonsWrapper'>
        <ButtonYrl {...propsOut.buttonSpeakProps} />
        <ButtonYrl {...propsOut.buttonPauseProps} />
        <ButtonYrl {...propsOut.buttonStopProps} />
      </div>
      <div ref={textAreaRef}>
        <>{children}</>
      </div>
    </div>
  )
}

const TextToSpeech: TextToSpeechType = React.memo(TextToSpeechComponent)

export type { TextToSpeechPropsType, TextToSpeechType }
export { TextToSpeech }

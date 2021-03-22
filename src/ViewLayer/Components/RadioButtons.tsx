import React from 'react'

export const RadioButtons: Function = (props: any): JSX.Element => {
  return (
    <div className='RadioButtons'>
      <h1>Custom Radio Buttons</h1>
      <label className='container'>
        One
        <input type='radio' checked={true} name='radio' />
        <span className='checkmark'></span>
      </label>
      <label className='container'>
        Two
        <input type='radio' name='radio' />
        <span className='checkmark'></span>
      </label>
      <label className='container'>
        Three
        <input type='radio' name='radio' />
        <span className='checkmark'></span>
      </label>
      <label className='container'>
        Four
        <input type='radio' name='radio' />
        <span className='checkmark'></span>
      </label>
    </div>
  )
}

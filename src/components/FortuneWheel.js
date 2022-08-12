import React from 'react'

export default function FortuneWheel({spinWheel, wheelColor, spinWheelMessage, turns}) {

  return (
    <div className='fortuneWheel'>
        <button onClick={spinWheel}>Spin The Wheel</button>
        <p>You Have {10 - turns}</p>
        <p className='turns'>turns left.</p>
        <img  className = {wheelColor ? `spinWheel ${wheelColor.color}` : 'spinWheel'} src = '/fortune-wheel.png' alt='fortune-wheel'></img>
        <p id={spinWheelMessage ? 'spinWheelMessage' : 'spinWheelMessageBeforeMountingDom'}>{spinWheelMessage}</p>
    </div>
  )
}

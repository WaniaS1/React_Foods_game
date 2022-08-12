import React, { useEffect, useState } from 'react'

export default function Board({board, turns}) {
  const [addedMessage, setAddedMessage] = useState('justDeleted')

  useEffect(() => {
    setAddedMessage('justAdded')
    setTimeout(() => {
      setAddedMessage('justDeleted')
    }, 2900)
  },[board])

  return (
    <>
      <h3>Your Board</h3>
      <div className='board gridContainer'>
          {board.map((item, i) => <div key = {i} className = {item && 'boardFilled'}>{item && item.food}</div>)}
      </div>
      {turns > 0.1 && <h1 className={addedMessage}>Well done!</h1>}
    </>
  )
}

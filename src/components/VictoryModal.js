import React from 'react'

export default function VictoryModal({victory, newGame, lost}) {
  return (
    <div className= {victory || lost ? "victoryAnim": "victory"}>
        {victory && 
          <>
            <h2>You Have Won!!!</h2>
            <h3>Are you ready for another try?</h3>
            <button onClick={newGame}>New Game</button>
          </>
        }
        {lost && 
            <>
              <h2>You Have Lost!!!</h2>
              <h3>Better luck next time.</h3>
              <p>Unless you`re scared</p>
              <button onClick={newGame}>New Game</button>
            </>
          }
    </div>
  )
}

import { useEffect, useState } from 'react'
import useStamps from '../hooks/useStamps'
import Board from './Board'
import FortuneWheel from './FortuneWheel'
import VictoryModal from './VictoryModal'

export default function FoodStamps() {
  const {wheelColor, spinWheel, showStamp, spinWheelMessage, board, victory, newGame, shuffleFoods, turns, lost} = useStamps()
  const [foods, setFoods] = useState([])
   useEffect(() => {
    fetch('http://localhost:3001/foodstamps')
        .then(res => res.json())
        .then(data => {

          setFoods(shuffleFoods(data))
        })
   },[victory, lost]) 
  return (
    <div className='useStamps'>
      <div className='gridContainer cardBacks'>
          {foods.map((food, i) => 
              <div key = {i} category = {food.category} food = {food.name} onClick={showStamp}><img src='/cardBack.png' alt='pancakes' ></img></div>
              )}
      </div>
      <div className='gridContainer'>
          {foods.map((food, i) => 
              <div key = {i} className = 'cardFront'>{food.name}</div>
              )}
      </div>
      {foods.length > 1 && <FortuneWheel spinWheel = {spinWheel} wheelColor = {wheelColor} spinWheelMessage = {spinWheelMessage} turns = {turns}/>}
      {wheelColor && wheelColor.color}
      {wheelColor && " " + wheelColor.category}
            
      <VictoryModal victory={victory} newGame = {newGame} lost={lost}/>
      <Board board = {board} turns = {turns}/>
  </div>
  )
}

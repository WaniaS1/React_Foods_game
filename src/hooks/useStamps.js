import {useEffect, useState} from 'react'

function useStamps() {
    const [wheelColor, setWheelColor] = useState(null)
    const [spinWheelMessage, setSpinWheelMessage] = useState('')
    const [nextSpinDone, setNextSpinDone] = useState(false)
    const [board, setBoard] = useState([...Array(6)])
    const [victory, setVictory] = useState(false)
    const [lost, setLost] = useState(false)
    const [turns, setTurns] = useState(0)

    useEffect(() => {
        const checkVictory = () => {
            let victoryBuf = true;
            board.forEach(item => {
                if(!item){
                    victoryBuf = false;
                }
            })
            setVictory(victoryBuf)
        }
        const checkLost = () => {
            if(10 - turns < 1){
                setLost(true)
            }
        }
        checkLost()
        checkVictory()
       
    },[board, turns])
    const newGame = () => {
        setVictory(false)
        setBoard([...Array(6)])
        setWheelColor(null)
        setTurns(0)
        setLost(false)

    }
   
    const shuffleFoods = (foods) => {
        return ([...foods].sort(() => Math.random() - 0.5))
    }
    
    const showStamp = (e) => {
        setNextSpinDone(false)
        //check if good food was Clicked
        
         if(nextSpinDone){
             //show and hide food Stamp
            e.currentTarget.className = 'stampVisible'
            const targetBufor =  e.currentTarget
            setTimeout(() => {
                targetBufor.className = ''
            // e.currentTarget.className = ''
                
            }, 2000)
            if(e.currentTarget.attributes.category.value === wheelColor.category){
                const matched = e.currentTarget
                setTimeout(() => {
                    matched.className = "foodMatched"
            }, 2001)
                const food = e.currentTarget.getAttribute('food')
                setBoard(prev => {
                    let boardItems = [...prev]
                    boardItems[wheelColor.nr] = {category: wheelColor.category, food, nr: wheelColor.nr}
                   // boardItems[0] = {category: wheelColor.category, food, nr: wheelColor.nr}
                    return boardItems
                })
                
            }else{
                console.log('wrong')
            }
        } else{
            setSpinWheelMessage('Please Spin the Wheel First')
        }

        // if(wheelColor.category === e.currentTarget.attributes.category){
        //     console.log('matchedd Yeeeaa')
        // } else {
        //     console.log('not matcheted unfortynatea')
        // }

    }
    const spinWheel = () => {
        setSpinWheelMessage('')
        setTurns(prev => prev + 1)
        setNextSpinDone(true)
        const degrees = Math.floor(Math.random()*360)
        switch (true) {
            case (degrees < 60):
                setWheelColor({category: 'fruits', color: 'yellow', nr: 0})
                break;
            case (degrees < 120):
                setWheelColor({category: 'vegetables', color: 'green', nr: 1})
                break;
            case (degrees < 180):
                setWheelColor({category: 'diary', color: 'blue', nr: 2})
                break;
            case (degrees < 240):
                setWheelColor({category: 'sweets', color: 'purple', nr: 3})
                break;
            case (degrees < 320):
                setWheelColor({category: 'meat', color: 'red', nr: 4})
                break;
            case (degrees < 360):
                setWheelColor({category: 'grains', color: 'orange', nr: 5})
                break;
            default:
                break;
        }
    }
  return {wheelColor, spinWheel, shuffleFoods, showStamp, spinWheelMessage, board, victory, newGame, turns, lost}
}

export default useStamps

import FoodStamps from "./components/FoodStamps";
import react, {useState, useEffect} from 'react'
import useStamps from "./hooks/useStamps";


function App() {
  
  return (
    <div className="App">
    <h2>Choose Food Stamp</h2>
      <FoodStamps />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Boxes from './components/Boxes';
import { useState } from 'react';
import Box from './components/Box';


function App() {

  const [square, setSquare] = useState(Boxes);
  
  const squareElement = square.map((eachSquare)=>{
       return <Box 
                key ={eachSquare.id}
                value = {eachSquare.id}
                on = {eachSquare.on}
                toggleClick ={flip}
              />
  })

  function flip(id){
        setSquare(prevSquares=> {
          return prevSquares.map((eachSquare) => {
               return eachSquare.id === id ? {...eachSquare, on: !eachSquare.on} : eachSquare
          })
        })
        // console.log(`Box: ${id} color flipped`)
        // // console.log(state)
  }
  return (
    <div className="App">
      <main>
          {squareElement}
          {/* Boxes will go here */}
      </main>
      
    </div>
  );
}

export default App;



// const styles = {
  //   backgroundColor : props.darkMode ? "#222222" : "#cccccc",
  //   borderRadius: "10px",
  //   width: "100px",
  //   height: "100px",
  //   border: "1px solid black",
  //   margin: '10px',
  //   display: "inline-Block",
  //   color: "white"
  // }
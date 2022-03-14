import React from 'react'
import { useState } from 'react';

function Box(props) {

    const [state, setState] = useState(props.on)

    const styles = {
        backgroundColor : state? "#222222" : "transparent",
        borderRadius: "10px",
        width: "100px",
        height: "100px",
        margin: '10px',
        border: '1px solid black',
        display: "inline-Block",
        color: "grey",
        textAlign: "center"
    };
    
      
    function flip(){
        setState(prevState=> !prevState)
        console.log(`Box: ${props.value} color flipped`)
        console.log(state)
    }
      
  return (
    <div style = {styles}
         className='main' 
         onClick={flip}
       > 
        {props.value}
    </div>
  )
}

export default Box
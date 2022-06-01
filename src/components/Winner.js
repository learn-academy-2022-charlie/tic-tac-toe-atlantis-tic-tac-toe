import React, { Component } from 'react'

 class Winner extends Component {
     winner = (squares) => {
         const lines = [
                //Fill in win conditions
                //Pass squares as a prop 

         ];
        
      for(let i=0; i<lines.length; i++){
          const [a,b,c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return `${squares[a]} is the winner!!!` 
            }
      }  
      return null 
      //Dont know currently what returning null is for 
     }
  render() {
    return (
      <div>{this.winner(this.props.squares)}</div>
    )
  }
}
export default Winner

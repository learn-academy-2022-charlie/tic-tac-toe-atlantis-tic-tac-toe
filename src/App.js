import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player: "❌"
    }
  }
  // THIS COMMENT IS FOR THE EMOJIS ❌ AND ⭕️
  //Pseudo Code for two users

  // Code below works as backup   
  // handleGamePlay = (index) => {
  //   let { squares } = this.state
  //   squares[index] = "❌"
  //   this.setState({squares: squares})
  // }

  // Below code works, but you can reassign a mark.
  // handleGamePlay = (index) => {
  //   let { squares, player } = this.state
  //   if(player === "❌" ){
  //     squares[index] = "❌"
  //     this.setState({player: "⭕️"})
  //   }else{
  //     squares[index] = "⭕️"
  //     this.setState({player:"❌"})
  //   }


  handleGamePlay = (index) => {
    let { squares, player } = this.state
    if (squares[index] !== null) {
      alert("Choose an empty square")
    }
    else if (player === "❌") {
      squares[index] = "❌"
      this.setState({ player: "⭕️" })
    } else {
      squares[index] = "⭕️"
      this.setState({ player: "❌" })
    }

    this.setState({ squares: squares })
  }


  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <p>{this.state.player}'s turn</p>
        <div className='game-board'>
          {this.state.squares.map((value, index) => {
            return (<Square
              value={value}
              index={index}
              key={index}
              handleGamePlay={this.handleGamePlay} />)
          })}
        </div>
      </>
    )
  }
}
export default App

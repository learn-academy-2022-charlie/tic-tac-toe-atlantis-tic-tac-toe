import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Winner from './components/Winner'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player: "❌",
      gameOver: false
      //Once the winner has been chosen game over becomes true and the game stops
    }
  }

  componentDidMount() {
    // Stuff that we want to load first goes here
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

  gameOver = () => {
    // let { gameOver } = this.state
    if ({ gameOver: true }) {
      return null
    } else { this.setState({ gameOver: true }) }
  }


  //Function that looks at winning sequences and says which player is the winner 
  //Possibly using componentDidMount
  //Need an array of arrays containing winning sequences
  //Needs to run after a square has been assigned to a player
  //Cannot keeping playing if a winner has been chosen 




  render() {
    console.log("State of gameOver: ", this.state.gameOver)
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
          <Winner
            squares={this.state.squares}
            gameOver={this.gameOver}
          />
        </div>
      </>
    )
  }
}
export default App

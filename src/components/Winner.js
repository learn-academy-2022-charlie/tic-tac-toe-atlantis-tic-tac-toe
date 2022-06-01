import React, { Component } from 'react'

class Winner extends Component {
  winner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return <>${squares[a]} is the winner!!! {this.props.gameOver}</>
      }
    }
    return null
    //Don't know currently what returning null is for 
  }
  render() {
    return (
      <p>{this.winner(this.props.squares)}</p>
      // The return is not centered
    )
  }
}
export default Winner

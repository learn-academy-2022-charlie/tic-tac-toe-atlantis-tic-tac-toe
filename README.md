# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### 📚 User Stories

- As a user, I can see a 3x3 grid game board on the page.
  - Branch: grid (DONE)
  - Starting out we see one square we need to have a total of 9 centered on the page. Square component needs to iterate over this.state.squares array.
  - Style in CSS to align everything to the page
- As a user, I can click on a square to mark it.
  - Branch: square-click (DONE)
  - Each square needs an onClick attribute in order to make something appear in the square once clicked
  - In order to see something appear in the box we need to change the state of the square with the emoji we want
- As a user, my partner can click on a square after me and see their mark.
  - Branch: partner-square-click (DONE)
  - In order for two users to use the game their needs to be a isXsTurn in this.state set to true once X goes then set the boolean to false so O can go
- As a user, I can't click on a square that has already been marked.
  - Branch: no-click
- As a user, when either my partner or I win the game (3 squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
  - Branch: winner
- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
  - Branch: game-stop
- As a user, I can click on a restart button that will clear the game board.
  - Branch: restart-game

### 🏔 Stretch Goals

- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)

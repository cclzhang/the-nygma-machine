import React, {Component} from 'react';
import '../styles/Maze.css'

class Maze extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    const canvas = this.refs.maze;
    //The game board 1 = walls, 0 = path
  
    const board = [
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 1, 1, 1, 0, 1, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  
  //Draw the game board
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "salmon";
    //Loop through the board array drawing the walls and the goal
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        //Draw a wall
        if (board[y][x] === 1) {
          ctx.fillRect(x * 41, y * 41, 35, 35);
        }
      }
    }
  }
  render(){
    return(
      <div className="maze">
        <h3>maze is here</h3>
        <canvas ref="maze" width="400px" height="400px"></canvas>
        <button onClick="">take me to next page</button>
      </div>
    )
  }
}

export default Maze;
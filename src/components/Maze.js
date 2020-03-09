import React, {Component} from 'react';
import '../styles/Maze.css'

class Maze extends Component {
  constructor(){
    super();

    this.state = {
      maze: [
        // maze grid
        // "0" = path
        // "1" = wall
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [-1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 9],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]
    }
  }

  movePlayer = (event) => {
    event.preventDefault();
    const keyPressed = event.keyCode;
    const down = 40;
    const up = 38;
    const left = 37;
    const right = 39;
    const copyOfMaze = [...this.state.maze];


    // execute code if keypressed is the right button
    // go through copyOfMaze array to find current position of player
    // if the next element to the right of the current player position in the array is a "0" which is a path then okay to move the player
    // break is used to stop looping - if loop continued then the player position (which is -1) will keep on getting updated as the loop continues
    if (keyPressed === right) {
      for (let y = 0; y < copyOfMaze.length; y++) {
        for (let x = 0; x < copyOfMaze[y].length; x++) {
          if (copyOfMaze[y][x] === -1 && copyOfMaze[y][x + 1] === 0) {
            copyOfMaze[y][x] = 0;
            copyOfMaze[y][x + 1] = -1;
            break;
          }

          // alert when the user has reached the end point (goal) of the maze
          if (copyOfMaze[y][x] === -1 && copyOfMaze[y][x + 1] === 9) {
            alert('Congrats! You Win!');
          }
        }
      }
    }


    // execute code if keypressed is the left button
    if (keyPressed === left) {
      for (let y = 0; y < copyOfMaze.length; y++) {
        for (let x = 0; x < copyOfMaze[y].length; x++) {
          if (copyOfMaze[y][x] === -1 && copyOfMaze[y][x - 1] === 0) {
            copyOfMaze[y][x] = 0;
            copyOfMaze[y][x - 1] = -1;
            break;
          }
        }
      }
    }


    // execute code if keypressed is the up button
    if (keyPressed === up) {
      for (let y = 0; y < copyOfMaze.length; y++) {
        for (let x = 0; x < copyOfMaze[y].length; x++) {
          if (copyOfMaze[y][x] === -1 && copyOfMaze[y - 1][x] === 0) {
            copyOfMaze[y][x] = 0;
            copyOfMaze[y - 1][x] = -1;
            break;
          }
        }
      }
    }


    // execute code if keypressed is the down button
    if (keyPressed === down) {
      let didPlayerMove = false;

      for (let y = 0; y < copyOfMaze.length; y++) {
        for (let x = 0; x < copyOfMaze[y].length; x++) {
          if (copyOfMaze[y][x] === -1 && copyOfMaze[y + 1][x] === 0) {
            copyOfMaze[y][x] = 0;
            copyOfMaze[y + 1][x] = -1;
            didPlayerMove = true;
          }
        }

        // this is needed to prevent the loop from continuing down the y axis and changing the player position
        if (didPlayerMove) {
          break;
        }
      }
    }

    // run setState to cause re-render with updated maze info
    this.setState({
      maze: copyOfMaze,
    })
  }


  updateMaze = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    // used a forEach nbd
    // nested forEach iterates through nested array
    // if array value is 0, it is a clear path for the character div
    // if array value is 1, it is a wall that the character div cannot move through
    // we use value parameter to iterate through all of the nested arrays
    // we use the index parameter to indicate position in our conditional statements
    this.state.maze.forEach((y, yIndex) => {
      y.forEach((x, xIndex) => {
        if (x === 1) {
          ctx.fillStyle = "darkgreen";
          ctx.fillRect(xIndex * 50, yIndex * 50, 50, 50);
        }
        else if (x === 0) {
          ctx.fillStyle = "pink";
          ctx.fillRect(xIndex * 50, yIndex * 50, 50, 50);
        } 
        else if (x === -1) {
          ctx.fillStyle = "blue";
          ctx.fillRect(xIndex * 50, yIndex * 50, 50, 50);          
        }
        else if (x === 9) {
          ctx.fillStyle = "red";
          ctx.fillRect(xIndex * 50, yIndex * 50, 50, 50);   
        }
      })
    })
  }

  
  // when there are changes in state or props run the method to update the maze canvas
  componentDidUpdate() {
    this.updateMaze()
  }


  componentDidMount(){
    this.updateMaze();

    // event listener on keydown
    document.addEventListener("keydown", this.movePlayer);
  }
  
  render(){
    return(
      <div className="maze">
        <h3>maze is here</h3>
        <canvas ref="canvas" width="600px" height="600px"></canvas>
      </div>
    )
  }
}

export default Maze;
import React, {Component} from 'react';
import '../styles/Maze.css'

class Maze extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const maze = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]

    // used a forEach nbd
    // nested forEach iterates through nested array
    // if array value is 0, it is a clear path for the character div
    // if array value is 1, it is a wall that the character div cannot move through
    // we use value parameter to iterate through all of the nested arrays
    // we use the index parameter to indicate position in our conditional statements
    maze.forEach((y, yIndex) => {
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
        };
      })
    })
  }

  
  
  render(){
    return(
      <div className="maze">
        <h3>maze is here</h3>
        <canvas ref="canvas" width="600px" height="600px"></canvas>
        {/* <button onClick="">take me to next page</button> */}
      </div>
    )
  }
}

export default Maze;
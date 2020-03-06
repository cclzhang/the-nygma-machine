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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    for (let y = 0; y < maze.length; y++) {
      for (let x = 0; x < maze[y].length; x++) {
        if (maze[y][x] === 1) {
          ctx.fillStyle = "darkgreen";
          ctx.fillRect(x * 50, y * 50, 50, 50);
        }
        else if (maze[y][x] === -1) {
          ctx.fillStyle = "white";
          ctx.fillRect(x * 50, y * 50, 50, 50);
        }
      }
    }
  }

  render(){
    return(
      <div className="maze">
        <h3>maze is here</h3>
        <canvas ref="canvas" width="600px" height="600px"></canvas>
        <button onClick="">take me to next page</button>
      </div>
    )
  }
}

export default Maze;
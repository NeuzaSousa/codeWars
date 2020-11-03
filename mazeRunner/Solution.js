function mazeRunner(maze, directions) {
    /*
      find starting row/col (2)
      
      for each char in directions
         calculate new row/col
         if outside the maze or value == 1 (wall)
           return 'Dead'
          if value == 3 (finish)
           return 'Finish'
           
       return 'Lost'
    */
    
    let row, col;
      
    // Determine starting point
    outer: for (let r = 0; r < maze.length; r++) {
        for (let c = 0; c < maze.length; c++) {
            if(maze[r][c] === 2) {
                row = r;
                col = c;
                break outer;
            }
        }
    }
      
    const isOutsideMaze = (i) => i < 0 || i >= maze.length;
      
        // Go through the directions array
    for (let dir of directions) {
        // Update row/col
        switch(dir) {
            case 'N':
                row--;
                break;
            case 'S':
                row++;
                break;
            case 'E':
                col++;
                break;
            case 'W':
                col--;
                break;
        }
        
        
        // Is it in maze or does it contain 1?
        if(isOutsideMaze(row) || isOutsideMaze(col) || maze[row][col] == 1) {
          return 'Dead';
        }
        
        // Does it contain 3?
        if(maze[row][col] === 3) {
          return 'Finish';
        }
    } 
        
    return 'Lost';
      
}
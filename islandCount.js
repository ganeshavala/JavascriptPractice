const islandCount = (grid) => {
  let visited = new Set();
  let count =0;
  
  for(let r=0;r<grid.length;r++){
    for(let c=0;c<grid[0].length;c++){
      if(explore(grid,r,c,visited) ===true){
        count+=1;
      }
    }
  }
  return count;
};

const explore =(grid,row,col,visited)=>{
  let rowBounds = 0<=row && row<grid.length;
  let colBounds = 0<=col && col<grid[0].length;
  
  if(!rowBounds ||!colBounds) return false;
  if(grid[row][col] ==='W') return false;
  let pos =row+","+col;
  if(visited.has(pos))return false;
  visited.add(pos);
  
  explore(grid,row-1,col,visited);
  explore(grid,row+1,col,visited);
  explore(grid,row,col-1,visited);
  explore(grid,row,col+1,visited);
  
  return true;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid);
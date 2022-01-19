var board =
`%e%%%%%%%%%\n%...%.%...%\n%.%.%.%.%%%\n%.%.......%\n%.%%%%.%%.%\n%.%.....%.%\n%%%%%%%%%x%`;

console.log(board);

let row = board.split(`\n`);

let mazeMatrix = row.map((arr) => arr.split(""));

const print = (mazeMatrix) =>{
    let row = mazeMatrix.length;
    let col = mazeMatrix[0].length;
    let mazeStr ="";
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            mazeStr +=mazeMatrix[i][j];
        }
        mazeStr+='\n';
    }

    return mazeStr;
}

const findEle = (element,mazeMatrix) =>{
    let row = mazeMatrix.length;
    let col = mazeMatrix[0].length;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(mazeMatrix[i][j]==element){
                return [i,j]
            }
        }
    }
    return [-1,-1];
}

const mazePathFinder= (mazeMatrix)=>{
    let row = mazeMatrix.length;
    let col = mazeMatrix[0].length;
    let startPos = findEle('e',mazeMatrix);
    let endPos = findEle('x',mazeMatrix);

    path(startPos[0],startPos[1]);

    function path(x,y){
        // let pos =x+','+y;
        // if(pos in h) {
        //     mazeMatrix[x][y] ='.';
        //     return false;
        // }
        // h[pos]=true;
        if(x>row-1||y>col-1||x<0||y<0){
            return false;
        }
        if(x == endPos[0] && y==endPos[1]){
            return true;
        }
        if(mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+'){
            return false;
        }
        mazeMatrix[x][y]='+';
        console.log(print(mazeMatrix));
        if(path(x,y-1)||path(x,y+1)||path(x-1,y)||path(x+1,y)){
            return true;
        }
        mazeMatrix[x][y] ='.';
        return false;
    }
}

// console.log(findEle('x',mazeMatrix));
console.log('\n'+mazePathFinder(mazeMatrix));

let matrix =[[1,2,7],[4,5,9],[7,8,1]];
let mat2= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
const rotate90Anti =(matrix) =>{
    let N = matrix.length;

    for(let x=0;x<N/2;x++){
        for(let y=x;y<N-1-x;y++){
            let temp = matrix[x][y];
            matrix[x][y]= matrix[y][N-1-x];
            matrix[y][N-1-x]=matrix[N-1-x][N-1-y];
            matrix[N-1-x][N-1-y]=matrix[N-1-y][x];
            matrix[N-1-y][x]=temp;
        }
    }

    return matrix;
}

const rotate90Clock =(matrix) =>{
    let N = matrix.length;

    for(let x=0;x<N/2;x++){
        for(let y=x;y<N-1-x;y++){
            let temp = matrix[x][y];
            matrix[x][y]= matrix[N-1-y][x];
            matrix[N-1-y][x]=matrix[N-1-x][N-1-y];
            matrix[N-1-x][N-1-y]=matrix[y][N-1-x];
            matrix[y][N-1-x]=temp;
        }
    }

    return matrix;
}

const transpose =(arr)=>{
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr[0].length;j++) {
            let temp = arr[j][i];
            arr[j][i] = arr[i][j];
            arr[i][j] = temp;
        }
    }

    console.log(arr);
           
}

const rotate =(matrix) =>{
    for(let i=0;i<matrix.length;i++){
        for(let j=0,k=matrix[0].length-1;j<k;j++,k--){
            let temp = matrix[j][i];
            matrix[j][i]=matrix[k][i];
            matrix[k][i]=temp;
        }
    }
    console.log(matrix);
}
console.log(rotate90Anti(matrix));
console.log(rotate90Clock(matrix));
transpose(mat2);
rotate(mat2);
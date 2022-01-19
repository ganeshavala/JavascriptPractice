const highestConnected =(graph) =>{
    let count =0;
    let visited = new Set();
    for(let node in graph){
        let size;
        size =checkNeighbor(graph,node,visited);
        if(size>count){
            count =size;
        }
    }
    return count;
}

const checkNeighbor =(graph,current,visited) => {
    if(visited.has(String(current))) return 0;
    visited.add(String(current));
    let sum=1;
    for(let node of graph[current]){
        sum+=checkNeighbor(graph,node,visited);
    }
    return sum;
}

const graph ={
    3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
}

let graph1 = {
    a:['b','c'],
    b:['c','a'],
    c:['b','a'],
    d:['f'],
    e:[],
    f:['d']
}

console.log(highestConnected(graph));
console.log(highestConnected(graph1));

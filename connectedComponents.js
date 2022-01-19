const connectedComponents =(graph) =>{
    let count =0;
    let visited = new Set();
    for(let node in graph){
        if(checkNeighbor(graph,node,visited) == true){
            count+=1;
        }
    }
    return count;
}

const checkNeighbor =(graph,current,visited) => {
    if(visited.has(String(current))) return false;
    visited.add(String(current));
    for(let node of graph[current]){
        checkNeighbor(graph,node,visited);
    }
    return true;
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

console.log(connectedComponents(graph));
console.log(connectedComponents(graph1));

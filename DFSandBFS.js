const DFS_iter =(graph,source) =>{
    var stack =[source];
    while(stack.length>0){
        var current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}

const DFS_recur = (graph,source) =>{
    console.log(source);
    for(let neighbor of graph[source]){
        DFS_recur(graph,neighbor);
    }
}

const BFS =(graph,source) =>{
    var queue =[source];
    while(queue.length>0){
        var current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

let graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

DFS_iter(graph,'a');
console.log("---------------")
DFS_recur(graph,'a');
console.log("---------------")
BFS(graph,'a');
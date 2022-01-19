const hasPath_DFS_Rec =(graph, sor,des) =>{
    if(sor == des) return true;
    for(let neighbor of graph[sor]){
        if(hasPath_DFS_Rec(graph, neighbor,des) == true){
            return true;
        }
    }

    return false;
}

const hasPath_DFS_Iter = (graph,sor,des)=>{
    var stack =[sor];
    while(stack.length>0){
        var current = stack.pop();
        if(current == des)return true;
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }

    return false;
}

const hasPath_BFS = (graph,sor,des) =>{
    var queue = [sor];
    while(queue.length>0){
        var current = queue.shift();
        if(current == des) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}


const graph ={
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
}

console.log(hasPath_DFS_Iter(graph,'f','k'));
console.log(hasPath_DFS_Rec(graph,'f','k'));
console.log(hasPath_BFS(graph,'i','f'));

const [a,b,c] =graph['f'];
console.log(a+"-"+b+'-'+c);
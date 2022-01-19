class graph{
    constructor(){
        this.adjacencylist ={};
    }

    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] =[];
        }
    }

    addEdge(source,destination){
        if(!this.adjacencylist[source]){
            this.addVertex(source);
        }
        if(!this.adjacencylist[destination]){
            this.addVertex(destination);
        }
        this.adjacencylist[source].push(destination);
        this.adjacencylist[destination].push(source);
    }

    removeEdge(source,destination){
        this.adjacencylist[source]=this.adjacencylist[source].filter(vertex => vertex!==destination);
        this.adjacencylist[destination]=this.adjacencylist[destination].filter(vertex => vertex!==source);
    }

    removeVertex(vertex){
        while(this.adjacencylist[vertex]){
            const adjacentVertex = this.adjacencylist[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencylist[vertex];
    }

    print(){
        console.log(this.adjacencylist);
    }
}

let newGraph = new graph();
newGraph.addVertex(1);
newGraph.addVertex(2);
newGraph.addEdge(1,2);
newGraph.addVertex(4);
newGraph.addVertex(5);
newGraph.addVertex(6);
newGraph.addVertex(7);
newGraph.addEdge(1,4);
newGraph.addEdge(2,3);
newGraph.addEdge(4,3);
newGraph.addEdge(3,5);
newGraph.addEdge(5,7);
newGraph.addEdge(5,6);
newGraph.print();

function KSorted(Karray){
    let Next,hash={},currArray,finalArray=[];
    for(var i=0;i<Karray.length;i++){
        currArray = Karray[i];
        Next = null;
        for(var j=0;j<Karray[i].length;j++){
            var currElement = Karray[i][j];
            if(Next != currElement){
                if(!hash[currElement]){
                    hash[currElement] =1;
                }
                else{
                    hash[currElement]++;
                }
            }
            Next = currElement;  
        }
    }

    for(var i in hash){
        if(hash[i] == Karray.length){
            finalArray.push(i);
        }
    }

    return finalArray;

}

console.log(KSorted([[1,1,4,4,6,6,7,9],[1,2,3,4,5,6,7],[1,2,3,4,6,7,7,8,8,8,9]]));
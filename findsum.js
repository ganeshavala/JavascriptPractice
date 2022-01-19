function findsum(arr,weight){
    //Two for loops to find the sum and return the indices
    for(var i in arr){
        for(var j in arr){
            if(arr[i]+arr[j] === weight){
                return [i,j];
            }
        }
    }
}

console.log(findsum([1,2,3,4,5,6,7,8,9,10],19));

function findSumBetter(arr, weight, h={}){
    //check if the arr.length is empty
    if(arr&&arr.length<1) return "cannot find the indices matches the weight";
    var currEle,difference;
    arr = arr.sort(function(a, b){return a - b});
    console.log(arr);
    for(var i in arr){
        currEle = arr[i];
        difference = weight - currEle;
        if(h[currEle]!=undefined){
            return [i,h[currEle]]
        }
        else{
            h[difference]=i;
        }
    }
    return "cannot find the indices matches the weight";
}

console.log(findSumBetter([5,8,3,7,6,2,9,11],19));
console.log(findSumBetter([7,6,5,4,3,2,1],11));
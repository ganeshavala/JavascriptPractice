//brute force approach using tree method
function bestSum(targetSum,arr){
if(targetSum === 0) return [];
if(targetSum<0) return null;
var sum = null;
for(var num of arr){
    var remainder = targetSum -num;
    var bestResult = bestSum(remainder,arr);
    if(bestResult!==null){
        var combo = [...bestResult,num];
        if(sum === null ||combo.length<sum.length){
            sum = combo;
        }
    }
}
return sum;
}

console.log(bestSum(6,[2,3,4,5,6]));
console.log(bestSum(22,[3,5,7,9,11]));
console.log(bestSumHash(63,[7,9]));

function bestSumHash(targetSum,arr,hash={}){
    if(targetSum in hash)return hash[targetSum];
    if(targetSum === 0) return [];
    if(targetSum<0) return null;
    var sum = null;
    for(var num of arr){
        var remainder = targetSum -num;
        var bestResult = bestSum(remainder,arr,hash);
        if(bestResult!==null){
            var combo = [...bestResult,num];
            if(sum === null ||combo.length<sum.length){
                sum = combo;
            }
        }
    }
    hash[targetSum] = sum;
    return sum;
    }
    
console.log(bestSumHash(6,[2,3,4,5,6]));
console.log(bestSumHash(22,[3,5,7,9,11]));
console.log(bestSumHash(63,[7,9]));

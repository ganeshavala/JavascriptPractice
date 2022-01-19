function howSum(targetSum,arr){
    if(arr.length<1&&arr[0]!==targetSum) return false;
    let result = Array(targetSum+1).fill(null);
    result[0]=[];
    for(let i=0;i<=targetSum;i++){
        if(result[i]!== null){
        for(let num of arr){
            // console.log([...result[i],num]);
            result[i+num]=[...result[i],num];
        } 
    }
    }

    return result[targetSum];
}

console.log(howSum(6,[2,3,4,5,6]));
console.log(howSum(22,[3,5,7,9,11]));
// console.log(howSum(1098,[7,9]));
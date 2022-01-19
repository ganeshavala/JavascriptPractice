function howSum(targetsum,arr,hash={}){
    if(target in hash) return hash[targetsum];
    if(targetsum === 0) return [];
    if(targetsum <0) return null;

    for(var num of arr){
        var remainder = targetsum -num;
        var result = howSum(remainder,arr,hash);
        if(result!==null){
            hash[targetsum] = [...result,num];
            return hash[targetsum];
        }
    }
    hash[targetsum]=null;
    return null;

}

console.log(howSum(6,[2,3,4,5,6]));
console.log(howSum(22,[3,5,7,9,11]));
console.log(howSum(1098,[7,9]));
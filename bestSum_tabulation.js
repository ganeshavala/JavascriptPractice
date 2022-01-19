function bestSum(targestSum,arr){
    let result = Array(targestSum+1).fill(null);
    result[0]=[];
    for(let i=0;i<=targestSum;i++){
        if(result[i]!=null){
            for(let num of arr){
                let combo = [...result[i],num];
                if(!result[i+num]||result[i+num].length>combo.length){
                    result[i+num]=combo;
                }
            }
        }
    }
    return result[targestSum];
}

console.log(bestSum(6,[2,3,4,5,6]));
console.log(bestSum(22,[3,5,7,9,11]));
console.log(bestSum(1098,[7,9]));


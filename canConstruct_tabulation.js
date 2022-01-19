function canConstruct(targetWord,arr){
    if(targetWord == "") return false;
    let result = Array(targetWord.length+1).fill(false);
    result[0]=true;
    
    for(let i=0;i<=targetWord.length;i++){
        if(result[i]==true){
            for(let word of arr){
                if(targetWord.slice(i,i+word.length) == word){
                    result[i+word.length]= true;
                }
            }
        }
    }
    console.log(result);
    return result[targetWord.length];
}

console.log(canConstruct('abcdefg',['cd','ab','ef','abc','efg','cde']));
console.log(canConstruct('abcfg',['cd','ab','ef','abc','fg','cde']));
console.log(canConstruct('skateboard',['sk','at','ska','teb','ate','bo','rd','ard']));
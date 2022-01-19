function canCountConstruct(targetWord,arr){
    let result = Array(targetWord.length+1).fill(0);
    result[0]=1;
    for(let i=0;i<=targetWord.length;i++){
            for(let word of arr){
                if(targetWord.slice(i,i+word.length)==word){
                    result[i+word.length]+=result[i];
                }
            }
        }
    

    return result[targetWord.length];
}

console.log(canCountConstruct('abcdefg',['cd','ab','ef','defg','abc','efg','cde']));
console.log(canCountConstruct('abcfg',['cd','ab','ef','abc','fg','cde']));
console.log(canCountConstruct('skateboard',['sk','at','ebo','ska','teb','ate','bo','rd','ard']));
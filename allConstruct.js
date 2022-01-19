function allConstruct(targetWord,Word,hash={}){
    if(targetWord in hash) return hash[targetWord];
    if(targetWord === '') return [[]];
    let result =[];

    for(var w of Word){
        if(targetWord.indexOf(w) === 0){
            const suffix = targetWord.slice(w.length);
            const noOfWays = allConstruct(suffix,Word,hash);
            const totalNofWays= noOfWays.map(way => [w,...way]);
            result.push(...totalNofWays);
            
        }
    }
    hash[targetWord] = result;
    return result;
}


console.log(allConstruct('abcdefg',[ 'ab', 'de', 'ce', 'def', 'efg', 'cd','abc','fg','g' ]));
console.log(allConstruct('skateboard',['kat','bor','ate','ard','bo','ateb','ska','te','sk']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeefff',['e','eee','eeeee','eeeeeeee','ef','fff','ff']));

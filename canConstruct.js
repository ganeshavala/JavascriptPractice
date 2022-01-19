function canConstruct(targetWord,Word){
    if(targetWord === "") return true;
    
    for(var w of Word){
        if(targetWord.indexOf(w) === 0){
        const suffix = targetWord.slice(w.length);
        if(canConstruct(suffix,Word) === true){
            return true;
        }
        }
    }

    return false;
}

console.log(canConstruct('abcdefg',[ 'ab', 'de', 'ce', 'def', 'efg', 'cd' ]));
console.log(canConstruct('skateboard',['kat','bor','ate','ard','bo','ateb','ska','te']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff',['e','eee','eeeee','eeeeeeee','ef','fff','ff']));

function canConstructBetter(targetWord,Word,hash ={}){
    if(targetWord in hash) return hash[targetWord];
    if(targetWord === "") return true;
    
    for(var w of Word){
        if(targetWord.indexOf(w) === 0){
        const suffix = targetWord.slice(w.length);
        if(canConstruct(suffix,Word) === true){
            hash[suffix] = true;
            return true;
        }
        }
    }
    hash[targetWord] = false;
    return false;
}

console.log(canConstructBetter('abcdefg',[ 'ab', 'de', 'ce', 'def', 'efg', 'cd' ]));
console.log(canConstructBetter('skateboard',['kat','bor','ate','ard','bo','ateb','ski','te']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff',['e','eee','eeeee','eeeeeeee','ef','fff','ff']));
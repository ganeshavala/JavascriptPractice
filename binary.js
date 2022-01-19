const printBinary =(n) =>{
    let str ="";
    function binaryRec(n){
        if(n<2){
            str=str+n;
            return;
        }
        else{
        binaryRec(Math.floor(n/2));
        binaryRec(n%2);
        }
    }
    binaryRec(n);
    console.log(str);
}

printBinary(456);

function binaryRecBetter(n){
    let str=''
    if(n<2){
        str=str+n;
        return str;
    }
    else{
    str+=binaryRec(Math.floor(n/2),str);
    str+=binaryRec(n%2,str);
    }
    return str;
}

console.log(binaryRec(456));
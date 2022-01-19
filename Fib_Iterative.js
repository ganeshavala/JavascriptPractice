function fib(n){
    let table = Array(n+1).fill(0);
    table[1]=1;
    for(var i =0;i<=n;i++){
        table[i+1]+=table[i];
        table[i+2]+=table[i];
    }

    return table[n];
}

console.log(fib(7));
console.log(fib(799));
console.log(fib(71));
console.log(fib(23));

const fib_recur = (n,lastlast =0,last=1)=>{
if(n==0) return lastlast;
if(n==1) return last;
return fib_recur(n-1,last,lastlast+last);
}

console.log(fib_recur(10));

const pascal = (row,col)=>{
    if(col ==0) return 1;
    else if(row == 0) return 0;
    else return pascal(row-1,col)+pascal(row-1,col-1);
}

console.log(pascal(5,2));


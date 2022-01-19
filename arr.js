var arr = [3,5,22,5,77,86,45,87,98,23,38];
console.log(arr.push(99));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr);
console.log(arr.push(99));

for(var i in arr){
    console.log(arr[i]);
}

for(var elem of arr){
    console.log(elem);
}

arr.forEach(function(element,index){
    console.log(arr[index],element);
})

console.log(arr.splice(1,5));
console.log(arr);
arr =[3,5,22,5,77,86,45,87,98,23,38];
console.log(arr.splice(1,4,{Test:"Test"}));
console.log(arr);
arr =[3,5,22,5,77,86,45,87,98,23,38];
console.log(arr.slice());
console.log(arr);

function fib(n, memo ={}){
    if(n in memo)return memo[n];
    if(n<=2) return 1;
    memo[n]=fib(n-1,memo)+fib(n-2,memo);
    return memo[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(500));

function findsum(sum,arr,memo={}){
    if(sum in memo) return memo[sum];
    if(sum == 0) return true;
    if(sum<0) return false;
    for(var ele of arr){
        var NewSum = sum-ele;
        if(findsum(NewSum,arr,memo) == true){
            memo[sum]=true;
            return true;
        }

    }
    memo[sum]=false;
    return false;
}

console.log(findsum(8,[2,7,9]));
console.log(findsum(800,[2,3,5]));
console.log(findsum(300,[7,14]));


const gridTrv = (m,n,memo={}) =>{
    var key = m+","+n;
    if(key in memo)return memo[key];
    if(m ==1 && n==1) return 1;
    if(m == 0|| n==0) return 0;
    memo[key]=gridTrv(m-1,n,memo)+gridTrv(m,n-1,memo);
    return memo[key];
}

var count = Array(3).fill(0).map(x => Array(3).fill(0));
console.log("count:"+count);
console.log(count[2][1]);
console.log(gridTrv(2,3));
console.log(gridTrv(30,4));
console.log(gridTrv(30,25));

var test = Array(4).fill(5).map(x => Array(3).fill(4).map(x=>Array(3).fill(1)));
console.log("test:"+test);
console.log(test[2][1][2]);

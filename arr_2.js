var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.map(function (x){
    return x*20;
}));

console.log(arr.filter(function(x){
    return x>3;
}));

console.log(arr.reduce(function(P,C,I,arr){
    return P+C;
},3));

var M =[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20]
];

console.log(M.length);
console.log(M[M.length-1][M[0].length-1]);
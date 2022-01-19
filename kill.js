var kill = 5;
function check(){
    var kill = 8;
    console.log(kill);
}

check();


function isEquals(a, b){
    var x,y;

    x = Object.getOwnPropertyNames(a);
    y = Object.getOwnPropertyNames(b); 
    
    if(x.length !== y.length){
        return false;
    }

    for(var i = 0; i < x.length; i++){
        if(a[x[i]] !== b[x[i]]){
            return false;
        }

    }
    return true;
}

console.log(isEquals({a:1, b:2}, {a:1, b:2}));

var obj1 = {"prop1": 1, "prop2": function(){return true;}};
var obj2 = {"prop1": 1, "prop2": function(){return true;}};

console.log(0.2+0.3 === 0.5?true: false);
console.log(0.1+0.2 ==0.3?true:false);
function NumberCheck(e,r)  {
    return Math.abs(e-r) <Number.EPSILON;
}

console.log(NumberCheck(0.1+0.2, 0.3));
console.log(isEquals(obj1, obj2));
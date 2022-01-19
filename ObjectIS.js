if(!Object.is || true){
    Object_is = function ObjectIS(x,y){
        var xNegZero = IsNegativeZero(x);
        var yNegZero = IsNegativeZero(y);

        if(xNegZero || yNegZero){
            return xNegZero&&yNegZero;
        }
        else if(IsNaN(x) && IsNaN(y)){
            return true;
        }
        else{
            return x === y;
        }
        

        function IsNegativeZero(v){
            return v == 0 && (1/v) == -Infinity;
        }

        function IsNaN(v){
            return v!==v;
        }
        
    }
}

console.log(Object_is(0,-0));
console.log(Object_is(-0,-0));
console.log(Object_is(NaN,NaN));
console.log(Object_is(undefined,undefined));
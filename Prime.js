function prime(n){
    if(n<=1) return false;
    for(var i=2;i<n;i++){
        if(n%i == 0) return false;
    }
    return true;
}

console.log(prime(89));

function improvedPrime(n){
    if(n<=1) return false;
    if(n<=3) return true;
    if(n%2 == 0 || n%3 == 0) return false;
    for(var i=5; i*i<=n;i+=6){
        if(n%i == 0 || n%(i+2) == 0) return false;
    }   
    return true;
}

function PrintPrime(n){
    for(var i=2;i<=n;i++){
        if(prime(i)) console.log(i);
    }
}

function primeFactors(n){  
    while(n%2 == 0){
        console.log(2);
        n = n/2;
    }

    for(var i=3;i*i<=n;i=i+2){
        while(n%i == 0){
            console.log(i);
            n =n/i;
        }
    }

    if(n>2){
        console.log(n);
    }
}


function Modulus(base,exponent,mod){
    if(mod == 1) return 0;
    var value =1;
    for(var i=0; i<exponent; i++)
    {
        value = (value*base)%mod;
    }
    return value;
}

console.log(improvedPrime(89));
console.log(PrintPrime(897658));
primeFactors(729);
console.log(Modulus(6,7,7));
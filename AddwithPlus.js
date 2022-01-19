//add without + operator
const addwithoutplus =(a,b)=>{
    if(b == 0) return a;
    while(b>0){
        let sum = a^b;
        let carry =(a&b)<<1;
        a=sum;
        b=carry;
    }
    
    console.log(a);
}

addwithoutplus(78,99);
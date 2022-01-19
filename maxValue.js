const max = (arr) =>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let curr= arr[i];
            arr[i]=arr[i+1];
            arr[i+1] = curr;
        }
    }

    return arr[arr.length-1];
}

const min = (arr) =>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let curr= arr[i];
            arr[i]=arr[i+1];
            arr[i+1] = curr;
        }
    }

    return arr[arr.length-1];
}

const bubblesort = (arr) =>{
    let arr1=Array.from(arr),arr2=Array.from(arr);
    for(let j=0;j<arr1.length-1;j++){
        for(let i=0;i<arr1.length-j-1;i++){
            if(arr1[i]>arr1[i+1]){
                let curr= arr1[i];
                arr1[i]=arr1[i+1];
                arr1[i+1] = curr;
            }
        } 
    }

    for(let j=0;j<arr2.length-1;j++){
        for(let i=0;i<arr2.length-j-1;i++){
            if(arr2[i]<arr2[i+1]){
                let curr= arr2[i];
                arr2[i]=arr2[i+1];
                arr2[i+1] = curr;
            }
        } 
    }

   


    return [arr1,arr2];
}
let array =[21,14,19,25,11];
let sum = array.reduce(function(prev,curv,index,array){
console.log(prev,curv);
return prev+curv;
},(function(array){
    let cur=0;
    for(let i=0;i<array.length;i++){
        cur+=array[i];
    }
    return cur;
})())
console.log("sum :"+sum);
console.log(max([21,14,19,25,11]));
console.log(bubblesort([21,14,19,25,11]));
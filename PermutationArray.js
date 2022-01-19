const permutation =(str)=>{
    permuRecur(str,0,str.length-1);
}

const swap = (string,index1,index2) =>{
    let temp = string[index1];
    string[index1]=string[index2];
    string[index2]=temp;
}
const permuRecur=(str,begin,end) =>{
    if(begin == end){
        console.log(str);
        // return;
    }
    else{
        for(let i=begin;i<end+1;i++){
            swap(str,begin,i);
            permuRecur(str,begin+1,end);
            swap(str,begin,i);
     
        }
    }
}

permutation(['A','B','C']);

const permutationB =(str)=>{
    let arr = Array.from(str);
    permuRecursive(arr,0,arr.length-1);
}

const swapB = (string,index1,index2) =>{
    // let temp = string[index1];
    // string= string.replace(string.charAt(index1),string.charAt(index2));
    // string.replace(string.charAt(index2),temp);
    let temp = string[index1];
        string[index1]=string[index2];
        string[index2]=temp;
}
const permuRecursive=(str,begin,end) =>{
    if(begin == end){
        let string;
        str.forEach(function(ele,ind){
            string+=ele;
        })
        console.log(string);
        // return;
    }
    else{
        for(let i=begin;i<end+1;i++){
            swapB(str,begin,i);
            permuRecursive(str,begin+1,end);
            swapB(str,begin,i);
     
        }
    }
}
permutationB("ABC");
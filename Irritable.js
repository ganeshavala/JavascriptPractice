function iterator(){
    let step=0;
    return {
         next: () => {
            step++;

            if(step === 1){
                return {value: '😉',done:false};
            }
            if(step === 2){
                return {value: '😇',done:false};
            } 
            if(step === 3){
                return {value: '😡',done:false};
            }

            return {value: undefined, done: true};
        }
    } 
}

// const fakeIterator ={};
// fakeIterator[Symbol.iterator] = iterator;
// console.log(...fakeIterator);
const SIterator = iterator();
const {value,done} = SIterator.next();
console.log(value,done);

function sum(a,b){
    return a+b;
}


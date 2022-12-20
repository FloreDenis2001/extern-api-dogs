function addFive(n){
    return n+5;
}

function double(n){
    return n*2;
}

function finalValue(nextValue){
    console.log(`The final value is ${nextValue}`);
}


const value=5;

const mathPromise=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(typeof value==='number'){
            resolve(value);
        }else {
            reject('You must specify a number as the value');
        }
    },1000);
})

mathPromise()
.then (addFive)
.then (double)
.then (addFive)
.then(finalValue)
.catch(err=>console.log(err));
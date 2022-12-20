function adunare(a,b){
    return a+b;
}

function scadere(a,b){
    return a-b;
}
function inmultire(a,b){
    return a*b;
}
function fractie(a,b){
    return a/b;
}
//arrow functions


let suma=(a,b)=>{


    return a+b;
}

let dif=(a,b)=>{

    return a-b;
}


//Callback este o functie ce primeste ca parametru alta functie 


function exCallBack(a,b,f){

     console.log(f(a,b));
}


//ex
exCallBack(1,2,adunare);

exCallBack(3,4,dif);

exCallBack(4,5,(x,y)=>{
    return x+y-5;
});


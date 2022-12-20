
let example=(state)=>{

    return new Promise((resolve,reject)=>{
         setTimeout(()=>{


            if(state){
                 resolve("test")
            }else{

                reject("error");
                                    }

         },1000)
    })
}

example(false)
.then(data=>{

    console.log(data);

    return data+"exemplu";
})
.then(data=>{

    console.log(data);
})

.catch(err=>{
    console.log(err);
})
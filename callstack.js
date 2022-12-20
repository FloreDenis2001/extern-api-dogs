function func3(){
    console.log('Students!');
}
function func2(){
    console.log('Treehouse');
}
function func1(){
    console.log('Hi!');
    setTimeout(func2,1000);
    func3();
}


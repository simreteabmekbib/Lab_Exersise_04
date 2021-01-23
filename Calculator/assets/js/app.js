let result={
    sum: 0,
    dif: 0,
    mul: 1,
    div: 0,
    res: 0,
    numberAdd: [],
    numberMul: []

};

//ask which operator the user want

result.res=parseInt(window.prompt("Choose your operator \n For addition inter 1 \n For substraction inter 2 \n For multiplication inter 3 \n For division inter 4"));
(function (){
if (result.res == 1){
    add();
}
else if(result.res == 2){
    sub();
}
else if(result.res == 3){
    mul();
}
else if(result.res == 4){
    div();
}
})();
function add(){
    let numberOfAdd = parseInt(prompt("How many number do you want to add?"));
    for (let i = 0; i < numberOfAdd; i++) {
        result.numberAdd[i] = parseInt(prompt((i + 1) + " number you want to add"));
        result.sum = result.sum + result.numberAdd[i];
    }
    console.log("sum = " + result.sum);

}
function sub(){
    let firstNumber = parseInt(prompt("inter the first number"));
    let secondNumber = parseInt(prompt("inter the second number"))
    
    result.dif = firstNumber - secondNumber;
        
    console.log("difference = " + result.dif);

}
function mul(){

    let numberOfMul = parseInt(prompt("How many number do you want to multiply?"));
    for (let i = 0; i < numberOfMul; i++) {
        result.numberAdd[i] = parseInt(prompt((i + 1) + " number you want to multiply"));
        result.mul = result.mul * result.numberAdd[i];
    }
    console.log("result = " + result.mul);

}
function div(){
    let firstNumber = parseInt(prompt("inter the first number"));
    let secondNumber = parseInt(prompt("inter the second number"))
    if (secondNumber != 0){
    result.div = firstNumber / secondNumber;
        
    console.log("division = " + result.div);
    }
    else if (secondNumber == 0){
        alert("denomnetor can not be 0");
        div();
    }
}


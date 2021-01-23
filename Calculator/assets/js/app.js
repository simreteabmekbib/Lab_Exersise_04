let result={
    sum: 0,
    dif: 0,
    mul: 0,
    div: 0,
    res: 0,
    numberAdd: [],
    numberMul: []

};

//ask which operator the user want
result.res=parseInt(window.prompt("Choose your operator \n For addition inter 1 \n For substraction inter 2 \n For multiplication inter 3 \n For division inter 4"))
function chooceNumber(){
    if (result.res == 1){
         add();
}}
function add(){
    let numberOfAdd = parseInt(window.prompt("How many number do you want to add?"));
    for (let i = 0; i < numberOfAdd; i++) {
        result.numberAdd[i] = parseInt(prompt((i + 1) + " number you want to add"));
        result.sum = result.sum + result.numberAdd[i];
    }
    console.log("sum = " + result.sum);

}
chooceNumber();

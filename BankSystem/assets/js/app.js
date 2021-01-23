var account1 = {
    accountName: "Account1",
    balance: 100
};
var account2 = {
    accountName: "Account2",
    balance: 100
};
var cho;
var re;
var choose = ("Choose operation on your account \n For Deposit inter 1 \n For Withdraw inter 2 \n For Balance inter 3 \n For Transfer inter 4");
var res = ("Choose your account \n For account-1 inter 1 \n For account-2 inter 2 \n For Exit inter 3");
function cond() {
    re = parseInt(prompt(res));
    if (re == 1) {
        cho = parseInt(prompt(choose));
        if (cho == 1) {
            deposite();
        }
        else if (cho == 2) {
             withdraw();
        }
    }
    else if (re == 2) {
    }
    else if (re == 3) {

    }
    else {
        alert("you must inter only one or two");
    }
}

function deposite() {
    if (re == 1 && cho == "1") {
        console.log(account1.accountName);
        console.log("your account amount was " + account1.balance);
        var dep = parseInt(prompt("Inter amount of deposite"));
        account1.balance = account1.balance + dep;
        console.log("Now your balance is " + account1.balance);
        cond();
    }
    else if (re == 2 && cho == "1"){
        console.log(account2.accountName);
        console.log("your account amount was " + account2.balance);
        var dep = parseInt(prompt("Inter amount of deposite"));
        account2.balance = account2.balance + dep;
        console.log("Now your balance is " + account2.balance);
        cond();
    }
}
function withdraw() {
    if (re == 1 && cho == "2") {
        console.log(account1.accountName);
        console.log("your account amount was " + account1.balance);
        var dep = parseInt(prompt("Inter amount of withdraw"));
        account1.balance = account1.balance - dep;
        console.log("Now your balance is " + account1.balance);
        cond();
    }
    else if (re == 2 && cho =="2"){
        console.log(account2.accountName);
        console.log("your account amount was " + account2.balance);
        var dep = parseInt(prompt("Inter amount of withdraw"));
        account2.balance = account2.balance - dep;
        console.log("Now your balance is " + account2.balance);
        cond();
    }
}

(function () {
    cond();
})();
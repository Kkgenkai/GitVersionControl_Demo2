//calculate app: version 1.0.5
/* features:
 add
 sub
 mul
 div
 display
 random Numbers
 string Reversal
*/
//add feature
function calc(op, num1, num2){
    switch(op){
        case '+':
            console.log("Add: " + (num1 + num2));
            break;
        case '-':
            console.log("Sub: " + (num1 - num2));
            break;
        case '*':
            console.log("Mul: " + (num1 * num2));
            break;
        case '/':
            console.log("Div: " + (num1 / num2));
            break;
        default:
            console.log("Use a real Calculator Bro!!!");
            break;
    }
}

function randNum(){
    const randNum = {
        num1: Math.floor(Math.random() * Math.random() * 10),
        num2: Math.floor(Math.random() * Math.random() * 10)
    }

    return randNum;
}

function stringReversal(string){
    let revString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        revString += string[i];
    }

    return revString;
}

calc('+', randNum().num1, randNum().num2);
calc('*', randNum().num1, randNum().num2);
calc('/', randNum().num1, randNum().num2);
calc('-', randNum().num1, randNum().num2);

console.log(stringReversal("olleh rezyar rats"));
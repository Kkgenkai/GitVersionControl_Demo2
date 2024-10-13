//calculate app: version 1.0.6
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
function calc(op){
    const randNum = {
        num1: Math.floor(Math.random() * Math.random() * 10),
        num2: Math.floor(Math.random() * Math.random() * 10)
    }

    switch(op){
        case '+':
            console.log("Add: " + (randNum.num1 + randNum.num2));
            break;
        case '-':
            console.log("Sub: " + (randNum.num1 - randNum.num2));
            break;
        case '*':
            console.log("Mul: " + (randNum.num1 * randNum.num2));
            break;
        case '/':
            console.log("Div: " + (randNum.num1 / randNum.num2));
            break;
        default:
            console.log("Use a real Calculator Bro!!!");
            break;
    }
}

function stringReversal(string){
    let revString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        revString += string[i];
    }

    return revString;
}

calc('+');
calc('*');
calc('/');
calc('-');

console.log(stringReversal("olleh rezyar rats"));
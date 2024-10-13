//calculate app: version 1.0.3
/* features:
 add
 sub
 mul
 div
 display
*/
//add feature
function calc(op, num1, num2){
    switch(op){
        case '+':
            console.log("Add:" + (num1 + num2));
            break;
        case '-':
            console.log("Sub:" + (num1 - num2));
            break;
        case '*':
            console.log("Mul:" + (num1 * num2));
            break;
        case '/':
            console.log("Div:" + (num1 / num2));
            break;
        default:
            console.log("Use a real Calculator Bro!!!");
            break;
    }
}

calc('+', 2, 3);
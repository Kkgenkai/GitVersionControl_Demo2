//calculate app: version 1.0.2
/* features:
 add
 sub
 mul
 div
 display
*/
//add feature
let add = (num1, num2)=>{
    return num1 + num2;
}

let sub = (num1, num2)=>{
    return num1 - num2;
}

let mul = (num1, num2)=>{
    return num1 * num2;
}

let div = (num1, num2)=>{
    return num1 / num2;
}

let disp = ()=>{
    console.log("Add: " + add(2,3));
    console.log("sub: " + sub(2,3));
    console.log("Mul: " + mul(2,3));
    console.log("Div: " + div(2,3));
}

disp();
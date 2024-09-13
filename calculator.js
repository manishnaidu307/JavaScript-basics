var num = 5;
console.log("The number is: " + num);
function add(num){
    return num+num;
}
function sub(num){
    return num-num;
}
function mul(num){
    return num*num;
}
function div(num){
    return num/2;
}
function mod(num){
    return num%10;
}
console.log("addition: "+ (add(num)));
console.log("subtration: "+ (sub(num)));
console.log("multiplication: " + (mul(num)));
console.log("division: "+ (div(num)));
console.log("modulus: "+ (mod(num)));
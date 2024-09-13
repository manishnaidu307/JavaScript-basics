//A function to accept num and check palindrome or not 

let num = 1321231

console.log("Is the number palindrome or not: " + isPalindrome(num))
console.log("Is the number palindrome or not: " + isPalindrome2(num))

function isPalindrome(num){
    if(num < 0) return false
    let sum = 0
    let duplicate = num
    while(num > 0){
        sum = (sum * 10) + (num%10)
        num = Math.floor(num/10)
    }
    return sum == duplicate
}

function isPalindrome2(num){
    let str = num.toString();
    let reverse = str.split('').reverse().join('')
    return str == reverse
}
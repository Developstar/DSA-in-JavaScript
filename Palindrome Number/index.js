// Given an integer x, return true if x is a palindrome, and false otherwise.


let isPalindrome = function(x){
    let reversed = x.toString().split('').reverse().join('')
    return(x.toString() ===reversed)
    };
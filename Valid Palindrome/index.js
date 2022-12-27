// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

console.log(isPalindrome("sacecas"));  // true
console.log(isPalindrome("hero"));   // false

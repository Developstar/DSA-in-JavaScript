// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters

function lengthOfLongestSubstring(s) {
    // Set up a map to store the last occurrence of each character
    const lastOccurrence = new Map();
    // Set up variables to track the start and end of the current window
    let start = 0;
    let end = 0;
    // Set up a variable to track the length of the longest substring
    let longest = 0;
  
    // Iterate through the string one character at a time
    for (let i = 0; i < s.length; i++) {
      // Get the current character
      const char = s[i];
      // If the character has already occurred in the current window, update the start of the window to be the last occurrence of the character plus one
      if (lastOccurrence.has(char)) {
        start = Math.max(start, lastOccurrence.get(char) + 1);
      }
      // Update the end of the window to be the current position
      end = i;
      // Update the length of the longest substring if necessary
      longest = Math.max(longest, end - start + 1);
      // Update the last occurrence of the character in the map
      lastOccurrence.set(char, i);
    }
  
    return longest;
  }
  
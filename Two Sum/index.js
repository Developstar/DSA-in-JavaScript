// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let b = i + 1; b < nums.length; b++) {
      if (nums[i] + nums[b] === target) return [i, b];
    }
  }
}
 

let nums = [1,3,5,8]
let target = 9
console.log(twoSum(nums, target)) // this would print the index of numbers that would make up the specified target

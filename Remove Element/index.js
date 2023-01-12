// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.


const removeElement = function(nums, val){
    let p = 0
    
    while(p<nums.length){
        if(nums[p] == val){
            nums.splice(p,1)
        }
        else{
        p++
    }
    }
    
}


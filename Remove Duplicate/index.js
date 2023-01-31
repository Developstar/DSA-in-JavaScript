// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.




var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let pos = i + 1;
        const num = nums[pos];
        if(nums[i] === num){
            const end = nums.findIndex((n) => n > num);
            
            if(end < 0){
                nums.splice(pos);
            }else{
                const toDelete = end - pos;
                nums.splice(pos, toDelete);
            }
        }
    }
    return nums.length;
};
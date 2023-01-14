// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 
 function merge(nums1, m, nums2, n) {
    let q = m - 1;
  let r = n - 1;
  let s = m + n - 1;

  while (q >= 0 && r >= 0) {
    if (nums1[q] > nums2[r]) {
      nums1[s--] = nums1[q--];
    } else {
      nums1[s--] = nums2[r--];
    }
  }

  while (r >= 0) {
    nums1[s--] = nums2[r--];
  }
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    
    
 nums1.length = m; // set the nums1 array length to m;
    nums2.forEach(n => nums1.push(n)); // push all nums2 element to nums1
    nums1.sort((a, b) => a-b); //sort the nums1 array
    
};
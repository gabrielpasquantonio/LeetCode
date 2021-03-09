/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var final = [];
    var final1 = [];
    var final2 = []
  for(var i = 0; i < nums.length -n; i++){
  final.push(nums[i])}
  for(var j = n; j < nums.length; j++){
      final1.push(nums[j])
  }
   for(var i = 0; i < final.length ; i++){
  final2.push(final[i],final1[i])}   
   return final2 
};
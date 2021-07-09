/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  var teste = []
    for(var i = 0; i< nums.length; i++){
      teste.splice(index[i], 0, nums[i])
       teste.join
   }
    
    return teste
    
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0
    let result = []
   
    
    for(i=0; i<nums.length ; i++){
       let cv = nums[i]
       for(j=0; j<nums.length ; j++){
           let num = nums[j]
          if(cv >num) count ++        
     }
        result.push(count)
        count=0
    }
    
   return result     
};
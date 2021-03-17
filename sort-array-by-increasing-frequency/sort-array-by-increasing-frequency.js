/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    nums = nums.sort()
    let map = {}
    for (let num of nums){
        if(!map[num]){
            map[num] = 1;
        }else{
            map[num]++
                }
    }    
  return [...nums].sort((a,b) => map[a] - map [b] || b-a)  
}
;
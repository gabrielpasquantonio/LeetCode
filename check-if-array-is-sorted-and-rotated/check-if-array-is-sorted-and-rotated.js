/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
 
    let count = 0;
    for (i = 0; i< nums.length ; i++){
        if(nums[i]> nums[(i+1)%nums.length])
            count ++
    }
    if(count >1){return false;}
    else{
    return true
    }
}
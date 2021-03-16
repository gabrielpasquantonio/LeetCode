/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sum = 0;
    let final = 0
    let map = {};
    for (let num of nums){
        if(!map[num]){
            map[num] = 1;
        }else{
            map[num]++
        }
    }
for(let key in map){
    if (map[key] > 1){
        final ++
    }
}
if(final >0){
    return true
}else{
    return false
}
};
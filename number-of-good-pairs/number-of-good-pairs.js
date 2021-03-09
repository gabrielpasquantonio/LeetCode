/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
 let qtd = 0;
    nums.forEach((i, j) => nums.forEach((i2, j2) => i === i2 && j > j2 ? qtd++ : null))
    return qtd;
};



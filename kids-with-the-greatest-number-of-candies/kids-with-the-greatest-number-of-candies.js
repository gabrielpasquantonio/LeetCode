/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var maior = Math.max.apply(null, candies );
    var a = []
    for( var i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= maior){
            a.push(true)
        }else{
             a.push(false)
        }}
        return a    
};
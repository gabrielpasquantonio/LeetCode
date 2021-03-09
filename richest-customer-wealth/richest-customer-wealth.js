/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth= 0
    let sum= 0
    for(let i in accounts){
        for(let j in accounts[i]){
           sum+=accounts[i][j]; console.log("esse eh o "+ sum)
        }
        
        maxWealth=Math.max(sum, maxWealth)
        sum=0
    }
    return maxWealth
};

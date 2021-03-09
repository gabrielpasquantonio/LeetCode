/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let jewelsHT ={}
    
    for (const j of jewels ) {
        jewelsHT[j] = true
    }
    
    for (const s of stones){
        if(s in jewelsHT){
            count += 1
        }
    }
    return count
};
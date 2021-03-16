/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
   let max = Math.max(...salary);
    let min = Math.min(...salary);
    let total = max+min
    let sum = 0
    for( i=0; i< salary.length ; i ++){
      sum = sum + salary[i]
    
    }
   // let final1 = sum -total
    //let final2 = salary.length
    //let final3 = final2 - 2
    //return final1/final3
    return (sum-max-min)/(salary.length-2)
};
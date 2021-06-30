/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
 if(x==0 || x > 2147483647){
     return 0
 }   
var reversedNum =  x.toString().split('').reverse().join('') 
    
if(reversedNum[0] == "-"){
   while(reversedNum.indexOf(1) == 0)
{
    reversedNum = reversedNum.substring(1);
} 
}else if (reversedNum[0] == "0"){
   while(reversedNum.indexOf(0) == 0)
{
    reversedNum = reversedNum.substring(1);
} 
}  
   var compare = parseFloat(reversedNum)
    var final = parseFloat(reversedNum)* Math.sign(x) 
  if( compare > 2147483647 ){
      return 0
  }else{
      return final
  }
};
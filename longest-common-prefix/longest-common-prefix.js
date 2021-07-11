/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
      
    let prefix = "";
    
    if(strs.length === 0) return prefix;
    
    //Loop through the characters of the first word
    for(let i = 0; i < strs[0].length; i++) {
        
        const character = strs[0][i];
        
        //Loop & compare the above index/character with the one of each word
		//Break and return when no matching characters

        for (let j=0; j < strs.length; j++) {
            
            if(strs[j][i] !==  character) return prefix;    
            
        }
        
         prefix = prefix + character;
         
    }
    
   return prefix;  
};
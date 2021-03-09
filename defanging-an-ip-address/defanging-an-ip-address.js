/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var b = address
    var aarray = []
    for(var i = 0; i< b.length; i++){
    if(b[i] == "."){
    aarray.push("[.]")
    }else{
    aarray.push(b[i])
    }
      
}
return aarray.join('') 

};


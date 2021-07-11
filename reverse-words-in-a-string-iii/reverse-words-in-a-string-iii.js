/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
var arr = s.split(" ");
for(var i=0;i<arr.length;i++)
{
let arraydata = arr[i].split("").reverse().join("");
arr.fill(arraydata,i,i+1);
}
return arr.join(" ");
    
    
};


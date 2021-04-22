/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high,result) {
var result = 0
let value = root.val

function helper(node){
    if(!node){
        return 
    }
    
    if (node.val >= low && node.val <= high){
      result += node.val    
  }
    
if(low < node.val){
      helper(node.left)
 }
   if(high > node.val){
      helper(node.right)
 } }
    
    helper(root)
    return result
  
};
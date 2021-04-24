/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   //let's make an array out of the list
    let linkedListArray = []
    let currentNode = head || null
    while (currentNode){
        linkedListArray.push(currentNode.val)
        currentNode = currentNode.next
    }
    //console.log(linkedListArray)
    //all we have to do now is compare the array to a mirrored version of itself, and return false if there is a single mismatch
    let reversedArray = linkedListArray.slice().reverse()
    console.log ("og array = " +linkedListArray)
    console.log("reversed array = " + reversedArray)
    for (let i = 0; i < linkedListArray.length ; i++){
        if(linkedListArray[i] !== reversedArray[i]){
            return false
        }
    }
    //else
    return true
};
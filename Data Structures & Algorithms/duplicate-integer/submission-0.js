class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    
    hasDuplicate(nums) {
    let objMap = new Map()
    for(let num of nums){
        if(objMap.get(num)){
            return true
        }else{
            objMap.set(num,1)
        }
        
    }
    return false
    }
}

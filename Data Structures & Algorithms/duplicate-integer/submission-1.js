class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    
    hasDuplicate(nums) {
    if(nums.length === 0 || nums.length === 1 ){
        return false
    }
    let duplicates = new Set()
    for(let num of nums){
        if(duplicates.has(num)){
            return true
        }else{
            duplicates.add(num)
        }
    }
    return false

  }
}

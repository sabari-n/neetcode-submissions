class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    
    hasDuplicate(nums) {
        if(nums.length === 1){return false}
        let newHashMap = new Map()
        for(let i=0;i<nums.length;i++){
            if(newHashMap.has(nums[i])){
                return true
            }
            newHashMap.set(nums[i],i)
        }
        return false
    }
}

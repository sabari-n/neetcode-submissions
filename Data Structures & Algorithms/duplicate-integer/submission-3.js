class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newHashMap = new Map()

        for(let i = 0; i< nums.length; i++){
            if(newHashMap.has(nums[i])){
                return true
            }
            newHashMap.set(nums[i])

        }
        return false
    }
}

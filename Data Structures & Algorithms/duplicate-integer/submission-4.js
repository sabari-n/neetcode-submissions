class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // let hasMap = new Map()

        // for(let i =0; i<nums.length; i++){
        //     if(hasMap.has(nums[i])){
        //         return true
        //     }
        //     hasMap.set(nums[i],1)
        // }
        // return false

        let set = new Set(nums)
        if(set.size !== nums.length){
            return true
        }
        return false
        
    }
}

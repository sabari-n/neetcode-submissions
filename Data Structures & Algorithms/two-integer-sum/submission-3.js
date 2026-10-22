class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let hashMap = new Map()
        for(let [i,num] of nums.entries()){
            let matchedTarget = target - num
            if(hashMap.has(matchedTarget)){
                const index = hashMap.get(matchedTarget)
                return [index,i]
            }
            hashMap.set(num,i)
        }
        return []
    }
}

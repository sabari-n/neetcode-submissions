class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        let hashMap = new Map()
        for(let[i,value] of nums.entries()){

            const sub = target - value
            if(hashMap.has(sub)){
                return [i,hashMap.get(sub)]
            }
            hashMap.set(value,i)
        }
        return []
    }
}

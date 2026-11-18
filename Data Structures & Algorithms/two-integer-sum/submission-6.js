class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let hashMap = new Map()
        for(let [i,num] of nums.entries()){
            let sub =  target - num
            if(hashMap.has(sub)){
                return [i,hashMap.get(sub)]
            }
            hashMap.set(num,i)   
        }
        return []

    }
}

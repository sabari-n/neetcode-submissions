class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newSet = new Set()

        for(let num of nums){
            if(newSet.has(num)){
                return true
            }else{
                newSet.add(num)
            }
        }
        return false
    }
}

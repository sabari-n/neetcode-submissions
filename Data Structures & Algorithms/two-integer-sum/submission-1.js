class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     for(let i=0;i<nums.length;i++){

    //         for(let j=1;j<nums.length;j++){
    //             if(nums[i]+nums[j]===target){
    //                 return [i,j]
    //             }
    //         }

    //     }
    //     return []
    // }
twoSum(nums, target) {
        let sum = null
        let i = 0
        let j = 1
        while(sum !== target){
            if(i>=nums.length){
                break
            }
            if(j>=nums.length){
                i++;
                j=i+1
            }
           sum = nums[i]+nums[j];
            if(sum === target) {
                return [i,j]
            } else {
                j++;
            }
        }
        return []
    }
}

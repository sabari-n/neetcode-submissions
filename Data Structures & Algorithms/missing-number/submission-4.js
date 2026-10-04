class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length+1
        // for (let i=0;i<n;i++){
        //     if(nums[i] !== i){
        //         return i
        //     }
        // }
        // let i=0
        // while(i<n){
        //    if(nums[i] !== i){
        //         return i
        //     } 
        //     i++
        // }
        let i=0
        let numSet = new Set(nums)
        while(i<n){

           if(!numSet.has(i)){
                return i
            } 
            i++
        }
    }
}

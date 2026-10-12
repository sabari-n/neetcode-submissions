class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // for(let i=0;i<nums.length;i++){

        //     if(nums[i]=== target){
        //         return i 
        //     }


        // } 
        // return -1 


        let i =0
        let j = nums.length -1 
        while (i<nums.length){

            if(nums[i]=== target ){
                return i
            }else if(nums[j] === target){
                return j
            }else{
                i++;
                j--;
            }
        }
        return j
    }
}

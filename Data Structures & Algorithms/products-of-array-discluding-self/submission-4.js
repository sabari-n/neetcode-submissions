class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1)
        let rightProduct = new Array(nums.length).fill(1)
        const n = nums.length
        let left = 1 
        for(let i=0;i<n;i++){
            output[i] = left
            left=left*nums[i]
        }

        let right = 1
        for(let j = n-1; j>=0; j--){
            rightProduct[j] = right
            right=right*nums[j]
        }

        for(let k = 0; k<n; k++){
            output[k] = output[k] * rightProduct[k]

        }
        return output
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1)
    const rightProducts = new Array(nums.length).fill(1)

    let left = 1

    // Left products
    for (let i = 0; i < nums.length; i++) {
        output[i] = left
        left = left * nums[i]
    }

    // Calculate right products
    let right = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        rightProducts[i] = right
        right = right * nums[i]
    }

    // Multiply left × right
    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * rightProducts[i]
    }

    return output
}
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
    if(nums.length ===0) return 0
    const sortedNum = nums.sort((a,b)=>a-b)
    let count = 1
    let maxCount = 1

    for (let i = 1; i < sortedNum.length; i++) {
        const prevValue = sortedNum[i - 1]

        if (sortedNum[i] === prevValue + 1) {
            count++
        } else if (sortedNum[i] !== prevValue) {
            count = 1
        }

        if (count > maxCount) {
            maxCount = count
        }
    }

    return maxCount
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
    if(nums.length ===0) return 0
    const set = new Set(nums)

    let maxCount = 0
    console.log('set',set)

    for (const num of set) {

        // Is this the beginning?
        if (!set.has(num - 1)) {

            let count = 1
            let current = num

            // Find the next numbers
            while (set.has(current + 1)) {
                current++
                count++
            }

            // Remember the biggest sequence
            if (count > maxCount) {
                maxCount = count
            }
        }
    }


    return maxCount
    }
}

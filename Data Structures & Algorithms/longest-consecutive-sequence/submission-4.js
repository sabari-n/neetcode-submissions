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
    // }
    //     const set = new Set(nums)

    // let maxCount = 0

    // for (const num of set) {

    //     // Is this the beginning?
    //     if (!set.has(num - 1)) {

    //         let count = 1
    //         let current = num

    //         // Find the next numbers
    //         while (set.has(current + 1)) {
    //             current++
    //             count++
    //         }

    //         // Remember the biggest sequence
    //         if (count > maxCount) {
    //             maxCount = count
    //         }
    //     }
    // }

    // return maxCount
    }
}

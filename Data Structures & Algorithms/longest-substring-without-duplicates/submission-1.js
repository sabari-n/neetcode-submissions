class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let hashSet = new Set()
        let left = 0
        let max = 0

        for(let right = 0; right<s.length; right++){

            while(hashSet.has(s[right])){
                hashSet.delete(s[left])
                left++
            }
            
            hashSet.add(s[right])

            max = Math.max(max,hashSet.size)

        }
        return max
    }
}

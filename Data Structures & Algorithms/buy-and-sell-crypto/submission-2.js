class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let left = 0

        for(let right = 0; right<prices.length; right++){

            while(prices[left] > prices[right]){
                left++
            }
            let sold = prices[right] - prices[left]
            max = Math.max(sold,max)
        }
        return max
    }
}

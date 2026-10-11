class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        let leftPointer = 0
        let rightPointer = 1
        while(leftPointer<prices.length){
            if(prices[leftPointer]<prices[rightPointer]){
            let buy = prices[leftPointer]
            let sell = prices[rightPointer]
            let profit  = sell - buy
            res = Math.max(res,profit)
            }else{
                leftPointer = rightPointer
            }
            rightPointer++
        }
        return res
    }
}

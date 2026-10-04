class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let numberHash = new Map()
        for(let num of nums){
            if(numberHash.has(num)){
                const number = numberHash.get(num)
                numberHash.set(num,number+1)

            }else{
                numberHash.set(num,1)
            }
        }

        const sortedMap = [...numberHash.entries()].sort((a,b) => b[1]-a[1])   
        let result =[]
    for (let i = 0; i < k; i++) {
        result.push(sortedMap[i][0]);
    }

        return result

    }
}

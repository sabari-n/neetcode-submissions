class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let hashMap = new Map()

        for(let num of nums){
            if(hashMap.has(num)){
                const val = hashMap.get(num)
                hashMap.set(num,val+1)
            }else{
                hashMap.set(num,1)
            }
            
        }
        const sorted = [...hashMap.entries()].sort((a,b)=>b[1]-a[1])
        const result = []
        for(let i=0; i<k; i++){
            result.push(sorted[i][0])
        }
        return result


    }
}

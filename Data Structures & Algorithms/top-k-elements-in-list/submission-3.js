class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
    let newHashMap = new Map()
    for(let num of nums){
       if(newHashMap.has(num)){
        newHashMap.set(num,newHashMap.get(num)+1)
       }else{
        newHashMap.set(num,1)
       }
    }
   const sortedMap = [...newHashMap.entries()].sort((a,b)=>b[1]-a[1])
   const result = []
   for(let i=0; i<k; i++){
    result.push(sortedMap[i][0])
   }
    return result
    }
}

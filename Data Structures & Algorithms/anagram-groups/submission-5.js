class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map()
        const result = []
        for(let i=0; i<strs.length;i++){
            const ArrayFillForAnKey = new Array(26).fill(0)
            
            for(let char of strs[i]){
                ArrayFillForAnKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1 
            }
            const key = JSON.stringify(ArrayFillForAnKey)

            if(!hashMap.has(key)){
                hashMap.set(key,[])
            }
             hashMap.get(key).push(strs[i])
    
        }
        return [...hashMap.values()]
    }
}

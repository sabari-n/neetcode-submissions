class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


         const hashMap = new Map()

        for(let str of strs){

           const arrayFillerForUniqueKey = new Array(26).fill(0)
           for(let char of str){
            arrayFillerForUniqueKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
           }
            const uniqueKey = JSON.stringify(arrayFillerForUniqueKey)
            if(hashMap.has(uniqueKey)){
                hashMap.get(uniqueKey).push(str)
            }else{
                    hashMap.set(uniqueKey,[str])
            }

        }
        return [...hashMap.values()]
    }
}

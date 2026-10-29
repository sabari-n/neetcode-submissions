class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


         const hashMap = new Map()

         for(let i=0;i<strs.length;i++){
            const str = strs[i]
            let uniqueKey = new Array(26).fill(0)

           for(let char of str){
              uniqueKey[char.charCodeAt(0) - 'a'.charCodeAt(0)] =   uniqueKey[char.charCodeAt(0) - 'a'.charCodeAt(0)]+ 1

            }

            let uniqueKeyStr = uniqueKey.join(',')
            if(hashMap.has(uniqueKeyStr)){
                hashMap.get(uniqueKeyStr).push(str)
            }else{
                    hashMap.set(uniqueKeyStr,[str])
            }


         }
        return [...hashMap.values()]

    }
}

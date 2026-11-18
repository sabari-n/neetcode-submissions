class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        

        if(s.length !== t.length){
            return false
        }

        let newHashMap = new Map()

        for(let str of s){
            if(newHashMap.has(str)){
                newHashMap.set(str, newHashMap.get(str)+1)
            }else{
                newHashMap.set(str,1)
            }
        }
        for(let str of t){
            if(!newHashMap.get(str)){
                return false
            }else{
                newHashMap.set(str, newHashMap.get(str)-1)
            }
            
        }
        
        return true

    }
}

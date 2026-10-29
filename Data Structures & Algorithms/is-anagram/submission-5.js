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
    let hashMap = new Map()
    for(let i=0; i<s.length; i++){
      hashMap.has(s[i])?hashMap.set(s[i],hashMap.get(s[i])+1):hashMap.set(s[i], 1)
    }

    for(let i=0; i<t.length; i++){
        
   
        if(!hashMap.get(t[i])){
            return false
        }
        const value = hashMap.get(t[i])
        hashMap.set(t[i],value-1)
    }

    return true



    }
}

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

        const hashMap = new Map()
        for(let i=0; i<s.length; i++){
            if(hashMap.has(s[i])){
                const res = hashMap.get(s[i])
                hashMap.set(s[i], res+1)
            }else{
                hashMap.set(s[i], 1)
            }
        }
        for(let i=0; i<t.length; i++){
            if(hashMap.get(t[i])){
                const res = hashMap.get(t[i])
                hashMap.set(t[i], res-1)
            }else{
                return false
            }
        }
        return true
    }
}

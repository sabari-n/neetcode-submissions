class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const newHashMapS = new Map()

       if(s.length !== t.length) return false

        for(let i =0; i<s.length; i++){
            if(newHashMapS.has(s[i])){
                const increment = newHashMapS.get(s[i]) + 1
                newHashMapS.set(s[i],increment)
            }else{
            newHashMapS.set(s[i],1)
            }
        }

        for(let char of t){
            if(newHashMapS.has(char)){
                const decrement = newHashMapS.get(char) - 1
                newHashMapS.set(char,decrement)
            }
        }

        for (let value of newHashMapS.values()){
            if(value >=1){
                return false
            }
        }
        return true

    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) { 
        const newHashMap = {
            ']':'[',
            '}':'{',
            ')':'('
        }
        let result = []
        for(let i=0;i<s.length;i++){
            let c = s[i]
            if(c ==='{' || c ==='(' || c === '['){
                result.push(c)
            }else if(result[result.length-1] === newHashMap[c]){
                result.pop()
            }else{
                return false
            }
        }

        return result.length === 0

    }
}

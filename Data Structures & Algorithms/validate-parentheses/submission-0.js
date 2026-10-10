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
                console.log('c',c)
                console.log('newHashMap[c]',newHashMap[c])
                console.log('result[result.length-1]',result[result.length-1] )
                console.log('result',result)
                result.pop()
            }else{
                return false
            }
        }

        return result.length === 0

    }
}

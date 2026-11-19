class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        
        const res = {}
        for(let str of strs){
            


            
            const key = str.split('').sort().join('');
            if(res[key]){
                res[key].push(str)
            }else{
                res[key] = [str]
            }
            

        }
        return Object.values(res)

    }
}

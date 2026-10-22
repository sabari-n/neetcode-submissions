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


    let sHashMap =  new Map()
    for(let i=0; i<s.length; i++){
        sHashMap.set(s[i],sHashMap.get(s[i])+1 ||1 )
       
    }
    for(let i=0; i<t.length; i++){
        if(!sHashMap.get(t[i])){
            return false
        }
            sHashMap.set(t[i],sHashMap.get(t[i])-1)
   
    }
    return true
  
    }
}

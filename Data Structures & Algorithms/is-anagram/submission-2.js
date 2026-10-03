class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    let sCharaterMap = new Map()
    if(s.length !== t.length){
        return false
    }
    for(let schar of s){
        let getCharValue = sCharaterMap.get(schar)
        if(getCharValue>=1){
          sCharaterMap.set(schar,getCharValue+1)
        }else{
          sCharaterMap.set(schar,1)
        }
    }
    for(let tchar of t){
        let getCharValue = sCharaterMap.get(tchar)
        if(getCharValue){
            sCharaterMap.set(tchar,getCharValue-1)
        }
    }
    for(let value of sCharaterMap.values()){
        if(value>=1){
            return false
        }
    }
    return true
    }
}

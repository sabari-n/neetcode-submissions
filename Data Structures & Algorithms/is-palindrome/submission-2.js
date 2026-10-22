class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s){
    let newString = ''
    for(let char of s){

        if(char >= 'A' && char <='Z'){
           newString += char.toLowerCase()
        }else if(char >= 'a' && char <='z'){
            newString += char
        }else if(char >= '0' && char <='9'){
           newString += char
        }
    }
    const totalIteration =  Math.floor(newString.length/2)
    let l = 0
    let r = newString.length-1
    while (l<=totalIteration){
        if(newString[l]===newString[r]){
            l++
            r--
        }else{
            return false
        }
    }
    return true
}
}

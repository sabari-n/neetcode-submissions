class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

            let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        ) {
            result += char;
        }
    }

        let equalCounter = (result.length - 1)/2;
        let i = 0
        let j = result.length-1
        while(i<equalCounter){
            if(result[i].toLowerCase()!=result[j].toLowerCase()){
                return false
            }
            i++;   
            j--; 
        }
        return true
    }
}

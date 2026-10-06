class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encodingChar = '#'
    encode(strs) {
        let encodedStr = ''
        for(let str of strs){
            encodedStr += str.length + this.encodingChar + str
        }
        console.log('encodedStr',encodedStr)
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const result = []

        while (i < str.length) {
            const delimiterIndex = str.indexOf('#', i)
            const length = parseInt(str.substring(i, delimiterIndex))

            i = delimiterIndex + 1

            result.push(str.substring(i, i + length))

            i += length
        }

        return result
    }
}

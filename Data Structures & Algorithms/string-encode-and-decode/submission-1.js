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
        let decodedArray = []
for (let i = 0; i < str.length;) {
    let j = i

    while (str[j] !== '#') {
        j++
    }

    const length = Number(str.slice(i, j))
    j++

    decodedArray.push(str.slice(j, j + length))

    i = j + length
}
                        console.log('decodedArray',decodedArray)


        return decodedArray
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        const map = new Map()

        for(let i = 0; i<numbers.length; i++){
                let sub = target - numbers[i]
                if(map.has(sub)){
                    const result = map.get(sub)
                    return [result+1,i+1]
                }else{
                    map.set(numbers[i],i)
                }
        }
        return []


    }
}

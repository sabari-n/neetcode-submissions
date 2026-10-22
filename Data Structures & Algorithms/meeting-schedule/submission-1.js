/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const sortedInterval = intervals.sort((a,b)=>a.start-b.start)
        for(let i =1; i<sortedInterval.length; i++){

            if(sortedInterval[i].start < sortedInterval[i-1].end){
                return false
            }
        }
        return true
    }
}

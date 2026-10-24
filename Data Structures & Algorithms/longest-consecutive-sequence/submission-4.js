class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      nums.sort((a,b)=> a-b);
      let counter = 1;
      let longestCounter = 1;
      if (nums.length === 0) {
        counter = 0;
        return counter;
      }
      for(let i=0; i<nums.length; i++) {
        if (nums[i]===nums[i+1])
        continue;
        if (nums[i+1]-nums[i] === 1) {
            counter++
        }
        else {
            longestCounter = Math.max(counter,longestCounter);
            counter = 1;
        }
      }
      longestCounter = Math.max(counter,longestCounter);
      return longestCounter;
    }
}

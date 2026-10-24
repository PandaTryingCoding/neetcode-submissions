class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === 0) return [];
        nums.sort((a, b) => a - b);
        let frequency = [];
        let count = 1;
        for (let i = 1; i <= nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                count++;
            } else {
                frequency.push([nums[i - 1], count]);
                count = 1;
            }
        }
        frequency.sort((a, b) => b[1] - a[1]);
        let answer = [];
        for (let i = 0; i < k; i++) {
            answer.push(frequency[i][0]);
        }
        return answer;
    }
}
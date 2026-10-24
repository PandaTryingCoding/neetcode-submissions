class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let index;
        for(let i=0; i < nums.length; i++){
            if (nums[i] === target){
                index = i;
            }
        }

        if(index !== null && index !== undefined){
            return index;
        }
        else {
            return -1;
        }
    }
}

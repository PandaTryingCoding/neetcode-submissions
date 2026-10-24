class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
 const answer = [];

    for (let i = 0; i < nums.length; i++) {

        let product = 1;

        for (let j = 0; j < nums.length; j++) {

            if (i !== j) {
                product *= nums[j];
            }

        }

        answer.push(product);

    }

    return answer;
    }
}

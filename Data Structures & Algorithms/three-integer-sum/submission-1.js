class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        for (
            let fixedIndex = 0;
            fixedIndex < nums.length - 2;
            fixedIndex++
        ) {
            if (
                fixedIndex > 0 &&
                nums[fixedIndex] === nums[fixedIndex - 1]
            ) {
                continue;
            }

            let leftPointer = fixedIndex + 1;
            let rightPointer = nums.length - 1;

            while (leftPointer < rightPointer) {

                const sum =
                    nums[fixedIndex] +
                    nums[leftPointer] +
                    nums[rightPointer];

                if (sum === 0) {
                    result.push([
                        nums[fixedIndex],
                        nums[leftPointer],
                        nums[rightPointer]
                    ]);

                    leftPointer++;
                    rightPointer--;
                    while (
                        leftPointer < rightPointer &&
                        nums[leftPointer] === nums[leftPointer - 1]
                    ) {
                        leftPointer++;
                    }
                    while (
                        leftPointer < rightPointer &&
                        nums[rightPointer] === nums[rightPointer + 1]
                    ) {
                        rightPointer--;
                    }

                } else if (sum < 0) {
                    leftPointer++;

                } else {
                    rightPointer--;
                }
            }
        }

        return result;
    }
}
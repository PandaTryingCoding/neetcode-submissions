class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maximumArea = 0;
        let leftPointer = 0;
        let rightPointer = heights.length - 1;

        while (leftPointer < rightPointer){
            let width = rightPointer - leftPointer;
            let height = Math.min(heights[rightPointer], heights[leftPointer]);
            let area = height * width;
            maximumArea = Math.max(maximumArea, area);
            if (heights[leftPointer] < heights[rightPointer]){
                leftPointer++;
            }
            else{
                rightPointer--;
            }
        }

        return maximumArea;
    }
}

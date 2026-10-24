class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let leftPointer = 0;
        let rightPointer = s.length - 1;

        while (leftPointer < rightPointer){

            while (leftPointer < rightPointer && !/[a-zA-Z0-9]/.test(s[leftPointer])){
                leftPointer++;
            }

            while (leftPointer < rightPointer && !/[a-zA-Z0-9]/.test(s[rightPointer])){
                rightPointer--;
            }

            if (s[leftPointer].toLowerCase() != s[rightPointer].toLowerCase()){
                return false;
            }

            leftPointer++;
            rightPointer--;
        }

        return true;
    }
}

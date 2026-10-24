class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let left = 0;
        let longest = 0;

        for(let i = 0; i<s.length; i++)
        {
            while (seen.has(s[i]))
            {
                seen.delete(s[left]);
                left++
            }
            seen.add(s[i]);
            longest = Math.max(longest, i - left + 1)
        }
        return longest;
    }
}

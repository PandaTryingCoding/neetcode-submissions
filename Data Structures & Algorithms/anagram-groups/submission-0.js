class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const groups = {};
        for (let word of strs) {
            const key = word.split("").sort().join("");
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(word);
        }
        return Object.values(groups);
    }}
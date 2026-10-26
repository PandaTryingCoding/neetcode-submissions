
class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let list1 = l1;
        let list2 = l2;

        let newList = new ListNode(0);
        let curr = newList;
        let carry = 0;

        while (list1 !== null || list2 !== null || carry > 0) {
            let val1 = list1 !== null ? list1.val : 0;
            let val2 = list2 !== null ? list2.val : 0;

            let sum = val1 + val2 + carry;
            let digit = sum % 10;
            carry = Math.floor(sum / 10);

            curr.next = new ListNode(digit);
            curr = curr.next;

            if (list1 !== null) {
                list1 = list1.next;
            }

            if (list2 !== null) {
                list2 = list2.next;
            }
        }

        return newList.next;
    }
}

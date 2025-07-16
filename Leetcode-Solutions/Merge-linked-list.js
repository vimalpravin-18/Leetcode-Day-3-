function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var mergeKLists = function(lists) {
    const allValues = [];

    // Get the values from the user
    for (let node of lists) {
        while (node) {
            allValues.push(node.val);
            node = node.next;
        }
    }

    // Arranging in ascending order
    allValues.sort((a, b) => a - b);

    // Create a new linked list
    const dummy = new ListNode(0);
    let current = dummy;

    for (let val of allValues) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};

const arr1 = [1, 4, 5];
const arr2 = [1, 3, 4];
const arr3 = [2, 6];

const list1 = mergeKLists(arr1);
const list2 = mergeKLists(arr2);
const list3 = mergeKLists(arr3);

const merged = mergeKLists([list1, list2, list3]);

console.log(ListNode(merged)); // [1,1,2,3,4,4,5,6]

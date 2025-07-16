function getDecimalValue(head) {
    let result = 0;

    while (head !== null) {
        result = result * 2 + head.val; 
        head = head.next;
    }

    return result;
}
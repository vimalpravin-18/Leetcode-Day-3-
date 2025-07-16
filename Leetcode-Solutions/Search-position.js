var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return left;
};

console.log(searchInsert([1,2,3,4,5],5))  // 4
console.log(searchInsert([1,2,3,4,5],2))  // 1
console.log(searchInsert([1,2,4,5],3))  // 2
console.log(searchInsert([1,2,3,4,5],8))  // 5
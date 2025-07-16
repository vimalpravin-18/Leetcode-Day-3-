var findMedianSortedArrays = function(nums1, nums2) {

    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor((m + n + 1) / 2) - cut1;

        let left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        let left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];

        let right1 = cut1 === m ? Infinity : nums1[cut1];
        let right2 = cut2 === n ? Infinity : nums2[cut2];

        if (left1 <= right2 && left2 <= right1) {

          if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }

    return 0; 
};

console.log(findMedianSortedArrays([1,2,3,1,3,2],[2,3,4,5,6,4,5,4]))  // 2.5
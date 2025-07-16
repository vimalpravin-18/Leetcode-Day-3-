var maxSubsequence = function(nums, k) {
    // Step 1: Copy and sort to get top K elements
    const topK = [...nums].sort((a, b) => b - a).slice(0, k);

    // Step 2: Count frequency of topK elements
    const count = {};
    for (let num of topK) {
        count[num] = (count[num] || 0) + 1;
    }

    // Step 3: Build result by maintaining original order
    const result = [];
    for (let num of nums) {
        if (count[num]) {
            result.push(num);
            count[num]--;
        }
    }

    return result;
};


console.log(maxSubsequence([2,1,3,3])) // 2
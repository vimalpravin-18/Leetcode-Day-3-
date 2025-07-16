var maximumlength = function (nums) {

  const dp = [
    [0, 0],
    [0, 0]
  ];

  let maxlen = 0; 

  for(let x of nums) {
    let p = x % 2;
    for(let want = 0; want < 2; want++) {
      dp[p][want] = dp[want][p] + 1;
      maxlen = Math.max(maxlen, dp[p][want]);
    }
  }
  return maxlen;
}

console.log(maximumlength([1,2,3,4,2,1,4,2,3,2,3])) //  9
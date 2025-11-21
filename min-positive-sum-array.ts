function minimumSumSubarray(arr: number[], l: number, r: number): number {
  let result = Infinity;

  for (let start = 0; start < arr.length; start++) {
    let currentSum = 0;

    // grow the window up to r
    for (let len = 1; len <= r && start + len <= arr.length; len++) {
      currentSum += arr[start + len - 1];

      // only check windows of size >= l
      if (len >= l && currentSum > 0) {
        result = Math.min(result, currentSum);
      }
    }
  }

  return result === Infinity ? -1 : result;
}

console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3));

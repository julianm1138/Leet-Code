function maxAvgSubarr(nums: number[], k: number): number {
  let start = 0;
  let end = k - 1;

  let maxSum = Number.NEGATIVE_INFINITY;
  while (end < nums.length) {
    let currentSum = 0;
    for (let i = start; i <= end; i++) {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    start++;
    end++;
  }
  return maxSum / k;
}
console.log(maxAvgSubarr([1, 12, -5, -6, 50, 3], 4));

//create a k sized window
//calculate max sum
//slide it right by 1
//return max sum / k

//input -> number[], k
//output -> number
//goal: return average of the max k consecutive integers in the input
//operations: calculating comparing
//data structure: array/sliding window

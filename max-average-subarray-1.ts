function maxAvgSubarr(nums: number[], k: number): number {
  let start = 0;
  let end = k - 1;

  let maxSum = 0;
  let currentSum = 0;

  while (end < nums.length) {
    for (let i = start; i <= end; i++) {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    currentSum = 0;
    start++;
    end++;
  }
  return maxSum / k;
}
console.log(maxAvgSubarr([-1], 1));

//create a k sized window
//calculate max sum
//slide it right by 1
//return max sum / k

//input -> number[], k
//output -> number
//goal: return average of the max k consecutive integers in the input
//operations: calculating comparing
//data structure: array/sliding window

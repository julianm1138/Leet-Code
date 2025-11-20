function maxAvgSubarr(nums: number[], k: number): number {
  let start = 0;
  let end = k - 1;
  let currentSum = nums.slice(0, k).reduce((acc, val) => val + acc, 0);
  let maxSum = currentSum;
  while (end < nums.length) {
    end++;
    currentSum = currentSum + nums[end] - nums[start];
    start++;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
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

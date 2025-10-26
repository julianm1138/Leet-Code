function productExceptSelf(nums: number[]): number[] {
  let before = 1; //start at 1
  let after = 1;
  const prefix = Array(nums.length).fill(1); //array of 1's [1,1,1,1,1]
  const suffix = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    prefix[i] = before; //assign a number to each spot in the prefix array
    before *= nums[i]; //multiply by every number except the last one to always get every number before the current index
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    suffix[i] = after;
    after *= nums[i];
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(suffix[i] * prefix[i]);
  }
  return result;
}

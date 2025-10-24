function productExceptSelf(nums: number[]): number[] {
  let before = 1;
  let after = 1;

  const suffix = Array(nums.length).fill(1);
  const prefix = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    prefix[i] = before;
    before *= nums[i];
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

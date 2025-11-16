function removeDuplicates(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.shift();
      console.log(nums);
    }
  }
  return nums.length;
}
console.log(removeDuplicates([0, 0, 1, 1, 1]));

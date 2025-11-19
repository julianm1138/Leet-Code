function removeDuplicates(nums: any[]): number {
  if (nums.length === 0) return 0;

  let writer = 0;
  let reader = 1;
  while (reader < nums.length) {
    if (nums[reader] !== nums[writer]) {
      writer++;
      nums[writer] = nums[reader];
    }
    reader++;
  }

  return writer + 1;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

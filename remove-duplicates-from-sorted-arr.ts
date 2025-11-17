function removeDuplicates(nums: any[]): number {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== "_") {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = "_";
  }

  console.log("nums", nums);
  return nums.length;
}
console.log(removeDuplicates([0, 0, 1, 1, 1]));

function containsDuplicate(nums: number[]): boolean {
  let set = new Set<number>(nums);
  return set.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 2, 1]));

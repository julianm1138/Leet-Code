function removeDuplicates(nums: number[]): number {
  const set = new Set(nums);

  return set.size;
}
console.log(removeDuplicates([1, 1, 2]));

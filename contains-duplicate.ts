function containsDuplicate(nums: number[]): boolean {
  const set = new Set([...nums]);
  console.log(set);
  return set.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 2, 1]));

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let current = 0; current < sortedNums.length - 2; current++) {
    if (sortedNums[current] === sortedNums[current - 1]) continue; // skip duplicates

    let left = current + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[current] + sortedNums[left] + sortedNums[right];

      if (sum === 0) {
        result.push([sortedNums[current], sortedNums[left], sortedNums[right]]);
        // skip duplicates
        while (left < right && sortedNums[left] === sortedNums[left + 1])
          left++;
        while (left < right && sortedNums[right] === sortedNums[right - 1])
          right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-4, -1, -1, 0, 1, 2]));

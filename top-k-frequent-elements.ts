function topKFrequent(nums: number[], k: number): number[] {
  let frequencyMap: Record<number, number> = {};
  for (const num of nums) {
    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num] += 1;
    }
  }

  let bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const num in frequencyMap) {
    const freq = frequencyMap[num];
    bucket[freq].push(Number(num));
  }

  let result = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length < 1) {
      continue;
    } else if (result.length < k) {
      for (let j = 0; j < bucket[i].length; j++) {
        result.push(bucket[i][j]);
      }
    }
  }
  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

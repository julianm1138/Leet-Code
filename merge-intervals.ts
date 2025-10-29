function mergeIntervals(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let result: number[][] = [];

  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];

    if (currStart <= end) {
      end = Math.max(end, currEnd); //assign the new range, the end is the max number of the two intervals
    } else {
      result.push([start, end]); //push the start and end
      [start, end] = [currStart, currEnd]; //reassign to the new interval
    }
  }
  result.push([start, end]); //push final interval
  return result;
}
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

//identify an overlapping pair
//merge pair -> [smallest number, largest number]
//return the merged pair and the non-overlapping intervals

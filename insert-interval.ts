function insertInterval(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  let result: number[][] = [];
  let [newStart, newEnd] = newInterval;
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newStart) {
    result.push(intervals[i]);
    i++;
  }
  while (i < intervals.length && intervals[i][0] <= newStart) {
    newStart = Math.min(intervals[i][0], newStart);
    newEnd = Math.max(intervals[i][1], newEnd);
    i++;
  }
  result.push([newStart, newEnd]);
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  return result;
}
console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

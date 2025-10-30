function insertInterval(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  let result: number[][] = [];
  let [start, end] = intervals[0];
  let [newStart, newEnd] = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    if (newStart <= end) {
      end = Math.max(newEnd, end);
    } else {
      result.push([start, end]);
    }
  }
  console.log([start, end]);

  //[1, 3], [6, 9],   [2,5] -> [1,5]
  //if newStart <= end
  //set end to the max value of newEnd and end
  //else push interval
  //[1,5],[6,9]
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

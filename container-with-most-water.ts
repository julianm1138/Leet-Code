function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;

  let maxArea = 0;

  while (left <= right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const currentArea = width * height;
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    console.log("current", currentArea);
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

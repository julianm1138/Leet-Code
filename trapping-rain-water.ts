function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxRight = 0;
  let maxLeft = 0;
  let totalWater = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }

      right--;
    }
  }
  return totalWater;
}
console.log(trap([4, 2, 0, 3, 2, 5]));

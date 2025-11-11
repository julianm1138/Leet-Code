function trap(height: number[]): number {
  for (let i = 0; i < height.length; i++) {
    let maxRight = height[0];
    let maxLeft = height[0];
    maxRight = Math.max(height[i], height[i + 1]);
    maxLeft = Math.max(height[i], height[i - 1]);
    const waterLevel = Math.min(maxRight, maxLeft);
  }
  let trappedWater = waterLevel - height[i];
  return 0;
}
console.log(trap([4, 2, 0, 3, 2, 5]));

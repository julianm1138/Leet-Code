function maxProfit(prices: number[]): number {
  let currentMin = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < currentMin) currentMin = price;

    const currentProfit = price - currentMin;

    if (currentProfit > maxProfit) maxProfit = currentProfit;
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

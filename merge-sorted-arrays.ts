function mergeSortedArr(
  arr1: number[],
  m: number,
  arr2: number[],
  n: number
): number[] {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }

    k--;
  }

  return arr1;
}

console.log(mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

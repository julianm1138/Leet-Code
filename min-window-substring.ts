function minWindow(s: string, t: string): string {
  const count: Record<string, number> = {};

  for (const char of t) {
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  let left = 0;
  let right = 0;
  let minWindow = Infinity;
  let minStart = 0;
  while (right <= s.length) {
    if (count[s[right]] !== undefined) {
      count[s[right]]--;
    }

    right++;
    while (Object.values(count).every((v) => v <= 0)) {
      if (right - left <= minWindow) {
        minWindow = right - left;
      }
      count[s[left]]++;
      left++;
    }
  }

  return s.slice(minStart, minWindow);
}
console.log(minWindow("DOBECODEBANC", "ABC"));

//define hashmap/frequency map where each character of t is the key, set to how many I need
//create substring that includes everything in t
//shrink substring from the left
//if the character is seen
// until everything in the hashmap has a quantity of 1
//return window
// Input: s = "DOBECODEBANC", t = "ABC"    A: 0, B: -1, C: -1
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

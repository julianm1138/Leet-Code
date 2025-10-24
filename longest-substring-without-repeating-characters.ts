function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let end = 0;
  let longest = 0;

  while (end < s.length) {
    const currentWindow = s.slice(start, end + 1);
    const set = new Set(currentWindow);

    if (set.size < currentWindow.length) {
      start++;
    } else {
      end++;
      longest = Math.max(longest, currentWindow.length);
    }
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

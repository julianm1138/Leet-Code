function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let maxLen = 0;
  const seen = new Set<string>();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    while (seen.has(char)) {
      seen.delete(s[start]);
      start++;
    }
    seen.add(char);
    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

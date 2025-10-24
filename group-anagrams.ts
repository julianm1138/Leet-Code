function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Record<string, string[]> = {};
  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(s);
    console.log(anagrams);
  }
  return Object.values(anagrams);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

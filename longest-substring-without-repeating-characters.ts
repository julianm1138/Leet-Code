function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let end = s.length - 1;

  while (end >= start) {
    let substr = s.slice(start, end);
    const set = new Set(substr);

    end--;
    console.log(substr);
    if (substr.length === set.size) {
      return substr.length;
    }
  }

  return 0;
}
console.log(lengthOfLongestSubstring("bbbbb"));

//longest substring is the whole string
//set
//substring
//compare set to the substring, if substring has different length than set, it means there are duplicates
//so the longest subtring without duplicates would be the substring with the same length as the set

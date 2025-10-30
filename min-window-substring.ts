function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }
  let window = "";
  let i = 0;
  let char = s[i];
  while (!includesAllChars(window, t)) {
    if (char.includes(t)) {
      window += char;

      while (isUnique(window)) {
        window += char;
      }
      window = "";
    }
    console.log(window);
  }
  return window;

  function includesAllChars(base: string, pattern: string): boolean {
    return [...pattern].every((char) => base.includes(char));
  }
  function isUnique(str: string): boolean {
    return new Set(str).size === str.length;
  }
}
console.log(minWindow("DOBECODEBANC", "ABC"));

//while the window does not have every character in t:
//if char includes anything from t add to the window and expand window until we hit duplicate
//while window has no duplicates and does not have everything in t
//if the window has duplicate, restart the window at that point
//return window
// Input: s = "DOBECODEBANC", t = "AB"      let window = "BA"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
